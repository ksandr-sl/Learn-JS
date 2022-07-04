// декоратор записывающий вызовы функции в свойство обертки
function spy(func) { 

	function wrapper(...args) { // принимаем аргументы
		wrapper.calls.push(args); // делаем с ними всякое
		return func.apply(this, args); // возвращаем результат вызова оригиналькой функции
	}

	wrapper.calls = []; // добавляем массив как свойство объекта
	return wrapper; // возвращаем обертку

}

function work(a, b) { 
	console.log(a + b); // произвольная функция или метод
}

work = spy(work); // оборачиваем work

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) { 
	console.log(args); // [1, 2] [4, 5]
}