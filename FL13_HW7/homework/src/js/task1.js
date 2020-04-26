let login = prompt('Login','');
let password = '';
let emptyLogin = login === null || login.length === 0;
const loginLength = 4;
let shortlogin = !emptyLogin && login.length < loginLength;
let currentHours = new Date().getHours();
let dayHours = new Date('2020-04-26T08:00:00').getHours();
let nightHours = new Date('2020-04-26T20:00:00').getHours();
const timeRange = currentHours >= dayHours && currentHours < nightHours;

let user = { login:'User', password: 'UserPass' };
let admin = { login:'Admin', password: 'RootPass' };

if (login === user.login || login === admin.login) {
    password = prompt('Enter your password');
    if (login === user.login && password === user.password ||
    login === admin.login && password === admin.password) {
      if (timeRange) {
        alert('Good day, dear ' + login + '!');
      } else {
        alert('Good evening, dear '+ login + '!');
      }
    } else if (password === null) {
        alert('Canceled.');
    } else {
        alert('Wrong password');
    }
} else if (emptyLogin) {
    alert('Canceled.');
} else if (shortlogin) {
    alert('I don’t know any users having name length less than 4 symbols');
} else {
    alert('I don’t know you');
}
