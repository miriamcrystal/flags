// Canvas context
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

// Fix a stupid context bug that blurs
// the pixels
ctx.translate(0.5, 0.5);

ctx.fillStyle = "green";
ctx.fillRect(10, 30, 100, 300);

ctx.fillStyle = "white";
ctx.fillRect(110, 30, 100, 300);

ctx.fillStyle = "red";
ctx.fillRect(210, 30, 100, 300);


