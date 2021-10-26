# 包装对象

对象是`JavaScript`语言最主要的数据类型，三种原始类型的值——数值、字符串、布尔值——在一定条件下，也会自动转为对象，也就是原始类型的“包装对象”（wrapper）。

所谓“包装对象”，指的是与数值、字符串、布尔值分别相对应的`Number`、`String`、`Boolean`三个原生对象。这三个原生对象可以把原始类型的值变成（包装成）对象。

```javascript
var v1 = new Number(123);
var v2 = new String('abc');
var v3 = new Boolean(true);

typeof v1 // "object"
typeof v2 // "object"
typeof v3 // "object"

v1 === 123 // false
v2 === 'abc' // false
v3 === true // false
```

包装对象的设计目的，首先是使得“对象”这种类型可以覆盖`JavaScript`所有的值，整门语言有一个通用的数据模型，其次是使得原始类型的值也有办法调用自己的方法。

这三个对象作为构造函数使用（带有new）时，可以将原始类型的值转为对象；作为普通函数使用时（不带有new），可以将任意类型的值，转为原始类型的值。

## 实例方法

三种包装对象各自提供了许多实例方法，详见后文。这里介绍两种它们共同具有、从`Object`对象继承的方法：`valueOf()`和`toString()`。

### valueOf

`valueOf()`方法返回包装对象实例对应的原始类型的值。

```javascript
new Number(123).valueOf()  // 123
new String('abc').valueOf() // "abc"
new Boolean(true).valueOf() // true
```

### toString

`toString()`方法返回对应的字符串形式。

```javascript
new Number(123).toString() // "123"
new String('abc').toString() // "abc"
new Boolean(true).toString() // "true
```

## 原始类型与实例对象的自动转换

某些场合，原始类型的值会自动当作包装对象调用，即调用包装对象的属性和方法。这时，`JavaScript`引擎会自动将原始类型的值转为包装对象实例，并在使用后立刻销毁实例。

字符串可以调用`length`属性，返回字符串的长度。

## 自定义方法

除了原生的实例方法，包装对象还可以自定义方法和属性，供原始类型的值直接调用。