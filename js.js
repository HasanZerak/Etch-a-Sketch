let container = document.querySelector('#container');

function makeGrid(newGridSize) {            //function to create new grid.
    container.style.gridTemplateRows = `repeat(${newGridSize}, 1fr)`;           //rows of grid.
    container.style.gridTemplateColumns = `repeat(${newGridSize}, 1fr)`;            //columns of grid.

    for (let j = 0; j < (newGridSize * newGridSize); j++) {         //removed nested loops, since is grid layouts is designed using css.
        let containerChild = document.createElement('div');         //creating a new div.
        containerChild.classList.add("containerChild");            //adding a class to each new div.
        //adding an event listener to each div.
        containerChild.addEventListener('mouseover', changeColor);           //for some reason, figuring this out took an hour.
        container.appendChild(containerChild)          //appending new div after each iteration by cloning the div each time.
    }
}

function changeColor(e) {
    e.target.style.backgroundColor = 'red';         //changes colour everytime mouse hovers over it.
}

function btnReset() {           //function for Reset button.
    newGridSize = prompt("Enter the new size of the grid : ");
    container.innerHTML = '';         //removing everything from container and crearting an entirely new grid.
    makeGrid(newGridSize);
}

makeGrid(20);         //Calling the function to create a grid. 