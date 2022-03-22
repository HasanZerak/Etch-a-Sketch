function makeGrid(){
    for(let i = 0; i<=16; i++){         //a nested loop to create a grid. 
    
        for(let j = 1; j<16; j++){
            container.appendChild(containerChild.cloneNode(true));          //appending new div after each iteration by cloning the div each time.
        }
        document.write("<br />");           //new line after every 16 iteration.
    }
}

let container = document.querySelector('#container');
let containerChild = document.createElement('div');
containerChild.classList.add("containerChild");
makeGrid();         //Calling the function to create a grid. 
