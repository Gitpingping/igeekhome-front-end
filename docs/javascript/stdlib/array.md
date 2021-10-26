---
lang: zh-CN
title: Array对象
description: 极客营JavaScript基础
---
# Array 对象

## 构造函数

`Array`是` `JavaScript` `的原生对象，同时也是一个构造函数，可以用它生成新的数组。

```javascript
var arr = new Array(2);
arr.length // 2
arr // [ empty x 2 ]
```

`Array`也可以直接当做函数使用，其用法与`Object`一致，从语义规范和统一性来说，建议始终加上`new`.

`Array()`构造函数有一个很大的缺陷，不同的参数个数会导致不一致的行为。

```javascript
// 无参数时，返回一个空数组
new Array() // []

// 单个正整数参数，表示返回的新数组的长度
new Array(1) // [ empty ]
new Array(2) // [ empty x 2 ]

// 非正整数的数值作为参数，会报错
new Array(3.2) // RangeError: Invalid array length
new Array(-3) // RangeError: Invalid array length

// 单个非数值（比如字符串、布尔值、对象等）作为参数，
// 则该参数是返回的新数组的成员
new Array('abc') // ['abc']
new Array([1]) // [Array[1]]

// 多参数时，所有参数都是返回的新数组的成员
new Array(1, 2) // [1, 2]
new Array('a', 'b', 'c') // ['a', 'b', 'c']
```

建议始终使用字面量的方式定义数组，以免出现上述错误情况，如果你觉得无聊可以把上面的情况背住。

如果参数是一个正整数，返回数组的成员都是空位。虽然读取的时候返回`undefined`，但实际上该位置没有任何值。虽然这时可以读取到`length`属性，但是取不到键名。

```javascript
var a = new Array(3);
var b = [undefined, undefined, undefined];

a.length // 3
b.length // 3

a[0] // undefined
b[0] // undefined

0 in a // false
0 in b // true
```

## 静态方法

### 1. Array.of

`Array.of()`方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。

```javascript
Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3);    // [1, 2, 3]
```

`Array.of`和`Array`的用法很相似，都是接收一个参数生成一个新数组，唯一的区别在于，当参数是整数的时候。

```javascript
Array.of(7);       // [7]
Array(1, 2, 3);    // [1, 2, 3]
```

### 2. Array.from

`Array.from()` `方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。

`Array.from`可以接收三个参数，分别是：想要转换成数组的类数组或者可迭代对象，转换过程中对新数组的每个元素进行处理，thisArg指定this对象。

```javascript
Array.from('foo');
// [ "f", "o", "o" ]
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);
// [ "foo", "bar", "baz" ]
```

### 3. Array.isArray

`Array.isArray`方法返回一个布尔值，表示参数是否为数组。它可以弥补`typeof`运算符的不足。

```javascript
var arr = [1, 2, 3];

typeof arr // "object"
Array.isArray(arr) // true
```

## 实例方法

### valueOf()，toString()

数组的`valueOf`方法返回数组本身。

```javascript
var arr = [1, 2, 3];
arr.valueOf() // [1, 2, 3]
```

`toString`方法也是对象的通用方法，数组的`toString`方法返回数组的字符串形式。

```javascript
var arr = [1, 2, 3];
arr.toString() // "1,2,3"

var arr = [1, 2, 3, [4, 5, 6]];
arr.toString() // "1,2,3,4,5,6"
```

利用这个我们可以实现将多维数组转换成一维数组。

### push()，pop()

`push`方法用于在数组的末端添加一个或多个元素，并返回添加新元素后的数组长度。
`pop`方法用于删除数组的最后一个元素，并返回该元素。
注意，这两个方法都会改变原数组。
```javascript
var arr = [];

arr.push(1) // 1
arr.push('a') // 2
arr.push(true, {},'c') // 4
arr // [1, 'a', true, {},'c']
arr.pop() // 'c'
arr // [1, 'a', true, {}]
```

`push`和`pop`结合使用，就构成了“后进先出”的栈结构（stack）。

### shift()，unshift()

`shift()`方法用于删除数组的第一个元素，并返回该元素。

```javascript
var a = ['a', 'b', 'c'];

a.shift() // 'a'
a // ['b', 'c']
```

`push()`和`shift()`结合使用，就构成了“先进先出”的队列结构（queue）。

`unshift()`方法用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度。

```javascript
var a = ['a', 'b', 'c'];

a.unshift('x'); // 4
a // ['x', 'a', 'b', 'c']
```

`unshift()`方法可以接受多个参数，这些参数都会添加到目标数组头部。

```javascript
var arr = [ 'c', 'd' ];
arr.unshift('a', 'b') // 4
arr // [ 'a', 'b', 'c', 'd' ]
```

***注意这两种方法也会改变原数组***

### join

`join()`方法以指定参数作为分隔符，将所有数组成员连接为一个字符串返回。如果不提供参数，默认用逗号分隔。该方法不会改变原数组。

如果数组成员是`undefined`或`null`或空位，会被转成空字符串。

```javascript
var a = [1, 2, undefined, 3, null, 4];

