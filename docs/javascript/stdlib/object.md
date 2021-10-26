# Object对象

`JavaScript`原生提供`Object`对象（注意起首的O是大写）。

`JavaScript`几乎的所有对象都是`Object`的实例，它们都会从`Object.prototype`继承属性和方法。

`Object`对象的原生方法分成两类：`Object`本身的方法与`Object`的实例方法。

## Object()函数

`Object`本身是一个函数，可以当作工具方法使用，将任意值转为对象。

`Object`函数接收一个参数作为初始化对象的条件。任意数据类型都可以作为参数。

`Object`构造函数为给定值创建一个对象包装器。`Object`构造函数，会根据给定的参数创建对象，具体有以下情况：

- 如果给定值是 null 或 undefined，将会创建并返回一个空对象

- 如果传进去的是一个基本类型的值，则会构造其包装类型的对象

- 如果传进去的是引用类型的值，仍然会返回这个值，经他们复制的变量保有和源对象相同的引用地址

```javascript
var undefinedObj = Object(undefined);
var nullObj = Object(null);
// => {}
obj instanceof Object // true

var numberObj = Object(1);
numberObj instanceof Object; // true
numberObj instanceof Number; // true

var booleanObj = Object(true);
booleanObj instanceof Object; // true
booleanObj instanceof Boolean; // true

var stringObj = Object('jack');
stringObj instanceof Object; // true
stringObj instanceof String; // true

var obj = Object({age: 18});// => { age: 18 }
var arr = Object([12,13]);// => [12,13]
var fn = Object(function() { return}); // => function() { return}
```

***`Object`函数仅接收一个参数，具体可使用`Object.length`验证***

```javascript
Object.length; // => 1
```

## Object构造函数

### 什么是构造函数？

> 构造函数 ，是一种特殊的方法。主要用来在创建对象时初始化对象， 即为对象成员变量赋初始值，总与new运算符一起使用在创建对象的语句中。

`Object`构造函数的首要用途，是直接通过它来生成新对象。

```javascript
var obj = new Object();
```

> 注意，通过`var obj = new Object()`的写法生成新对象，与字面量的写法`var obj = {}`是等价的。或者说，后者只是前者的一种简便写法。

```javascript
var undefinedObj = new Object(undefined);
var nullObj = new Object(null);
// => {}
obj instanceof Object // true

var numberObj = new Object(1);
numberObj instanceof Object; // true
numberObj instanceof Number; // true

var booleanObj = new Object(true);
booleanObj instanceof Object; // true
booleanObj instanceof Boolean; // true

var stringObj = new Object('jack');
stringObj instanceof Object; // true
stringObj instanceof String; // true

var obj = new Object({age: 18});// => { age: 18 }
var arr = new Object([12,13]);// => [12,13]
var fn = new Object(function() { return}); // => function() { return}
```

是的，这时候你应该发现了，`Object`构造函数的用法和结果与`Object`函数的用法和结果几乎一模一样。

> 当以非构造函数形式被调用时，`Object`的行为等同于`new Object()`。

它们的区别仅在于语义上的区别，`Object(value)`表示将`value`转成一个对象，`new Object(value)`则表示新生成一个对象，它的值是`value`。

## Object的静态方法

所谓“静态方法”，是指部署在`Object`对象自身的方法。

### 1. Object.assign()`*`

