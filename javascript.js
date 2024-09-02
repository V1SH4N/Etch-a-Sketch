
const container = document.querySelector('#container');
const newGridButton = document.querySelector('#newGridButton');
const randomColorButton = document.querySelector('#randomColor');
const darkeningButton = document.querySelector('#darkening');

container.style.cssText = ['padding: 0;margin : 100px;width: 500px; height: 500px; border: 1px solid black;display: flex;flex-direction: column;'];

const DEFAULT_GRID_SIZE = 16;

let gridSize = DEFAULT_GRID_SIZE;
let random = false;
let darkening = false;



function randomRGB(){
    let Red;
    let Green;
    let Blue;

    Red = Math.floor(Math.random() * 256);
    Green = Math.floor(Math.random() * 256);
    Blue = Math.floor(Math.random() * 256);
    return (`rgb(${Red}, ${Green}, ${Green})`);
}

function createGrid(gridSize,random,darkening){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i < gridSize; i++){

        const row = document.createElement('div');
        row.classList.add('row');
        row.style.display = 'flex';

        for (let j = 0; j < gridSize; j++){

            let color;
            (random) ? color = randomRGB() : color = 'black';
            
            const grid = document.createElement('div');
            grid.classList.add('grid');
            grid.style.cssText = ['border: 1px solid black;flex: 1 1 auto;aspect-ratio: 1/1;']
            
            grid.addEventListener('mouseover', (e)=>{
                e.target.style.opacity = 1;
                e.target.style.backgroundColor = color;   
            });

            row.appendChild(grid);
        }
        container.appendChild(row);
    }
};

newGridButton.addEventListener('click', (e)=>{
    do{
        gridSize = prompt("Enter new grid size");
        
        if (gridSize === null || gridSize === ''){;
            gridSize = DEFAULT_GRID_SIZE;
        }else if (gridSize > 64){
            alert('Grid size is limited to 64 grid per side')
        }
    }while(gridSize > 64);
    createGrid(gridSize, random, darkening);
});

randomColorButton.addEventListener('click', ()=>{
    (random) ? random = false : random = true;
    createGrid(gridSize, random, darkening);

});

darkeningButton.addEventListener('click', ()=>{
    (darkening) ? darkening = false : darkening = true;
    createGrid(gridSize, random, darkening);
})


createGrid(gridSize, random, darkening);

