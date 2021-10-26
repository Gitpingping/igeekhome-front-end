# Math 对象

`Math`是`JavaScript`的原生对象，提供各种数学功能。

该对象不是构造函数，不能生成实例，所有的属性和方法都必须在`Math`对象上调用。

## 静态属性

`Math`对象的静态属性，提供以下一些数学常数。

```javascript
// Math.E：常数e。
Math.E // 2.718281828459045
// Math.LN2：2 的自然对数。
Math.LN2 // 0.6931471805599453
// Math.LN10：10 的自然对数。
Math.LN10 // 2.302585092994046
// Math.LOG2E：以 2 为底的e的对数。
Math.LOG2E // 1.4426950408889634
// Math.LOG10E：以 10 为底的e的对数。
Math.LOG10E // 0.4342944819032518
// Math.PI：常数π。
Math.PI // 3.141592653589793
// Math.SQRT1_2：0.5 的平方根。
Math.SQRT1_2 // 0.7071067811865476
// Math.SQRT2：2 的平方根。
Math.SQRT2 // 1.4142135623730951
```

***这些属性都是只读的，不能修改。***

## 静态方法

Math对象提供以下一些静态方法。

- Math.abs()：绝对值
- Math.ceil()：向上取整
- Math.floor()：向下取整
- Math.max()：最大值
- Math.min()：最小值
- Math.pow()：幂运算
- Math.sqrt()：平方根
- Math.log()：自然对数
- Math.exp()：e的指数
- Math.round()：四舍五入
- Math.random()：随机数

### Math.max()，Math.min()

`Math.max`方法返回参数之中最大的那个值，`Math.min`返回最小的那个值。如果参数为空, `Math.min`返回`Infinity`, `Math.max`返回`-Infinity`。

```javascript
Math.max(2, -1, 5) // 5
Math.min(2, -1, 5) // -1
Math.min() // Infinity
Math.max() // -Infinity
```

### Math.round()

`Math.round`方法用于四舍五入。

```javascript
Math.round(0.1) // 0
Math.round(0.5) // 1
Math.round(0.6) // 1

// 等同于
Math.floor(x + 0.5)
```

注意，它对负数的处理（主要是对`0.5`的处理）。

```javascript
Math.round(-1.1) // -1
Math.round(-1.5) // -1
Math.round(-1.6) // -2
```

### Math.pow()

```javascript
// 等同于 2 ** 2
Math.pow(2, 2) // 4
// 等同于 2 ** 3
Math.pow(2, 3) // 8
```

### Math.random()

`Math.random()`返回0到1之间的一个伪随机数，可能等于0，但是一定小于1。

```javascript
Math.random() // 0.7151307314634323
```

## 三角函数方法

`Math`对象还提供一系列三角函数方法。

- Math.sin()：返回参数的正弦（参数为弧度值）
- Math.cos()：返回参数的余弦（参数为弧度值）
- Math.tan()：返回参数的正切（参数为弧度值）
- Math.asin()：返回参数的反正弦（返回值为弧度值）
- Math.acos()：返回参数的反余弦（返回值为弧度值）
- Math.atan()：返回参数的反正切（返回值为弧度值）