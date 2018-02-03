//variables
const resetBtn = document.querySelector('#reset'); // querySelector means just one
const gridSizeForm = document.querySelector('#grid-size');
const main = document.querySelector('main');
const colorPicker = document.querySelector('#color-choice');

//eventListeners
resetBtn.addEventListener('click', clearGrid);
gridSizeForm.addEventListener('submit', changeGrid);

//initialized or started
changeGrid();

//function
function changeBoxColor(e) {
    const element = e.target; //whatever was clicked (where the event originated)
    if (element.style.backgroundColor) {
        element.style.backgroundColor = '';
        return;
    }
    element.style.backgroundColor = colorPicker.value;
}

// function toggleColor(e) {
//     const element = e.target;
//     element.classList.toggle('red');
// }

function clearGrid(e) {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box, index) => { //note the use of an 'arrow' function
        box.style.backgroundColor = '#ffffff';
    });
}

function changeGrid(e) {
    if (e) {
        e.preventDefault();
    }
    
    const gridSizeValue = +gridSizeForm.querySelector('input:checked').value;
    const grid = makeGrid(gridSizeValue);
    // set the main to the grid
    main.innerHTML = ''; // this clears the main area (deletes the grid)
    grid.forEach((row) => {
        main.appendChild(row);
    });
}

function makeGrid(size) {
    const rows = [];
    for (let i = 0; i < size; i += 1) {
        // make the grid
        // make a div with class of row
        const row = document.createElement('div'); // create the row div
        row.classList.add('row'); //add .row to the div we've just created
        // make a div with class col-md-12 inside of row
        const column = document.createElement('div'); // create the column div
        column.classList.add('col-md-12'); // add .col-md-12 to the div we've just created
        row.appendChild(column);
        // make 6 divs with class of box inside of col-md-12
        for (let i = 0; i < size; i += 1) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.addEventListener('click', changeBoxColor);
            column.appendChild(box);
        }
        rows.push(row); // behavior to push value into array 'rows'
    }
    // copy and pasted 6 times
    return rows;
}