"use strict"

const main = document.querySelector('.main');
const sub = document.querySelector('.operator')

const output = document.querySelector('.output')

const equals = document.getElementById('equals');
const clear = document.getElementById('clear');

let a = '';
let first = false
let b = '';
let second = false

let operator = '';
let result = 0;
output.innerHTML = 0;

main.addEventListener('click',(e)=>{
    let value = e.target.textContent;

    if(first == false){
        firstValue(value);
    };

    if(a && operator){
        secondValue(value);
    };
});

    function firstValue(value){
        output.innerHTML = '';
        a += value
        output.innerHTML = a;
        a = +a
    }
    function secondValue(value){
        output.innerHTML = '';
        b += value
        output.innerHTML = b;
        b = +b;
    }

sub.addEventListener('click',(e)=>{
    operator = e.target.textContent
    first = true;
});

equals.addEventListener('click',()=>{
    switch(operator){
        case '+':
            result = a + b
            break;
        case '-':
            result = a - b
            break;
        case '/':
            result = a / b
            break;
        case '*':
            result = a * b
            break;
    }
    output.innerHTML = result; 
    a = result;
    b = '';
});

clear.addEventListener('click',()=>{
    output.innerHTML = 0
    a = '';
    first = false
    b = '';
    second = false

    operator = '';
    result = 0;

});

