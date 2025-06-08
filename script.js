// Ref display element
const display = document .getElementById('display');

// track if we have perform a calculation
let justcalculated = false;

function  appendToDisplay(value) {
    console.log('Button pressed:' value);

    let currentValue = display,value;

    if (justcalculated && !isNaN(value)) {
        display,value = value;
        justcalculated = false;
        return;
    }

    // if the current display show 0 and user enters a number we wanna replace the 0
    if (currentValue === '0' &&  !isNaN(value)) {
       display.value = value;
    }

    //if the user enters a desimal we wanna keep the 0
    else if (currentValue === '0' && value === '.') {
      display.value = currentValue + value;  
    } else {
        display.value = currentValue + value;
    }

    //reset the justcalculated flag when user starts typing
    justcalculated = false;
     
    console.log('Display updated to: ', display.value);
} 

function cleardiplay() {
    console.log('Clear button pressed');

    action('Clear button was clicked');
}

function deleteLast() {
      console.log('Backspace button was clicked');

      let currentValue = display.value;

      //if there only one carracter or is 0, reset to 0

      if (currentValue.length <=1 || currentValue === '0'){
        display.value = '0';
      } else {
        display.value = currentValue.slice(0, -1);
      }

    action('Backspace button was clicked');
}

function calculation() {
      console.log('Equals button pressed');

    action('Equals button was clicked');
    
}

document .addEventListerner('DOMcontentloader', function () {
    console.console.log('Calculator loades succesfully');
    console.console.log('Display element', display);

   if (display) {
    console.console.log('Current display value', display.value);
    
 } else{
    console.console.log('Display element not found');
    
 }
    
})
