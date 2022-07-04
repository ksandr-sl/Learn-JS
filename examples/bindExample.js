function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    password == "rockstar" ? ok() : fail();
}
  
let user = {
    name: 'John',

    loginOk() {
        console.log(`${this.name} logged in`);
    },

    loginFail() {
        console.log(`${this.name} failed to log in`);
    },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); // фиксируем this = user



// альтернативное решение
askPassword(() => user.loginOk(), () => user.loginFail);

// может не сработать когда значение переменной `user` меняется между вызовом `askPassword`
// и выполнением `() => user.loginOk()`
