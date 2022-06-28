**Function Expession**
```js
const sum = function() {a + b};
```
-   Функции, объявленные при помощи Function Expression, создаются, только когда поток выполнения достигает их.
---

**Function Declaration**
```js
function sum() {a + b};
```
-   Function Declaration обрабатываются перед выполнением блока кода. Они видны во всём блоке.
---

**Стрелочные функции**
```js
const f = (a, b) => a + b; // несколько аргументов

const f = () => console.log('hello'); // без аргументов

const f = a => a * 2; // один аргумент

let sum = (a, b) => { // многострочная функция
	let result = a + b; 
	return result; // с фигурными скобками нужно явно указывать "return"
}; 
```
- Стрелочные функции без `{}` возвращают результат без `return`.

- У стрелочных функций нет «this»
   Когда внутри стрелочной функции обращаются к `this`, то его значение берётся снаружи.

---

**NFE (Named Function Expression)**

Так как функция это объект, у нее есть встроенные свойства:

- `name` - имя функции. Обычно берётся из объявления функции.
	Если там нет – JavaScript пытается понять его из контекста.

```js
const greeting = function func(who) {
	who ? console.log(`Hello, ${who}!`) : func('Guest');
}

greeting.name; // 'func' - имя функции

func.name; // 'func is not defined' - имя недоступно за пределами функции


```

- `length` – количество аргументов в объявлении функции. 
	"Остаточные параметры" не считаются.

```js
function f1(a) {} 
function f2(a, b) {} 
function many(a, b, ...more) {} 

f1.length; // 1 
f2.length; // 2 
many.length; // 2
```

- Также функции могут содержать дополнительные свойства.

	Если значение `count` живёт во внешней переменной (`let count = 0;`), то оно не доступно для внешнего кода.
	Если оно присвоено как свойство функции, то его можно получить:

```js
function makeCounter() { 
	
	function counter() { 
		return counter.count++; 
	}; 

	counter.count = 0; 

	return counter; 
}

let counter = makeCounter();

counter.count = 10;

counter.count; // 10
```







[[Learn-JS]]