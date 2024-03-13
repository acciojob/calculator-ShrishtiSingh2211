//your code here
let input = document.getElementById('input');
let data = '';
let operatorAdded = false;
let dotAdded = false;
for (let i = 0; i <= 9; i++) {
    let btn = document.getElementById(`block${i}`);
    btn.addEventListener('click', function() {
        data += i;
        input.value = data;
        operatorAdded = false;
    });
}
const operators = ['plus', 'minus', 'multiply', 'divide'];
operators.forEach(operator => {
    let btn = document.getElementById(operator);
    btn.addEventListener('click', function() {
        if (!operatorAdded) {
            data += this.textContent;
            input.value = data;
            operatorAdded = true;
            dotAdded = false;
        }
    });
});
let dotBtn = document.getElementById('dot');
dotBtn.addEventListener('click', function() {
    if (!dotAdded) {
        data += '.';
        input.value = data;
        dotAdded = true;
    }
});
let equalsBtn = document.getElementById('ans');
equalsBtn.addEventListener('click', function() {
    try {
        let result = eval(data);
        input.value = result;
        data = result;
        operatorAdded = false;
    } catch {
        input.value = 'Error';
        data = '';
    }
});

let clearBtn = document.getElementById('clr');
clearBtn.addEventListener('click', function() {
    data = '';
    input.value = data;
    operatorAdded = false;
    dotAdded = false;
});