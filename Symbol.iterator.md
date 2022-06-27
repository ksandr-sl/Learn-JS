```js
let obj = {
    name: 'John',
    age: 30,
    likes: 'pizza',
	
    [Symbol.iterator]() {	//возвращает итератор (объект с методом next())
    
        const entries = Object.entries(this);

        let index = 0;
    
        return { 
            next() {	//вызывается на каждой итерации и возвращает объект
                return {	//цикл завершается при {done: true}
                    value: entries[index++],
                    done: index > entries.length
                };
            }
        };
    }
};

for (let element of obj) {
    console.log(element);
}

// ['name', 'John']
// ['age', 30]
// ['likes', 'pizza']
```

[[Symbol]]