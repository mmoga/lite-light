//variables
const resetBtn = document.querySelector('#reset'); // querySelector means just one
const boxes = document.querySelectorAll('.box');   // vs querySelectorAll
const gridSizeForm = document.querySelector('#grid-size');
const main = document.querySelector('main');

//eventListeners
boxes.forEach(function(box, index){ //note the use of a function expression (inline)
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
    boxes.forEach((box, index) => { //note the use of an 'arrow' function
        box.classList.remove('red');
    });
}

function changeGrid(e) {
    e.preventDefault();
    const gridSizeValue = +gridSizeForm.querySelector('input:checked').value;
    const grid = makeGrid(gridSizeValue);
    // set the main to the grid
    main.innerHTML = ''; // this clears the main area (deletes the grid)
    main.appendChild(grid);
}

function makeGrid(size) {
    const element = document.createElement('h1');
    element.textContent = 'GRID!!!!';
    return element;
    // make the grid
        // make a div with class of row
        // make a div with class col-md-12 inside of row
        // make 6 divs with class of box inside of col-md-12
        // copy and pasted 6 times
}