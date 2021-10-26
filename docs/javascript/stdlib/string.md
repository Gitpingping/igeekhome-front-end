# String 对象

`String`对象是`JavaScript`原生提供的三个包装对象之一，用来生成字符串对象。

```javascript
var s1 = 'abc';
var s2 = new String('abc');

typeof s1 // "string"
typeof s2 // "object"

s2.valueOf() // "abc"
```

字符串对象是一个类似数组的对象（很像数组，但不是数组）。一些数组的用法我们也可以在字符串中使用，比如：
```javascript
var str = new String('abc123');
// String {0: "a", 1: "b", 2: "c", 3: "1", 4: "2", 5: "3" length: 6}

str[5]; // => '3'
```

`String`对象还可以当作工具方法使用，将任意类型的值转为字符串。

```javascript
String(true) // "true"
String(5) // "5"
```

## 静态方法

### String.fromCharCode()

`String`对象提供的静态方法（即定义在对象本身，而不是定义在对象实例的方法），主要是`String.fromCharCode()`。该方法的参数是一个或多个数值，代表`Unicode`码点，返回值是这些码点组成的字符串。

```javascript
String.fromCharCode() // ""
String.fromCharCode(97) // "a"
String.fromCharCode(104, 101, 108, 108, 111)
// "hello"
```

## 实例属性

### String.prototype.length

字符串实例的`length`属性返回字符串的长度。

```javascript
'abc'.length // 3
```

## 实例方法

### String.prototype.concat()

`concat`方法用于连接两个字符串，返回一个新字符串，不改变原字符串。[查看详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/concat)

```javascript
var s1 = 'abc';
var s2 = 'def';

s1.concat(s2) // "abcdef"
s1 // "abc"

// 该方法可以接受多个参数。
'a'.concat('b', 'c') // "abc"
```

### String.prototype.slice()

`slice`方法用于从原字符串取出子字符串并返回，不改变原字符串。

它的第一个参数是子字符串的开始位置，第二个参数是子字符串的结束位置（不含该位置）。

```javascript
'JavaScript'.slice(0, 4) // "Java"

// 省略第二个参数，则表示子字符串一直到原字符串结束。
'JavaScript'.slice(4) // "Script"
// 参数是负值，表示从结尾开始倒数计算的位置，即该负值加上字符串长度。
'JavaScript'.slice(-6) // "Script"
'JavaScript'.slice(0, -6) // "Java"
'JavaScript'.slice(-2, -1) // "p"
```
***需要注意的是，不管参数是正数还是负数，第二个参数表示的实际位置一定要在第一个参数位置后面，否则会始终返回空字符串。***

### String.prototype.substring()

`substring`方法用于从原字符串取出子字符串并返回，不改变原字符串，跟`slice`方法很相像。

它的第一个参数表示子字符串的开始位置，第二个位置表示结束位置（返回结果不含该位置）。

```javascript
'JavaScript'.substring(0, 4) // "Java"

// 省略第二个参数，则表示子字符串一直到原字符串的结束。
'JavaScript'.substring(4) // "Script"

// 如果第一个参数大于第二个参数，substring方法会自动更换两个参数的位置。
'JavaScript'.substring(10, 4) // "Script"
// 等同于
'JavaScript'.substring(4, 10) // "Script"

// 如果参数是负数，substring方法会自动将负数转为0。
'JavaScript'.substring(-3) // "JavaScript"
'JavaScript'.substring(4, -3) // "Java"
```
由于这些规则违反直觉，因此不建议使用`substring`方法，应该优先使用`slice`。

### String.prototype.substr()

`substr`方法用于从原字符串取出子字符串并返回，不改变原字符串，跟`slice`和`substring`方法的作用相同。

`substr`方法的第一个参数是子字符串的开始位置（从0开始计算），第二个参数是子字符串的长度。

```javascript
'JavaScript'.substr(4, 6) // "Script"

// 如果省略第二个参数，则表示子字符串一直到原字符串的结束。
'JavaScript'.substr(4) // "Script"
```

### String.prototype.indexOf()

`indexOf`方法用于确定一个字符串在另一个字符串中第一次出现的位置，返回结果是匹配开始的位置。如果返回-1，就表示不匹配。

```javascript
'hello world'.indexOf('o') // 4
'JavaScript'.indexOf('script') // -1

// 接受第二个参数，表示从该位置开始向后匹配。
'hello world'.indexOf('o', 6) // 7
```

### String.prototype.lastIndexOf()

lastIndexOf方法的用法跟indexOf方法一致，主要的区别是lastIndexOf从尾部开始匹配，indexOf则是从头部开始匹配。

### String.prototype.split()

`split`方法按照给定规则分割字符串，返回一个由分割出来的子字符串组成的数组。

```javascript
'a|b|c'.split('|') // ["a", "b", "c"]

// 分割规则为空字符串，则返回数组的成员是原字符串的每一个字符。
'a|b|c'.split('') // ["a", "|", "b", "|", "c"]
// 省略参数，则返回数组的唯一成员就是原字符串。
'a|b|c'.split() // ["a|b|c"]
```