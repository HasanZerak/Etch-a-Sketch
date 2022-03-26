let container = document.querySelector('#container');
let defaultColor = 'red';
let eraser = document.querySelector('.eraser');             //storing the three buttons in variables.
let color = document.querySelector('.color')
let randColor = document.querySelector('.randColor');
let currentSize = 16;

function makeGrid(newGridSize) {            //function to create new grid.
    container.style.gridTemplateRows = `repeat(${newGridSize}, 1fr)`;           //rows of grid.
    container.style.gridTemplateColumns = `repeat(${newGridSize}, 1fr)`;            //columns of grid.

    for (let j = 0; j < (newGridSize * newGridSize); j++) {         //removed nested loops, since is grid layouts is designed using css.
        let containerChild = document.createElement('div');         //creating a new div.
        containerChild.classList.add("containerChild");            //adding a class to each new div.
        //adding an event listener to each div.

        containerChild.addEventListener('mouseover', changeColor);           //for some reason, figuring this out took an hour.
        container.appendChild(containerChild)          //appending new div after each iteration.
    }
}

function changeColor() {
    if(this.style.backgroundColor !== defaultColor){
    this.style.backgroundColor = defaultColor;         //changes colour everytime mouse hovers over it.
    let audio = new Audio('/home/hasan/repos/Etch-a-Sketch/sound/QKTA234-pop.mp3');         //variable to hold the audio.
    audio.play();           //playing the audio.
}
}

color.addEventListener("click", function () {           //button to change color to the default color, by changing 'defaultColor'  
    defaultColor = 'red';                               //to the color "red".
});

randColor.addEventListener("click", function () {           //button to change color to any random color, by changing 'defaultColor'
    let letters = '0123456789ABCDEF';                       //to any color.
    let color = '#';                                        
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    defaultColor = color;
});

eraser.addEventListener("click", () => {            //button to change color to nothing, by changing 'defaultColor' to an empty string. 
    defaultColor = '';
});

function create(){          //button to crete new grid with custom grid size.
    let newGridSize = document.querySelector('#gridSize');          //storing the value from slider.
    container.innerHTML = '';         //removing everything from container and crearting an entirely new grid.
    makeGrid(newGridSize.value);
    currentSize = newGridSize.value;            //assigning value to a varibale for btnReset().
}

function btnReset() {           //function for Reset button.
    container.innerHTML = '';         //removing everything from container and crearting an entirely new grid.
    makeGrid(currentSize);
}
makeGrid(16);         //Calling the function to create a grid. 