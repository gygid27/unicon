//import {sum as  mySum } from "./mymodule.js"; // as통해 다른 이름으로 변경가능
import { default as sum, makeTable } from './mymodule.js';

console.log(sum(10, 20));
//console.log

window.onload = function () {
    makeTable('box', 4, 5);
    makeTable('box2', 7, 8);
};
