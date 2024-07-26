import Game from "./game.js";

window.addEventListener('load',function(){
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

ctx.fillStyle="black";
ctx.fillRect(0,0,canvas.width,canvas.height);
canvas.height = window.innerHeight-25;
canvas.width = window.innerWidth-25;

const game = new Game(canvas,ctx);

game.start();
});
