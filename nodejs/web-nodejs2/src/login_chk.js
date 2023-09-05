import getCookie from './src/fun.js';
var isLogin = getCookie('isLogin');
var id = getCookie('id');

document.write(isLogin + ' ' + id);
