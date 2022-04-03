const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const move = 15;
/*
const width = canvas.width;
const height = canvas.height;*/
const {width, height} = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

console.log(width, height);
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = move;

let hue = 0;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
function draw({key}) {

    console.log(key);
    hue += 10;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(x, y);

    switch (key) {
        case 'ArrowUp':
            y = y - move;
            break;
        case 'ArrowDown':
            y += move;
            break;
        case 'ArrowRight':
            x += move;
            break;
        case 'ArrowLeft':
            x -= move;
            break;
        default:
            break;
    }


    ctx.lineTo(x, y);
    ctx.stroke();
}


function handleKey(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({key: e.key});
    }
}

function clearCanvas() {
 canvas.classList.add('shake');
 ctx.clearRect(0, 0, width, height);
 canvas.addEventListener('animationend', function () {
     console.log("done")
     canvas.classList.remove('shake');
 }, { once: true } )
}

shakeButton.addEventListener('click', clearCanvas);

window.addEventListener('keydown', handleKey);