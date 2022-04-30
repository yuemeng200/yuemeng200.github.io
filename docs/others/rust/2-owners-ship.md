# 第2章 所有权

所有权（系统）是 Rust 最为与众不同的特性，对语言的其他部分有着深刻含义。**它让 Rust 无需垃圾回收（garbage collector）即可保障内存安全。**

所有程序都必须管理其运行时使用计算机内存的方式。一些语言中具有垃圾回收机制，在程序运行时不断地寻找不再使用的内存；在另一些语言中，程序员必须亲自分配和释放内存。Rust 则选择了第三种方式：通过所有权系统管理内存，编译器在编译时会根据一系列的规则进行检查。如果违反了任何这些规则，程序都不能编译。在运行时，所有权系统的任何功能都不会减慢程序。

:::tips 关于栈和堆

栈中的所有数据都必须占用已知且固定的大小。在编译时大小未知或大小可能变化的数据，要改为存储在堆上。 堆是缺乏组织的：当向堆放入数据时，你要请求一定大小的空间。内存分配器（memory allocator）在堆的某处找到一块足够大的空位，把它标记为已使用，并返回一个表示该位置地址的 **指针**（*pointer*）。这个过程称作 **在堆上分配内存**（*allocating on the heap*），有时简称为 “分配”（allocating）。将数据推入栈中并不被认为是分配。因为指针的大小是已知并且固定的，你可以将指针存储在栈上，不过当需要实际数据时，必须访问指针。

跟踪哪部分代码正在使用堆上的哪些数据，最大限度的减少堆上的重复数据的数量，以及清理堆上不再使用的数据确保不会耗尽空间，这些问题正是所有权系统要处理的。一旦理解了所有权，你就不需要经常考虑栈和堆了，不过明白了所有权的主要目的就是为了管理堆数据，能够帮助解释为什么所有权要以这种方式工作。

:::

## 1、什么是所有权

### （1）规则

1. Rust 中的每一个值都有一个被称为其 **所有者**（*owner*）的变量。
2. 值在任一时刻有且只有一个所有者。
3. 当所有者（变量）离开作用域，这个值将被丢弃。

### （2）资源释放策略

```rust
fn main() {
    {
        let s = String::from("hello"); // 从此处起，s 是有效的
        // 使用 s
    }                                  // 此作用域已结束，
                                       // s 不再有效
}

```

当变量离开作用域后，会自动调动`drop`函数释放内存。

#### 赋值

在其他语言中，一般允许多个变量指向一个内存单元，称为`浅拷贝`，而rust使用的是`移动所有权`的策略：

```rust
    let s1 = String::from("hello");
    let s2 = s1;

    println!("{}, world!", s1);	// error，对已经被转移所有权的引用的访问是无效的
```

所有权移动策略有利于垃圾回收，但有时候我们也希望使用浅拷贝的功能，可以使用`clone()`函数。

> 所有权移动策略是针对堆上的内存管理设计的，对于栈上的基本数据类型，依然使用拷贝策略。

除了通过`赋值`转移所有权，所有权的转移还发生在`函数传参`和`返回值`场景。

#### 函数传参

```rust

fn main() {
    let s = String::from("hello");  // s 进入作用域
    takes_ownership(s);             // s 的所有权移动到函数里 ...
                                    // ... 所以到这里不再有效
    let x = 5;                      // x 进入作用域
    makes_copy(x);                  // x 应该移动函数里，
                                    // 但 i32 是 Copy 的，
                                    // 所以在后面可继续使用 x
} // 这里, x 先移出了作用域，然后是 s。但因为 s 的值已被移走

fn takes_ownership(some_string: String) { // some_string 进入作用域
    println!("{}", some_string);
} // 这里，some_string 移出作用域并调用 `drop` 方法。
  // 占用的内存被释放

fn makes_copy(some_integer: i32) { // some_integer 进入作用域
    println!("{}", some_integer);
} // 这里，some_integer 移出作用域。没有特殊之处

```

#### 返回值

```rust
fn main() {
    let s1 = String::from("hello");
    let (s2, len) = calculate_length(s1);
    println!("The length of '{}' is {}.", s2, len);
}

fn calculate_length(s: String) -> (String, usize) {
    let length = s.len(); // len() 返回字符串的长度
    (s, length)
}
```

为了不丢失所有权，需要在函数中返回入参，这样未免过于繁琐，后面的`引用`可以解决这个问题。

## 2、引用

**引用**（*reference*）像一个指针，因为它是一个地址，我们可以由此访问储存于该地址的属于其他变量的数据，而不必转移所有权。

> 引用本质上是个`指针常量`，因为指针本身也是对象。

```rust
fn main() {
    let s1 = String::from("hello");

    let len = calculate_length(&s1);

    println!("The length of '{}' is {}.", s1, len);
}

fn calculate_length(s: &String) -> usize {
    s.len()
}
```

### 可变引用

引用默认不可变，想要修改引用内容需要`mut`修饰：

```rust
fn main() {
    let mut s = String::from("hello");

    change(&mut s);
}

fn change(some_string: &mut String) {
    some_string.push_str(", world");
}
```

同一作用域下（从创建到最后一次使用）只能有一个对某一特定数据的可变引用。这些尝试创建两个 `s` 的可变引用的代码会失败，同时也不能共存可变引用和不可变引用。

> 编译器在作用域结束之前判断不再使用的引用的能力被称为 **非词法作用域生命周期**（*Non-Lexical Lifetimes*，简称 NLL）。

### 悬垂引用

所谓悬垂指针是其指向的内存可能已经被分配给其它持有者。相比之下，在 Rust 中编译器确保引用永远也不会变成悬垂状态：当你拥有一些数据的引用，编译器确保数据不会在其引用之前离开作用域。

```rust
fn dangle() -> &String { // dangle 返回一个字符串的引用

    let s = String::from("hello"); // s 是一个新字符串

    &s // 返回字符串 s 的引用
} // 这里 s 离开作用域并被丢弃。其内存被释放。
  // 危险！
```

## 3、slice类型

*slice* 允许你引用集合中一段连续的元素序列，而不用引用整个集合。slice 是一类`引用`，所以它没有所有权。

实现一个查找字符串首个单词的函数：

```rust {1,14}
fn first_word(s: &String) -> &str {		// 字符串slice写作 &str
    let bytes = s.as_bytes();	// 字符串本身不可遍历，先转为比特数组
    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[0..i];	// slice
        }
    }
    &s[..]
}

fn main() {
    let mut s = String::from("hello world");
    let word = first_word(&s);
    s.clear(); // 错误!
    println!("the first word is: {}", word);
}
```

第14行的`clear()`需要获取字符串的可变引用，而slice又是一种不可变引用，会因为作用域产生冲突而报错，于是利用该机制提供了一种安全的保障。

> `字符串字面量`就是slice，它是一个指向二进制程序特定位置的 slice。这也就是为什么字符串字面值是不可变的。