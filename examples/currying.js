// каррирование - преобразование функции с множеством аргументов
// в набор вложенных функций с одним аргументов

function multiplyThenAdd(num) {
    return function(mul) {
        return function(add) {
            return num * mul + add;
        }
    }
}

multiplyThenAdd(10)(2)(1); //21

// вариант со стрелочными функциями
const multiplyThenAdd = num => mul => add => num * mul + add;

//частичное применение
const getDoubledPlusOne = num => multiplyThenAdd(num)(2)(1);

getDoubledPlusOne(10); //21