a.join(' ') // '1 2  3  4'
a.join(' | ') // '1 | 2 |  | 3 |  | 4'
a.join() // '1,2,,3,,4'
```

### concat()

`concat`方法用于多个数组的合并。它将新数组的成员，添加到原数组成员后部，然后返回一个新数组，原数组不变。

```javascript
['hello'].concat(['world'])
// ["hello", "world"]

['hello'].concat(['world'], ['!'])
// ["hello", "world", "!"]

[].concat({a: 1}, {b: 2})
// [{ a: 1 }, { b: 2 }]

[2].concat({a: 1})
// [2, {a: 1}]
```

`concat`方法的参数，只有当参数是数组时，会与源数组合并，其余都是添加成为数组项。

该方法是浅拷贝。

### reverse()

`reverse`方法用于颠倒排列数组元素，返回改变后的数组。注意，该方法将改变原数组。

```javascript
var a = ['a', 'b', 'c'];

a.reverse() // ["c", "b", "a"]
a // ["c", "b", "a"]
```

### slice()

`slice()`方法用于提取目标数组的一部分，返回一个新数组，原数组不变。

```javascript
arr.slice(start, end);
```

其中`start`是起始位置，从0开始包括在新数组中，`end`是终止位置，不包括是新数组中。

如果`start`被省略，默认从0开始，如果`end`被省略，默认到数组最后一位，只有`end`被省略的时候，`start`才能被省略。

```javascript
var a = ['a', 'b', 'c'];

a.slice(0) // ["a", "b", "c"]
a.slice(1) // ["b", "c"]
a.slice(1, 2) // ["b"]
a.slice(2, 6) // ["c"]
a.slice() // ["a", "b", "c"]
```

`start`与`end`的值可以为负数，如果是负数，则从数组最后一位开始提取。最后一位用-1表示。

如果第一个参数大于等于数组长度，或者第二个参数小于第一个参数，则返回空数组。

`slice()`方法的一个重要应用，是将类似数组的对象转为真正的数组。

```javascript
Array.prototype.slice.call({ 0: 'a', 1: 'b', length: 2 })
// ['a', 'b']
```

通常我们通过`document.getElementsByClassName`等方法获取到的节点集合都是类数组，可以使用该方法进行转换。

### splice()

`splice()`方法用于删除原数组的一部分成员，并可以在删除的位置添加新的数组成员，返回值是被删除的元素。注意，该方法会改变原数组。

```javascript
arr.splice(start, count, addElement1, addElement2);
```

`splice`的第一个参数是删除的起始位置（从0开始），第二个参数是被删除的元素个数。如果后面还有更多的参数，则表示这些就是要被插入数组的新元素。

千万不要和`slice`搞混淆。

```javascript
var a = ['a', 'b', 'c', 'd', 'e', 'f'];
a.splice(4, 2, 'g','h') // ["e", "f"]
a // ["a", "b", "c", "d", "g", "h"]
```

起始位置如果是负数，就表示从倒数位置开始删除。

```javascript
var a = ['a', 'b', 'c', 'd', 'e', 'f'];
a.splice(-4, 2) // ["c", "d"]
```

可以通过该方法向数组某个位置插入元素，此时将第二个参数设为0即可。

```javascript
var a = [1, 1, 1];

a.splice(1, 0, 2) // []
a // [1, 2, 1, 1]
```

如果只提供第一个参数，等同于将原数组在指定位置拆分成两个数组。

```javascript
var a = [1, 2, 3, 4];
a.splice(2) // [3, 4]
a // [1, 2]
```

### sort()

`sort`方法对数组成员进行排序，默认是按照字典顺序排序。排序后，原数组将被改变。

```javascript
['d', 'c', 'b', 'a'].sort()
// ['a', 'b', 'c', 'd']

[4, 3, 2, 1].sort()
// [1, 2, 3, 4]

[11, 101].sort()
// [101, 11]

[10111, 1101, 111].sort()
// [10111, 1101, 111]
```

需要注意的是`sort`方法不是按照大小排序，而是按照字典顺序。也就是说，数值会被先转成字符串，再按照字典顺序进行比较，所以101排在11的前面。

如果你不想使用默认的方法排序，你有自己的想法，那么sort可以接收一个函数作为参数，并且进行比较。

```javascript
[10111, 1101, 111].sort(function (a, b) {
  return a - b;
})
// [111, 1101, 10111]
```

该方法不仅可以对基本数据类型进行排序，也可以对对象进行排序。

```javascript
[
  { name: "张三", age: 30 },
  { name: "李四", age: 24 },
  { name: "王五", age: 28  }
].sort(function (o1, o2) {
  return o1.age - o2.age;
})
// [
//   { name: "李四", age: 24 },
//   { name: "王五", age: 28  },
//   { name: "张三", age: 30 }
// ]
```

***自定义的排序函数应该始终返回数值，不要使用比较运算符进行判断，否则在一些浏览器可能会出现错误***

### map()

`map`方法将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回。

```javascript
var numbers = [1, 2, 3];

