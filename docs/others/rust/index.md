# 介绍

## 1、快速上手

### 创建项目

```shell
cargo new project-name
```

> `cargo`是`rust`的依赖管理器和构建工具，类似于 node 的 npm。
> 项目创建后自动生成初始`Cargo.toml`配置文件，包含项目的元数据和依赖库。类似于`package.json`。

### 启动项目

```shell
cargo run
```

> 此时如果电脑没有预先安装过`vs`工具，可能会报错找不到`link.exe`，这不是说 rust 本身依赖 c++，只是为了更好地与 windows 上的库交互。

通过以下命令也能安装依赖的链接器：

```shell
rustup toolchain install stable-x86_64-pc-windows-gnu
```

### 添加依赖

官方依赖仓库在[crates](https://crates.io/)

通过执行`cargo build`构建项目时会自动安装依赖包，之后在代码中通过`use`导入使用了。

> 在编译项目之前可以使用`check`命令预检查语法。

### 语法初体验

通过下面一个猜一猜小游戏感受一下Rust的语法：

:::details 猜一猜小游戏

```rust
// 导入需要的标准库和第三方库函数
use rand::Rng;
use std::cmp::Ordering;
use std::io;

// 主函数
fn main() {
    println!("Guess the number!");
	
    // 获取随机整数
    let secret_number = rand::thread_rng().gen_range(1..101);
	
    // 进入类似于do...while的循环体
    loop {
        println!("Please input your guess.");

        // 声明可变String
        let mut guess = String::new();

        io::stdin()
            .read_line(&mut guess)
            .expect("Failed to read line");

        // 类型转换，异常捕获。match类似于switch...case用法
        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };

        // 格式化输出
        println!("You guessed: {}", guess);

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("You win!");
                break;
            }
        }
    }
}

```

:::

