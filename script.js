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
    if (softenBrush=== 'false' && randomColor=== 'false' && eraser==='false'){
        document.getElementById(square).style.backgroundColor= 'black';
}   if (softenBrush=== 'true') {
        let Opacity= document.getElementById(square).style.opacity;
        document.getElementById(square).style.backgroundColor= 'black';
        document.getElementById(square).style.opacity= `${Number(Opacity) + .1}`;       
}   if (randomColor=== 'true'){
        let rando = Math.floor(Math.random()*250);
        let rando1 = Math.floor(Math.random()*250);
        let rando2 = Math.floor(Math.random()*250);  
        document.getElementById(square).style.backgroundColor= `rgb(${rando}, ${rando1}, ${rando2})`       
}   if (eraser=== 'true'){
        document.getElementById(square).style.backgroundColor= 'white';
}
}

const buttSize = document.getElementById('buttSize');
buttSize.addEventListener('click', resize);

function resize(){
    while (container.firstChild) container.removeChild(container.firstChild);
    let pixSize= prompt('How many pixels long is your board?');
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
    else {alert('Sorry, we\'re looking for a pixel length between 1-100!')}
};

let buttErase= document.getElementById('eraser');
let buttColor= document.getElementById('randomColor');
let buttOpacity= document.getElementById('transparent');

let eraser= 'false';
let softenBrush= 'false';
let randomColor= 'false';

buttErase.addEventListener('click', eraseOn);
buttOpacity.addEventListener('click', softenOn);
buttColor.addEventListener('click', randomOn);

function softenOn(){
    if (softenBrush=== 'false'){softenBrush='true'; randomColor='false'; eraser='false';}
    else {softenBrush='false';}  
};
function randomOn(){
    if (randomColor=== 'false'){randomColor= 'true'; softenBrush='false'; eraser= 'false';}
    else{randomColor= 'false';}
};
function eraseOn(){
    if (eraser=== 'false'){eraser='true'; softenBrush='false'; randomColor='false';}
    else{eraser='false';}
}