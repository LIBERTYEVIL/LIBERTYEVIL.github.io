# JavaScript概述

# 0x00 JavaScript
JavaScript（以下简称Js）是一种运行在JavaScript引擎的解释执行语言。
- **狭义上的**Js通常指运行在浏览器上的脚本程序，由ECMAScript、DOM、BOM三部分组成，用于Web前端开发领域。
- **广义上的**Js指JavaScript这门通用的编程语言，它不仅可以运行在浏览器上，还能运行在其他的Js引擎或包含Js引擎的程序上，用于不同领域。
- **ECMAScript**（简称）ES，是Js这门编程语言的标准规范，即与Js语法相关的知识点全部属于ES的范畴。就像C语言有C98、C99、C11等标准一样，Js语言有ES5、ES6、ES2020等新旧标准。ECMA是European Computer Manufacturers Association的简称，即欧洲计算机制造商协会，Js的标准由这个协会制定。

# 0x01 DOM和BOM
- **DOM**指Document Object Model，文档对象模型。当网页被加载时，浏览器会创建该页面的文档对象模型，即document对象，Js可以通过调用这个对象的各种方法来对页面的内容进行操作。例如，document.getElementById()可以用来获取一个特定ID的元素。
- **BOM**指Browser Object Model，浏览器对象模型。BOM在各个不同浏览器有所不同，但现代浏览器都实现了一些Js的相同方法和属性，这些方法和属性在不同浏览器上都能运行。浏览器运行时创建了一个window对象，其中的属性和方法在Js代码中都能直接调用，例如window.alert()，且window可以直接省略不写，如alert()。

# 0x02 HTML文档中Js的三种引入方式

### 1. 行内式
```html
<button onclick="alert('Hello!')"> Hello </button>
```
- 在HTML标签的属性值中存放的Js代码，长度在一行之内
- 通常用于点击事件触发执行的函数等
- 适用于函数或方法的调用，不适合执行操作所需代码较多的情况

### 2. 内部式
```html
<script>
	function sayHello()
	{
		alert("Hello!");
	}
</script>
```
- 置于HTML文档内部的script标签内的Js代码
- 适用于小型网页或者中长度的Js代码

### 3. 外部式
```html
<script src="路径/main.js"></script>
```

```js
/* main.js */
function addTwoNumbers(a, b)
{
	return a+b;
}
```
- 适用于独立的Js代码单元、长度较长的代码和大多数情况
- 代码通过HTML文档中的script标签引入，代码文件的路径写在该标签的src属性中
- 性质与内部式一样，都通过script标签引入，区别于外部式Js代码存储在独立的文件中

### 4. 关于script标签的位置
使用script标签引入的Js一般放置在head标签内或body标签内的其他内容之后的位置。
**关键性脚本**（如需要尽早执行的脚本）可以放在 `<head>` 中。
**非关键性脚本** 或者对页面内容依赖较多的脚本通常建议放在 `<body>` 的末尾。

#### 1> 位于head标签内
- 脚本会在页面内容加载之前执行，可以用于设置一些全局的配置或需要提前加载的功能
- 适合加载某些库（如 jQuery）等需要在页面加载之前运行的代码
- 可能会阻塞 HTML 文档的解析，尤其是在脚本加载较慢或者需要从外部资源获取时
- 用户可能会感觉页面加载变慢，特别是当网络状况不佳时

#### 2> 位于body标签内
- 脚本会在 HTML 文档加载和解析完成后运行，所以不会阻塞页面内容的渲染。
- 用户能更快看到页面内容，提高页面加载的感知速度。
- 如果脚本中需要操作 DOM 元素，可能需要确保这些元素已经加载到页面中，否则需要用事件监听（如 `DOMContentLoaded`）来确保脚本运行时 DOM 已经就绪。

# 0x03 入门即用的基本输入输出

### 1. alert()方法
该方法在浏览器中阻塞其他js程序，弹出一个提示框，参数表示弹框的内容。
```js
let age = 18;
alert("我今年" + age + "岁了。");
```
alert()可以直接调用，为什么不是“函数”而是“方法”呢？**众所周知，在面向对象编程中，类和对象中定义的成员函数就叫方法。** alert()虽然可以直接调用，但它实际上是一个全局对象中的方法，它的全名是window.alert()，而全局对象中的方法在调用时可以直接使用方法名调用，省略全局对象的名字。

### 2. prompt()方法

### 3. console.log()方法

### 4. document.write()方法
