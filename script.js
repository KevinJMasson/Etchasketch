const grid = document.querySelector('#grid');
const gridSize = 960;
gridNum = 16;


for (let i = 0; i<gridNum;i++) {
    var row = document.createElement('div');
    row.classList.add('row');
    for (let k = 0; k < gridNum; k++) {
        var square = document.createElement('div');
        square.classList.add('square');
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