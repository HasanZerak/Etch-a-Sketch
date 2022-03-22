function makeGrid(){
        for(let j = 1; j<257; j++){         //removed nested loops, since is grid layouts is designed using css.
            container.appendChild(containerChild.cloneNode(true));          //appending new div after each iteration by cloning the div each time.
        }
    }

let container = document.querySelector('#container');
let containerChild = document.createElement('div');
containerChild.classList.add("containerChild");
makeGrid();         //Calling the function to create a grid. 