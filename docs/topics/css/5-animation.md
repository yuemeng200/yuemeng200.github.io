# 第 5 章 动画

通过 css 实现动画有两个方案：
第一种是`transform`配合`transition`，前者更改元素属性，后者描述属性更改时的过渡效果。一般需要手动触发`transform`，像`hover`这种元素状态。

## 1、transform

用来描述一个转换，只描述应该转换为什么样子，本身不包含动画。
`transform-origin: x y`用来设置变化中心点。

### translate

### translate3d

### scale

### scale3d

### rotate

### skew

倾斜变换

### perspective

## 2、transition

描述属性从一个属性值变成另一个属性值期间如何过渡。

### transition-property

（必须）
设置过渡效果的属性名
none | all | property

> 配合`transform`时记得用`all`

### transition-duration

（必须）
过渡效果持续时间
s | ms

### transition-timing-function

速度曲线
linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier(n,n,n,n)

### transition-delay

过渡效果延迟开始时间
s | ms

## 3、keyframes

关键帧，区别于`transform`，`keyframs`代表一种自定义的动作，它可以是一个状态的序列，每一项都可以是一个`transform`。

```css
@keyframes circleRoate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

或者是下面这种:

```css
@keyframes mymove {
  0% {
    top: 0px;
    left: 0px;
    background: red;
  }
  25% {
    top: 0px;
    left: 100px;
    background: blue;
  }
  50% {
    top: 100px;
    left: 100px;
    background: yellow;
  }
  75% {
    top: 100px;
    left: 0px;
    background: green;
  }
  100% {
    top: 0px;
    left: 0px;
    background: red;
  }
}
```

## 4、animation

其子属性和`transition`十分相似，后者用来描述属性的过渡，而其用来表述动作的过渡。且更细致一些。

- animation-name: keyframename | none
- animation-duration
- animation-timing-function
- animation-delay
- animation-iteration-count：n | infinite
- animation-direction：normal | alternate
