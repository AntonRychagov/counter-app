let button = document.querySelector('.btn');
let buttonReset = document.querySelector('.btn__red');
let counterText = document.querySelector('.counter');

let counter = 0;

button.addEventListener('click', function() {
    counter = counter + 1;
    counterText.innerText = counter;
});

buttonReset.addEventListener('click', function() {
    buttonReset = counter = 0;
    counterText.innerText = buttonReset; 
});