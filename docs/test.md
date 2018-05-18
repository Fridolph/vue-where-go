```js
function Foo() {
  getName = function () {
    console.log(1)
  }
  return this
}

Foo.getName = function () {
  console.log(2)
}
Foo.prototype.getName = function () {
  console.log(3)
}

function getName() {
  console.log(5)
}

var getName = function () {
  console.log(4)
}

Foo.getName() // 2
getName() // 4
Foo().getName() // 1
getName() // 1
new Foo.getName() // 2
new Foo().getName() // 3
new new Foo().getName() // 3
```

1. 函数也是JS的第一型对象，有其自己的prototype， `Foo.getName()` 为 2
2. `var getName`变量提升优先于函数调用 `getName()` 为4
3. `Foo()`返回this，当前环境未声明getName方法，会向上一层全局环境中找，（找不到再找原型prototype）这里（隐式）找到了为1
4. 即当前的执行环境，调用执行隐式改变了全局作用域下的getName，所以为 1
5. 可拆解为 new function() {console.log(2)} 再次打印2
6. new出来的实例 this指向为 `function () { console.log(3) }` ，运行为3
7. 对此函数再new，实例this指向新对象，但运行结果还是为3
