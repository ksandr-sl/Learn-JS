// выводит число каждую секунду, начиная от from и заканчивая to.

// Используя setInterval.
function printNumbers(from, to) {
    
    let timerId = setInterval(() => {
        
        console.log(from);
        from != to ? from++ : clearInterval(timerId);
        
    }, 1000);
    
}

printNumbers(1, 5);



// Используя рекурсивный setTimeout.
function printNumbers(from, to) {
    
    setTimeout(function tick() {
        
        console.log(from); // 1.выводит from 
        if (from != to) setTimeout(tick, 1000); // 3. проверка и рекурсивный вызов tick
        from++; // 2. увеличивает на 1

    }, 1000);
    
}

printNumbers(1, 5);