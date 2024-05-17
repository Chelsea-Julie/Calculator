let entry = document.querySelector(".entry")




function display(value){
   entry.value += value
}

function answer(){
    // cal = "1+5"
    let cal = entry.value
    entry.value = eval(cal)
}    

function clearSum(){
    entry.value = ""
}     
















// let strings = "1 + 2"

// let sumOfString = eval(strings)


// console.log(sumOfString);





























































// console.log(sum)
// document.addEventListener('DOMContentLoaded', function() {
//     const display = document.querySelector('.display input[name="display"]');
//     const buttons = document.querySelectorAll('.calculater input[type="button"]');
//     buttons.forEach(button => {
//         button.addEventListener('click', function() {
//             const buttonValue = this.value;
//             switch(buttonValue) {
//                 case 'CE':
//                     display.value = '';
//                     break;
//                 case 'DE':
//                     display.value = display.value.slice(0, -1);
//                     break;
//                 case '=':
//                     try {
//                         display.value = eval(display.value);
//                     } catch (error) {
//                         display.value = 'Error';
//                     }
//                     break;
//                 default:
//                     display.value += buttonValue;
//             }
//         });
//     });
// });