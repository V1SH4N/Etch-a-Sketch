const container = document.querySelector("#container");
container.style.cssText = ['padding: 0;margin : 100px;display: inline-block;'];

for (let i = 0; i < 16; i++){
    const row = document.createElement('div');
    row.classList.add('row');
    row.style.display = 'flex';
    for (let j = 0; j < 16; j++){
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.style.cssText = ['border: 1px solid black; width: 40px; height: 40px;']
        grid.addEventListener('mouseenter', (e) => {
            console.log(e.button);
            e.target.style.backgroundColor = 'black';
        });
        row.appendChild(grid);
    }
    container.appendChild(row);
}


