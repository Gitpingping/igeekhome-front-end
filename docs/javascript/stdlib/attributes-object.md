# 属性描述对象

> JavaScript 提供了一个内部数据结构，用来描述对象的属性，控制它的行为，比如该属性是否可写、可遍历等等。这个内部数据结构称为“属性描述对象”（attributes object）。每个属性都有自己对应的属性描述对象，保存该属性的一些元信息。

```
{
  value: 123,
  writable: false,
  enumerable: true,
  configurable: false,
  get: undefined,
  set: undefined
}
```
上述案例显示，该`属性描述对象`提供了六个元属性，分别是：

1. value
   `value`是该属性的属性值，默认为`undefined`。

2. writable
   `writable`是一个布尔值，表示属性值`（value）`是否可改变（即是否可写），默认为`true`。

3. enumerable
   `enumerable`是一个布尔值，表示该属性是否可遍历，默认为`true`。如果设为`false`，会使得某些操作（比如`for...in`循环、`Object.keys()`）跳过该属性。

4. configurable
   `configurable`是一个布尔值，表示属性的可配置性，默认为`true`。如果设为`false`，将阻止某些操作改写属性描述对象，比如无法删除该属性，也不得改变各种元属性（`value`属性除外）。也就是说，`configurable`属性控制了属性描述对象的可写性。

5. get
   `get`是一个函数，表示该属性的取值函数（`getter`），默认为`undefined`。

6. set
   `set`是一个函数，表示该属性的存值函数（`setter`），默认为`undefined`。

## Object.getOwnPropertyDescriptor()

`Object.getOwnPropertyDescriptor()`方法可以获取属性描述对象。它的第一个参数是目标对象，第二个参数是一个字符串，对应目标对象的某个属性名。

```javascript
var obj = { p: 'a' };

Object.getOwnPropertyDescriptor(obj, 'p')
// Object { value: "a",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
```
***`Object.getOwnPropertyDescriptor()`方法只能用于对象自身的属性，不能用于继承的属性。***

```javascript
var obj = { p: 'a' };

Object.getOwnPropertyDescriptor(obj, 'toString')
// undefined
```

## Object.getOwnPropertyNames()

`Object.getOwnPropertyNames`方法返回一个数组，成员是参数对象自身的全部属性的属性名，不管该属性是否可遍历。

```javascript
var obj = Object.defineProperties({}, {
  p1: { value: 1, enumerable: true },
  p2: { value: 2, enumerable: false }
});

Object.getOwnPropertyNames(obj)
// ["p1", "p2"]
```

这跟`Object.keys`的行为不同，`Object.keys`只返回对象自身的可遍历属性的全部属性名。

## Object.defineProperty()，Object.defineProperties()

`Object.defineProperty()`方法允许通过属性描述对象，定义或修改一个属性，然后返回修改后的对象，它的用法如下。

```javascript
Object.defineProperty(object, propertyName, attributesObject)
```

`Object.defineProperty`方法接受三个参数，依次如下。

- object：属性所在的对象
- propertyName：字符串，表示属性名
- attributesObject：属性描述对象

```javascript
var obj = Object.defineProperty({}, 'p', {
  value: 123,
  writable: false,
  enumerable: true,
  configurable: false
});

obj.p // 123

obj.p = 246;
obj.p // 123
```

如果属性已经存在，`Object.defineProperty()`方法相当于更新该属性的属性描述对象。

如果你想一次修改多个属性，可以使用`Object.defineProperties()`方法。

```javascript
var obj = Object.defineProperties({}, {
  p1: { value: 123, enumerable: true },
  p2: { value: 'abc', enumerable: true },
  p3: { get: function () { return this.p1 + this.p2 },
    enumerable:true,
    configurable:true
  }
});

obj.p1 // 123
obj.p2 // "abc"
obj.p3 // "123abc"
```

`一旦定义了取值函数get（或存值函数set），就不能将writable属性设为true，或者同时定义value属性，否则会报错。`

`writable`、`configurable`、`enumerable`这三个属性的默认值都为false。

## Object.prototype.propertyIsEnumerable()

实例对象的`propertyIsEnumerable()`方法返回一个布尔值，用来判断某个属性是否可遍历。注意，这个方法只能用于判断对象自身的属性，对于继承的属性一律返回`false`。

```javascript
var obj = {};
obj.p = 123;

obj.propertyIsEnumerable('p') // true
obj.propertyIsEnumerable('toString') // false
```

## 元属性

> 属性描述对象的各个属性称为“元属性”，因为它们可以看作是控制属性的属性。

### value

`value`属性是目标属性的值。

```javascript
var obj = {};
obj.p = 123;

Object.getOwnPropertyDescriptor(obj, 'p').value
// 123

Object.defineProperty(obj, 'p', { value: 246 });
obj.p // 246
```

### writable

`writable`属性是一个布尔值，决定了目标属性的值`（value）`是否可以被改变。

```javascript
var obj = {};

Object.defineProperty(obj, 'a', {
  value: 37,
  writable: false
});

obj.a // 37
obj.a = 25;
obj.a // 37
```

### enumerable

`enumerable`（可遍历性）返回一个布尔值，表示目标属性是否可遍历。

如果一个属性的`enumerable`为`false`，下面三个操作不会取到该属性。

- for...in循环
- Object.keys方法
- JSON.stringify方法

因此，`enumerable`可以用来设置“秘密”属性。

### configurable

`configurable`(可配置性）返回一个布尔值，决定了是否可以修改属性描述对象。也就是说，`configurable`为`false`时，`writable`、`enumerable`和`configurable`都不能被修改了。

## 存取器

存值函数称为`setter`，使用属性描述对象的`set`属性；取值函数称为`getter`，使用属性描述对象的`get`属性。

如果对一个属性定义了存取器，那么我们在读取或者修改值时，就可以做很多附加的功能。

```javascript
var obj = Object.defineProperty({}, 'p', {
  get: function () {
    return 'getter';
  },
  set: function (value) {
    console.log('setter: ' + value);
  }
});

obj.p // "getter"
obj.p = 123 // "setter: 123"

// 写法二
var obj = {
    get p() {
        return 'getter';
    },
    set p(value) {
        console.log('setter: ' + value);
    }
};
```

注意，取值函数get不能接受参数，存值函数set只能接受一个参数（即属性的值）。

## 对象的拷贝

我们可以使用`for...in`循环可遍历某个对象的所有，然后将该属性和属性值赋给另一个对象。

```javascript
var extend = function (to, from) {
for (var property in from) {
to[property] = from[property];
}

return to;
}

extend({}, {
a: 1
})
// {a: 1}
```

但是这个方法如果遇到存取器的话，只会返回值。

```javascript
extend({}, {
  get a() { return 1 }
})
// {a: 1}
```

我们可以通过Object.defineProperty方法来拷贝属性，从而解决该问题。

```javascript
var extend = function (to, from) {
  for (var property in from) {
    if (!from.hasOwnProperty(property)) continue;
    Object.defineProperty(
      to,
      property,
      Object.getOwnPropertyDescriptor(from, property)
    );
  }

  return to;
}

extend({}, { get a(){ return 1 } })
// { get a(){ return 1 } })
```

上面代码中，`hasOwnProperty`那一行用来过滤掉继承的属性，否则可能会报错，因为`Object.getOwnPropertyDescriptor`读不到继承属性的属性描述对象。

## 控制对象状态

[查看详情](https://wangdoc.com/javascript/stdlib/attributes.html#%E6%8E%A7%E5%88%B6%E5%AF%B9%E8%B1%A1%E7%8A%B6%E6%80%81)