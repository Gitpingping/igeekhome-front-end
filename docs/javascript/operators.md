# 运算符

运算符是处理数据的基本方法，用来从现有的值得到新的值。JavaScript 提供了多种运算符，覆盖了所有主要的运算。

## 算术运算符

JavaScript 共提供10个算术运算符，用来完成基本的算术运算。

- 加法运算符：x + y
- 减法运算符： x - y
- 乘法运算符： x * y
- 除法运算符：x / y
- 指数运算符：x ** y
- 余数运算符：x % y
- 自增运算符：++x 或者 x++
- 自减运算符：--x 或者 x--
- 数值运算符： +x
- 负数值运算符：-x

减法、乘法、除法运算法比较单纯，就是执行相应的数学运算。下面介绍其他几个算术运算符，重点是加法运算符。

### 加法运算符

#### 基本规则

加法运算符（+）是最常见的运算符，用来求两个数值的和。

```javascript
1 + 1; // => 2
```

JavaScript 允许非数值的相加。

```javascript
true + true // 2
1 + true // 2
```

比较特殊的是，如果是两个字符串相加，这时加法运算符会变成连接运算符，返回一个新的字符串，将两个原字符串连接在一起。

```javascript
'a' + 'bc' // "abc"
1 + 'a' // "1a"
false + 'a' // "falsea"
```

加法运算符是在运行时决定，到底是执行相加，还是执行连接。也就是说，运算子的不同，导致了不同的语法行为，这种现象称为“重载”（overload）。由于加法运算符存在重载，可能执行两种运算，使用的时候必须很小心。

```javascript
'3' + 4 + 5 // "345"
3 + 4 + '5' // "75"
```

除了加法运算符，其他算术运算符（比如减法、除法和乘法）都不会发生重载。它们的规则是：所有运算子一律转为数值，再进行相应的数学运算。

```javascript
1 - '2' // -1
1 * '2' // 2
1 / '2' // 0.5
```

#### 对象的相加

如果运算子是对象，必须先转成原始类型的值，然后再相加。

```javascript
var obj = { p: 1 };
obj + 2 // "[object Object]2"
```

对象转成原始类型的值规则：

1. 首先，自动调用对象的valueOf方法,对象的valueOf方法总是返回对象自身。
2. 再自动调用对象的toString方法，将其转为字符串。
```javascript
var obj = { p: 1 };
obj.valueOf().toString() // { p: 1 }
```

可以自己定义valueOf方法或toString方法，得到想要的结果。

### 余数运算符

余数运算符（%）返回前一个运算子被后一个运算子除，所得的余数。

```javascript
12 % 5 // 2
```

运算结果的正负号由第一个运算子的正负号决定。

```javascript
-1 % 2 // -1
1 % -2 // 1
```

为了得到负数的正确余数值，可以先使用绝对值函数。

```javascript
// 错误的写法
function isOdd(n) {
  return n % 2 === 1;
}
isOdd(-5) // false
isOdd(-4) // false

// 正确的写法
function isOdd(n) {
  return Math.abs(n % 2) === 1;
}
isOdd(-5) // true
isOdd(-4) // false
```

### 自增和自减运算符

自增和自减运算符，是一元运算符，只需要一个运算子。它们的作用是将运算子首先转为数值，然后加上1或者减去1。它们会修改原始变量。

```javascript
var x = 1;
++x // 2
x // 2

--x // 1
x // 1
```

变量的值发生变化，这种效应叫做运算的副作用（side effect）。自增和自减运算符是仅有的两个具有副作用的运算符，其他运算符都不会改变变量的值。

自增和自减运算符有一个需要注意的地方，就是放在变量之后，会先返回变量操作前的值，再进行自增/自减操作；放在变量之前，会先进行自增/自减操作，再返回变量操作后的值。

```javascript
var x = 1;
var y = 1;

x++ // 1
++y // 2
```

### 数值运算符，负数值运算符

数值运算符（+）同样使用加号，但它是一元运算符（只需要一个操作数），而加法运算符是二元运算符（需要两个操作数）。

数值运算符的作用在于可以将任何值转为数值（与Number函数的作用相同）。

```javascript
+true // 1
+[] // 0
+{} // NaN
```

负数值运算符（-），也同样具有将一个值转为数值的功能，只不过得到的值正负相反。连用两个负数值运算符，等同于数值运算符。

数值运算符号和负数值运算符，都会返回一个新的值，而不会改变原始变量的值。

### 指数运算符

指数运算符（**）完成指数运算，前一个运算子是底数，后一个运算子是指数。

```javascript
2 ** 4 // 16
```

指数运算符是右结合，而不是左结合。即多个指数运算符连用时，先进行最右边的计算。

```javascript
// 相当于 2 ** (3 ** 2)
2 ** 3 ** 2
// 512
```

### 赋值运算符

赋值运算符（Assignment Operators）用于给变量赋值。

最常见的赋值运算符，当然就是等号（=）。

```javascript
// 将 1 赋值给变量 x
var x = 1;

// 将变量 y 的值赋值给变量 x
var x = y;
```

```javascript
// 等同于 x = x + y
x += y

// 等同于 x = x - y
x -= y

// 等同于 x = x * y
x *= y

// 等同于 x = x / y
x /= y

// 等同于 x = x % y
x %= y

// 等同于 x = x ** y
x **= y
```

## 比较运算符

比较运算符用于比较两个值的大小，然后返回一个布尔值，表示是否满足指定的条件。

```javascript
2 > 1 // true
```

JavaScript 一共提供了8个比较运算符。

- `>` 大于运算符
- `<` 小于运算符
- `<=` 小于或等于运算符
- `>=` 大于或等于运算符
- `==` 相等运算符
- `===`严格相等运算符
- `!=` 不相等运算符
- `!==` 严格不相等运算符

***注意，比较运算符可以比较各种类型的值，不仅仅是数值。***




## 布尔运算符

## 二进制位运算符

## 其他运算符，运算顺序