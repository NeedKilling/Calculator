"use strict"

const main = document.querySelector('.main');
const operators = document.querySelector('.operator')

const output = document.querySelector('.output')

const equals = document.getElementById('equals');
const clear = document.querySelectorAll('.block');
const switching = document.getElementById('switching');

let a = '';
let first = false
let b = '';
let second = false

let operator = '';
let result = 0;
output.innerHTML = result;

main.addEventListener('click',(e)=>{
    let value = e.target.textContent;
    if(value == "+/-") value = ''

    if(first == false){
        firstValue(value);
    };

    if(first && operator){
        secondValue(value);
    };
});

    function firstValue(value){
        output.innerHTML = '';
        a += value
        output.innerHTML = a;
    }
    function secondValue(value){
        output.innerHTML = '';
        b += value
        output.innerHTML = b;
    }

operators.addEventListener('click',(e)=>{
    operator = e.target.textContent == '=' ? '' : e.target.textContent;
    first = true;
});

equals.addEventListener('click',()=>{
    switch(operator){
        case '+':
            result = +a + +b
            break;
        case '-':
            result = +a - +b
            break;
        case '/':
            result = +a / +b
            break;
        case '*':
            result = +a * +b
            break;
    }
    output.innerHTML = result; 
    a = result.toString();
    b = '';
    operator = '';
});

// switching.addEventListener('click',(e)=>{
//     if(first == false || first && operator == false){
//         if(a>0){
//             a *= -1;
//         }else if(a<0){
//             a = Math.abs(a);
//         }
//     }
//     if(first && operator){
//         if(b>0){
//             b *= -1;
//         }else if(b<0){
//             b = Math.abs(b);
//         }
//     }
// });

clear.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        switch(e.target.textContent){
            case "C":
                subtracting();
                break;
            case "AC":
                deletion();
                break;
        }
    });
});

function subtracting(){   
    if(first == false || first && operator == false){
        a = +a.toString().slice(0,-1);
        output.innerHTML = a;
    } 
    if(first && operator){
        b = +b.toString().slice(0,-1);
        output.innerHTML = b;
    }   
}

function deletion(){
    result = 0;
    output.innerHTML = '0';
    a = '';
    first = false
    b = '';
    second = false
    operator = '';
}