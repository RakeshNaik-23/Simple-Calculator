document.getElementById('calculate').addEventListener('click', function () {
    // Get input values
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('calculation').value;

    // Perform the operation
    let result;
    switch (operation) {
        case 'Addition':
            result = num1 + num2;
            break;
        case 'Substraction':
            result = num1 - num2;
            break;
        case 'Multiplication':
            result = num1 * num2;
            break;
        case 'Divisiton':
            if (num2 === 0) {
                alert('Cannot divide by zero');
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert('Pleace Select a Valid Operation');
            return;
    }

    // Display the result
    document.getElementById('result').innerText = `Result: ${result}`;
});

let body=document.querySelector("body")
let colorchange=document.getElementById("colorchange")
    
colorchange.addEventListener("mouseleave",()=>{
    body.style.backgroundColor=`${(colorchange).value}`
})

