**bind()**

Метод **`bind`** возвращает «привязанный вариант» функции `func`, фиксируя контекст `this` и первые аргументы `arg1`, `arg2`…, если они заданы.

Полный синтаксис:

```js
let bound = func.bind(context, [arg1], [arg2], ...);
```
---
Привязка `this`:

```js
let user = {
	firstName: "Вася"
};

function func() {
	console.log(this.firstName);
}

let funcUser = func.bind(user); // фиксируем this = user;
funcUser(); // Вася
```
---
Частичное применение:

```js
function multiply(a, b) { 
	return a * b; 
} 

let double = mul.bind(null, 2); // фиксируем первый аргумент
double(3); // multiply(2, 3) = 6
```

`this` - обязательный параметр, так что мы должны передать туда что-нибудь вроде `null`.


[[Functions]]