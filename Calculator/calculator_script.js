// buttons
const buttons = document.querySelectorAll('button');
// display
const display = document.querySelector('.display');

for(item of buttons) {
    item.addEventListener('click', (calculate)=>{
        
        const ButtonValue = calculate.target.value;
        console.log('Button text is ', ButtonValue);

        if (ButtonValue === '=') {
            // if display is not empty
            if (display.value != '') {
                // evaluates the numbers and operators
                display.value = eval(display.value);
            }
        } 
        // clears the display
        else if (ButtonValue === 'C') {
            display.value = '';
        } 
        else {
            // concatenate the numbers
            display.value += ButtonValue;
        }
        
    })
}
