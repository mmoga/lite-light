//variables
const resetBtn = document.querySelector('#reset');
const box = document.querySelector('.box');

//eventListeners
box.addEventListener('click', toggleRed);
resetBtn.addEventListener('click', clearGrid)

//functions
function toggleRed(e) {
    const element = e.target;
    element.classList.toggle('red');
}

function clearGrid(e) {
    console.log('clearing the grid');
}