numbers.map(function (n) {
  return n + 1;
});
// [2, 3, 4]

numbers
// [1, 2, 3]
```

`map`方法接受一个函数作为参数。该函数调用时，`map`方法向它传入三个参数：当前成员、当前位置和数组本身。

```javascript
[1, 2, 3].map(function(elem, index, arr) {
  return elem * index;
});
// [0, 2, 6]
```

`map`方法还可以接受第二个参数，用来绑定回调函数内部的`this`变量。

另外`map`方法会跳过数组的空位，但是不会跳过`undefined`和`null`。

### forEach()

`forEach`方法与`map`方法很相似，也是对数组的所有成员依次执行参数函数。但是，`forEach()`方法不返回值，只用来操作数据。

`forEach`方法通常只是单纯地用来遍历一个数组，不需要得到一个返回值。

`forEach`方法的参数函数可以接受三个参数：当前成员，当前位置和整个数组。

`forEach`方法还可以接受第二个参数，用来绑定参数函数内部的`this`变量。

```javascript
function log(element, index, array) {
  console.log('[' + index + '] = ' + element);
}

[2, 5, 9].forEach(log);
// [0] = 2
// [1] = 5
// [2] = 9
```

需要注意的是,`forEach`并不能使用`break`终止循环的执行，如果需要中止操作，请使用`for`循环。

与`map`方法一样，`forEach`方法会跳过数组的空位，但是不会跳过`undefined`和`null`。

### filter()

`filter`方法用于过滤数组成员，满足条件的成员组成一个新数组返回。

它的参数是一个函数，所有数组成员依次执行该函数，返回结果为`true`的成员组成一个新数组返回。该方法不会改变原数组。

```javascript
[1, 2, 3, 4, 5].filter(function (elem) {
  return (elem > 3);
})
// [4, 5]
```

`filter`方法的参数函数可以接受三个参数：当前成员，当前位置和整个数组。

`filter`方法还可以接受第二个参数，用来绑定参数函数内部的`this`变量。

### some()，every()

这两个返回一个布尔值，表示判断数组成员是否符合某种条件。

它们接受一个函数作为参数，所有数组成员依次执行该函数。该函数接受三个参数：当前成员、当前位置和整个数组，然后返回一个布尔值。

`some`方法是只要一个成员的返回值是`true`，则整个`some`方法的返回值就是`true`，否则返回`false`。

```javascript
var arr = [1, 2, 3, 4, 5];
arr.some(function (elem, index, arr) {
  return elem >= 3;
});
// true
```

`every`方法是所有成员的返回值都是`true`，整个`every`方法才返回`true`，否则返回`false`。

```javascript
var arr = [1, 2, 3, 4, 5];
arr.every(function (elem, index, arr) {
  return elem >= 3;
});
// false
```

### reduce()，reduceRight()

`reduce`方法和`reduceRight`方法依次处理数组的每个成员，最终累计为一个值。它们的差别是，`reduce`是从左到右处理（从第一个成员到最后一个成员），`reduceRight`则是从右到左（从最后一个成员到第一个成员），其他完全一样。

```javascript
[1, 2, 3, 4, 5].reduce(function (a, b) {
  console.log(a, b);
  return a + b;
})
// 1 2
// 3 3
// 6 4
// 10 5
//最后结果：15
```

`reduce`方法和`reduceRight`方法的第一个参数都是一个函数。该函数接受以下四个参数。

- 累积变量。第一次执行时，默认为数组的第一个成员；以后每次执行时，都是上一轮的返回值。
- 当前变量。第一次执行时，默认为数组的第二个成员；以后每次执行时，都是下一个成员。
- 当前位置。一个整数，表示第二个参数（当前变量）的位置，默认为1。
- 原数组。

其中前两个参数是必须的，后面两个是可选的。

`reduce`和`reduceRight`方法接收第二个参数，这个参数用于给定累积变量的初始值。

### indexOf()，lastIndexOf()

`indexOf`方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回-1。

```javascript
var a = ['a', 'b', 'c'];

a.indexOf('b') // 1
a.indexOf('y') // -1
```

`indexOf`方法还可以接受第二个参数，表示搜索的开始位置。

```javascript
['a', 'b', 'c'].indexOf('a', 1) // -1
```

`lastIndexOf`方法返回给定元素在数组中最后一次出现的位置，如果没有出现则返回-1。

***这两个方法不能用来搜索`NaN`的位置，即它们无法确定数组成员是否包含`NaN`。***

这是因为这两个方法内部，使用严格相等运算符（===）进行比较，而`NaN`是唯一一个不等于自身的值。

## 链式使用

所谓链式调用，就是一个方法执行完成之后有一个返回值，那么，可以直接对该方法继续执行下一个方法。

```javascript
var users = [
  {name: 'tom', email: 'tom@example.com'},
  {name: 'peter', email: 'peter@example.com'}
];

users
.map(function (user) {
  return user.email;
})
.filter(function (email) {
  return /^t/.test(email);
})
.forEach(function (email) {
  console.log(email);
});
```