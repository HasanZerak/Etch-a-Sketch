function makeGrid() {
    for (let j = 1; j < 257; j++) {         //removed nested loops, since is grid layouts is designed using css.
        container.appendChild(containerChild.cloneNode(true));          //appending new div after each iteration by cloning the div each time.
    }
}

let container = document.querySelector('#container');
let containerChild = document.createElement('div');
containerChild.classList.add("containerChild");

makeGrid();         //Calling the function to create a grid. 

let colorChangeCells = document.querySelectorAll(".containerChild");

colorChangeCells.forEach(colorChangeCell => {           //looping through each value and adding an event listener to each individual cell.
    colorChangeCell.addEventListener('mouseover', function () {           //for some reason, figuring this out took an hour.
        this.style.backgroundColor = 'red';         //changes colour everytime mouse hovers over it.
    });
});