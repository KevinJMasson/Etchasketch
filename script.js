const grid = document.querySelector('#grid');
const gridSize = 960;
gridNum = 16;

drawGrid();

const sizeButton = document.querySelector('button');
sizeButton.addEventListener('click', () => {
    gridNum = parseInt(prompt("Please enter a new number of squares for the grid"));
    grid.innerHTML = '';
    drawGrid();
})

function drawGrid () {
    for (let i = 0; i<gridNum;i++) {
        var row = document.createElement('div');
        row.classList.add('row');
        for (let k = 0; k < gridNum; k++) {
            var square = document.createElement('div');
            square.classList.add('square');
            square.style.height = gridSize/gridNum + 'px';
            square.style.width = gridSize/gridNum + 'px';
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
    
    const squares = document.querySelectorAll('.square');
    
    squares.forEach((square) => {
        square.addEventListener('mouseover', function(e) {
            e.target.style.background = 'black';
        });
    });
}