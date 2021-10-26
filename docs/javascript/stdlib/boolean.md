
# Boolean对象

`Boolean`对象是`JavaScript`的三个包装对象之一。作为构造函数，它主要用于生成布尔值的包装对象实例。

```javascript
var b = new Boolean(true);

typeof b // "object"
b.valueOf() // true
```

需要注意的是，对布尔值进行包装对象后，对应的实例是一个对象， 如果进行布尔值判断，会被转换成`true`。如果需要得到原始值，请使用`valueOf`方法进行转换。

## Boolean 函数的类型转换作用

`Boolean`对象除了可以作为构造函数，还可以单独使用，将任意值转为布尔值。这时`Boolean`就是一个单纯的工具方法。

```javascript
Boolean(undefined) // false
Boolean(null) // false
Boolean(0) // false
Boolean('') // false
Boolean(NaN) // false

Boolean(1) // true
Boolean('false') // true
Boolean([]) // true
Boolean({}) // true
Boolean(function () {}) // true
Boolean(/foo/) // true
```

除了以上几种可以转换成`false`的情况外，基本上都转换成`true`，另外上述几种转化为`true`的情况也需要记住。

***使用双重的否运算符（!）也可以将任意值转为对应的布尔值。***

对于一些特殊值，`Boolean`对象前面加不加`new`，会得到完全相反的结果，必须小心。

```javascript
if (Boolean(false)) {
  console.log('true');
} // 无输出

if (new Boolean(false)) {
  console.log('true');
} // true

if (Boolean(null)) {
  console.log('true');
} // 无输出

if (new Boolean(null)) {
  console.log('true');
} // true
```