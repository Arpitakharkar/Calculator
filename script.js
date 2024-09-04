const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal');

let expression = '';

const calculate = (exp) => {
    try {
        return new Function('return ' + exp)();
    } catch {
        return 'Error';
    }
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        
        // Handle function buttons (sin, cos, tan, log, etc.)
        if (value === 'sin') expression += `Math.sin(`;
        else if (value === 'cos') expression += `Math.cos(`;
        else if (value === 'tan') expression += `Math.tan(`;
        else if (value === 'log') expression += `Math.log10(`;
        else if (value === '√') expression += `Math.sqrt(`;
        else if (value === 'x²') expression += `Math.pow(${display.value}, 2)`;
        else if (value === 'π') expression += Math.PI;
        else if (value !== '=' && value !== 'C') {
            expression += value;
        }

        display.value = expression;
    });
});

// Clear button
clearButton.addEventListener('click', () => {
    expression = '';
    display.value = '';
});

// Equal button
equalButton.addEventListener('click', () => {
    display.value = calculate(expression);
    expression = display.value;
});
