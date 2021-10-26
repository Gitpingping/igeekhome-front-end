# Number 对象

`Number`对象是数值对应的包装对象，可以作为构造函数使用，也可以作为工具函数使用。

作为构造函数时，它用于生成值为数值的对象。

作为工具函数时，它可以将任何类型的值转为数值。

```javascript
var n = new Number(1);
typeof n // "object"

Number(true) // 1
```

## 静态属性

`Number`对象拥有以下一些静态属性（即直接定义在`Number`对象上的属性，而不是定义在实例上的属性）。

```javascript
Number.POSITIVE_INFINITY // => 正的无限，指向Infinity。
Number.NEGATIVE_INFINITY // => 负的无限，指向-Infinity。
Number.NaN // => 表示非数值，指向NaN。
Number.MIN_VALUE // => 表示最小的正数（即最接近0的正数，在64位浮点数体系中为5e-324），相应的，最接近0的负数为-Number.MIN_VALUE。
Number.MAX_SAFE_INTEGER // => 表示能够精确表示的最大整数，即9007199254740991。
Number.MIN_SAFE_INTEGER // => 表示能够精确表示的最小整数，即-9007199254740991。
```

## 实例方法

`Number`对象有4个实例方法，主要功能是将数值转换成指定格式。

### Number.prototype.toString()

`Number`对象部署了自己的`toString`方法，用来将一个数值转为字符串形式。

`toString`方法可以接受一个参数，表示输出的进制。如果省略这个参数，默认将数值先转为十进制。

```javascript
(10).toString() // "10"
(10).toString(2) // "1010"
(10).toString(8) // "12"
(10).toString(16) // "a"

// 如果10不加括号，会被浏览器解析成小数点。
10.toString(2); // // SyntaxError: Unexpected token ILLEGAL
// 以下方法可以解决该问题
10..toString(2)
// "1010"

// 其他方法还包括
10 .toString(2) // "1010"
10.0.toString(2) // "1010"
10['toString'](2) // "1010"

// 可以直接对小数使用
10.5.toString() // "10.5"
10.5.toString(2) // "1010.1"
10.5.toString(8) // "12.4"
10.5.toString(16) // "a.8"
```

### Number.prototype.toFixed()

`toFixed()`方法先将一个数转为指定位数的小数，然后返回这个小数对应的字符串。

```javascript
(10).toFixed(2) // "10.00"
10.005.toFixed(2) // "10.01"
```

同样，如果不加括号，点运算符会被解析成小数点。

`toFixed()`方法的参数为小数位数，有效范围为0到100，超出这个范围将抛出`RangeError`错误。

```javascript
(10.055).toFixed(2) // 10.05
(10.005).toFixed(2) // 10.01
```

### Number.prototype.toExponential()

`toExponential`方法用于将一个数转为科学计数法形式。

### Number.prototype.toPrecision()

`toPrecision`方法用于将一个数转为指定位数的有效数字。

### Number.prototype.toLocaleString()

`Number.prototype.toLocaleString`方法接受一个地区码作为参数，返回一个字符串，表示当前数字在该地区的当地书写形式。

```javascript
(123).toLocaleString('zh-Hans-CN-u-nu-hanidec')
// "一二三"
```

该方法还可以接受第二个参数配置对象，用来定制指定用途的返回字符串。该对象的`style`属性指定输出样式，默认值是`decimal`。

下面是其他几种参数：

```javascript
(123).toLocaleString('zh-Hans-CN', { style: 'percent' })
// "12,300%"
(123).toLocaleString('zh-Hans-CN', { style: 'currency', currency: 'CNY' })
// "￥123.00"

(123).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
// "123,00 €"

(123).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
// "$123.00"
```

## 自定义方法

与其他对象一样，`Number.prototype`对象上面可以自定义方法，被`Number`的实例继承。