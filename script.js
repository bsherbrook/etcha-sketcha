let container = document.getElementById('container');
for (i=0; i<256; i++) {
    let newDiv = document.createElement('div');
    newDiv.className= 'board';
    newDiv.id= `tile${i}`;
    container.appendChild(newDiv);
}
let board = document.querySelectorAll('.board');

board.forEach(tile => tile.addEventListener('mouseover', draw));

function draw(tile){
    let square = tile.target.id;
    document.getElementById(square).style.backgroundColor= 'black';
}

const buttSize = document.querySelector('button');
buttSize.addEventListener('click', ask=ask=>{prompt('What size you want?')});