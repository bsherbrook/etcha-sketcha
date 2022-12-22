let container = document.getElementById('container');
for (i=0; i<(16**2); i++) {
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

buttSize.addEventListener('click', function resize(){
                    while (container.firstChild) container.removeChild(container.firstChild);
                    let pixSize= prompt('how big you want this shit?');
                    if (pixSize>0 && pixSize<101){
                        for (i=0; i<(pixSize**2); i++) {
                            let newDiv = document.createElement('div');
                            newDiv.className= 'newBoard';
                            newDiv.id= `tile${i}`;
                            container.appendChild(newDiv);
                        }
                        container.style.gridTemplateColumns= `repeat(${pixSize},auto)`;
                        container.style.gridTemplateRows= `repeat(${pixSize},auto)`;
                        let newBoard = document.querySelectorAll('.newBoard');
                        newBoard.forEach(tile => tile.addEventListener('mouseover', draw));
                        }
                    else {alert('Error, must select a number between 1-100!')}
                    });