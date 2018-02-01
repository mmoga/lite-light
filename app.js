//variables
const resetBtn = document.querySelector('#reset'); // querySelector means just one
const boxes = document.querySelectorAll('.box');   // vs querySelectorAll
const gridSizeForm = document.querySelector('#grid-size');

//eventListeners
boxes.forEach(function(box, index){ //note the use of an inline function
    box.addEventListener('click', toggleRed);
});
resetBtn.addEventListener('click', clearGrid);
gridSizeForm.addEventListener('submit', changeGrid);

//functions
function toggleRed(e) {
    const element = e.target;
    element.classList.toggle('red');
}

function clearGrid(e) {
    boxes.forEach((box, index) => { //note the use of a 'fat arrow' function
        box.classList.remove('red');
    });
}

function changeGrid(e) {
    e.preventDefault();
    const gridSizeValue = +gridSizeForm.querySelector('input:checked').value;
    console.log(e);
}