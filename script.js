const display = document.getElementById('display');

function appendValue(value) {
    display.value = display.value + value;
}

function clearDisplay() {
    display.value = '';
}
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
function Trignometry(func) {
    try {
        const value = parseInt(display.value);
        let result;
        switch (func) {
            case 'sin':
                result = Math.sin(value);
                break;
            case 'cos':
                result = Math.cos(value);
                break;
            case 'tan':
                result = Math.tan(value);
                break;
        }
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

