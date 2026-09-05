document.addEventListener('DOMContentLoaded', function() {

    // Create and insert result display dynamically
    const resultDiv = document.createElement('div');
    resultDiv.className = 'result';
    resultDiv.textContent = 'Click an operator';
    document.body.insertBefore(resultDiv, document.body.firstChild);

    // Get references to all elements
    const num1El = document.querySelector('.first_numbers');
    const num2El = document.querySelector('.secound_numbers');
    const addBtn = document.querySelector('.ADD');
    const subBtn = document.querySelector('.SUB');
    const divBtn = document.querySelector('.DIV');
    const mulBtn = document.querySelector('.MUL');
    const clearBtn = document.querySelector('.clear');

    // Make the number elements editable (like input fields)
    num1El.contentEditable = true;
    num2El.contentEditable = true;

    // Prevent Enter key from creating new lines in editable fields
    [num1El, num2El].forEach(el => {
        el.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                el.blur(); // Remove focus when Enter is pressed
            }
        });

        // Allow only numbers, minus sign, and decimal point
        el.addEventListener('input', function() {
            const text = el.textContent;
            // Remove any character that is not a digit, minus, or dot
            const cleaned = text.replace(/[^0-9\-\.]/g, '');
            if (text !== cleaned) {
                el.textContent = cleaned;
                // Move cursor to end
                const range = document.createRange();
                const sel = window.getSelection();
                range.selectNodeContents(el);
                range.collapse(false);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        });
    });

    // Helper: Parse numbers from the editable elements
    function getNumbers() {
        const n1 = parseFloat(num1El.textContent) || 0;
        const n2 = parseFloat(num2El.textContent) || 0;
        return { n1, n2 };
    }

    // Helper: Display result with the full equation
    function showResult(value, operator, n1, n2) {
        if (!isFinite(value)) {
            resultDiv.textContent = 'Error: Invalid operation';
            resultDiv.style.color = '#dc3545';
            resultDiv.style.background = '#fff5f5';
            return;
        }

        resultDiv.style.color = '#333';
        resultDiv.style.background = 'rgba(255, 255, 255, 0.95)';

        // Format: remove trailing zeros for clean display
        const formatted = parseFloat(value.toFixed(8));
        resultDiv.textContent = `${n1} ${operator} ${n2} = ${formatted}`;
    }

    // ADD button click
    addBtn.addEventListener('click', function() {
        const { n1, n2 } = getNumbers();
        showResult(n1 + n2, '+', n1, n2);
    });

    // SUBTRACT button click
    subBtn.addEventListener('click', function() {
        const { n1, n2 } = getNumbers();
        showResult(n1 - n2, '-', n1, n2);
    });

    // MULTIPLY button click
    mulBtn.addEventListener('click', function() {
        const { n1, n2 } = getNumbers();
        showResult(n1 * n2, '×', n1, n2);
    });

    // DIVIDE button click
    divBtn.addEventListener('click', function() {
        const { n1, n2 } = getNumbers();
        if (n2 === 0) {
            resultDiv.textContent = 'Error: Cannot divide by zero';
            resultDiv.style.color = '#dc3545';
            resultDiv.style.background = '#fff5f5';
            return;
        }
        showResult(n1 / n2, '÷', n1, n2);
    });

    // CLEAR button click - resets everything
    clearBtn.addEventListener('click', function() {
        num1El.textContent = '1';
        num2El.textContent = '2';
        resultDiv.textContent = 'Click an operator';
        resultDiv.style.color = '#333';
        resultDiv.style.background = 'rgba(255, 255, 255, 0.95)';
    });

});