通过复制一个或多个对象来创建一个新的对象。[查看详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

### 2. Object.entries()`*`

返回给定对象自身可枚举属性的 [key, value] 数组。[查看详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

### 3. Object.keys()`*`

返回一个包含所有给定对象自身可枚举属性名称的数组。[查看详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

### 4. Object.values()`*`

返回给定对象自身可枚举值的数组。[查看详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

### 5. Object.is()

比较两个值是否相同。所有 NaN 值都相等（这与==和===不同）。[查看详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is)

### 6. Object.create()

使用指定的原型对象和属性创建一个新对象。[查看详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

### 7. Object.defineProperty()

给对象添加一个属性并指定该属性的配置。该方法是`Vue.js@2.x`版本的双向绑定原理。[查看详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

### 8. Object.defineProperties()

给对象添加多个属性并分别指定它们的配置。[查看详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)

### 9. Object.freeze()

冻结对象：其他代码不能删除或更改任何属性。[查看详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)

### 10. Object.getOwnPropertyDescriptor()

返回对象指定的属性配置。[查看详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)

### 11. Object.getOwnPropertyNames()

返回一个数组，它包含了指定对象所有的可枚举或不可枚举的属性名。[查看详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)

### 12. Object.getOwnPropertySymbols()

返回一个数组，它包含了指定对象自身所有的符号属性。[查看详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)

### 13. Object.getPrototypeOf()

返回指定对象的原型对象。[查看详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/GetPrototypeOf)

### 14. Object.isExtensible()

判断对象是否可扩展。[查看详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible)

### 15. Object.isFrozen()

判断对象是否已经冻结。[查看详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen)

### 16. Object.isSealed()

判断对象是否已经密封。[查看详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed)

### 17. Object.preventExtensions()

防止对象的任何扩展。[查看详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)

### 18. Object.seal()

防止其他代码删除对象的属性。[查看详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)

### 19. Object.setPrototypeOf()

设置对象的原型（即内部 [[Prototype]] 属性）。[查看详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)

## Object实例方法

除了静态方法，还有不少方法定义在`Object.prototype`对象。它们称为实例方法，所有`Object`的实例对象都继承了这些方法。

`Object`实例对象的方法，主要有六个。

你可以通过`console`打印或者直接在浏览器控制台输入`Object.prototype`就可以看到实例方法。

### 1. Object.prototype.valueOf()

返回当前对象对应的值。[查看详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf)

`valueOf`方法的主要用途是，`JavaScript`自动类型转换时会默认调用这个方法

### 2. Object.prototype.toString()

返回当前对象对应的字符串形式。[查看详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)

该方法作为实例方法被每一个对象实例所继承，因此所有的对象都可以调用该方法。

该方法可以被覆盖，如果在定义对象的时候未被覆盖，则调用后返回类型字符串`[object Object]`。

然而，类型字符串`[object Object]`并没有什么用，因为几乎所有的对象返回的都是`[object Object]`。

我们可以通过自定义`toString`方法来得到想要的值。

```javascript
var obj = {age: 18};
obj.toString(); // => '[object Object]'
obj.toString = function() { return 'Hello toString'}
obj.toString(); // => 'Hello toString'
```

数组、字符串、函数、`Date`对象都分别部署了自定义的`toString`方法，覆盖了`Object.prototype.toString`方法。


***使用`toString()`检测对象类型***

虽然类型字符串`[object Object]`并没有什么用，但是如果你稍微对这个类型字符串有点好奇就会发现，如果仅仅为了表示这是个对象，那么只需要一个`object`就可以，但是这里却输出了两次。

不难发现，其实第一个`object`仅仅表示`toString`返回值是个字符串，但是第二个`Object`就有意思了，它是大写的`O`。

它表示的是，调用`toString`方法的值的构造函数。这是一个十分有用的判断数据类型的方法。

可以通过`toString()`来获取每个对象的类型。为了每个对象都能通过`Object.prototype.toString()`来检测（之所以只用原型上的方法，单纯的因为实例对象的`toString`方法可能被覆盖），需要以`Function.prototype.call()`或者`Function.prototype.apply()`的形式来调用，传递要检查的对象作为第一个参数，称为`thisArg`。

`Object.prototype.toString.call(value)`

此时我们不需要知道`toString`执行过程中到底发生了什么，使得其最终返回了调用值的构造函数，我们记住预期的结果即可。

不同数据类型的`Object.prototype.toString`方法返回值如下。

- 数值：返回[object Number]。
- 字符串：返回[object String]。
- 布尔值：返回[object Boolean]。
- undefined：返回[object Undefined]。
- null：返回[object Null]。
- 数组：返回[object Array]。
- arguments 对象：返回[object Arguments]。
- 函数：返回[object Function]。
- Error 对象：返回[object Error]。
- Date 对象：返回[object Date]。
- RegExp 对象：返回[object RegExp]。
- 其他对象：返回[object Object]。

```javascript
Object.prototype.toString.call(2) // "[object Number]"
Object.prototype.toString.call('') // "[object String]"
Object.prototype.toString.call(true) // "[object Boolean]"
Object.prototype.toString.call(undefined) // "[object Undefined]"
Object.prototype.toString.call(null) // "[object Null]"
Object.prototype.toString.call(Math) // "[object Math]"
Object.prototype.toString.call({}) // "[object Object]"
Object.prototype.toString.call([]) // "[object Array]"
```

利用这个特性，可以写出一个比`typeof`运算符更准确的类型判断函数。

```javascript
var type = function (o){
  var s = Object.prototype.toString.call(o);
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

type({}); // "object"
type([]); // "array"
type(5); // "number"
type(null); // "null"
type(); // "undefined"
type(/abcd/); // "regex"
type(new Date()); // "date"

```

- Object.prototype.toLocaleString()：返回当前对象对应的本地字符串形式。

Object.prototype.toLocaleString方法与toString的返回结果相同，也是返回一个值的字符串形式。[查看详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString)

- Object.prototype.hasOwnProperty()：判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性。

Object.prototype.hasOwnProperty方法接受一个字符串作为参数，返回一个布尔值，表示该实例对象自身是否具有该属性。[查看详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

- Object.prototype.isPrototypeOf()：判断当前对象是否为另一个对象的原型。

判断当前对象是否为另一个对象的原型。[查看详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf)

- Object.prototype.propertyIsEnumerable()：判断某个属性是否可枚举。

判断某个属性是否可枚举。[查看详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable)

## 区分静态方法和实例方法

前面我们说到，静态方法是定义在`Object`构造函数上的方法，那么该类型的方法就只能通过`Object`构造函数调用，一般来说都会有一个参数是对象实例，对该对象进行处理得到一个新的数据。

而实例方法是定义在`Object`对象原型上的方法，这类方法会被对象实例所继承，因此也是可以直接被对象实例所调用，因为该类方法是对对象实例自身进行操作，所以通常不需要参数。

如果你在控制台打印`Object.prototype`就会发现`Object`的相关实例方法，再继续点开`constructor`函数，就可以看到定义在构造函数内的静态方法，这个时候你可能又发现`constructor`函数里面又有了`prototype`属性，再继续点开，会出现与刚刚一模一样的内容，试试点开多少层就可以结束。
