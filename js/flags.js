// Canvas context
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

// Fix a stupid context bug that blurs
// the pixels
ctx.translate(0.5, 0.5);


ctx.fillStyle = "green";
ctx.fillRect(40, 30, 200, 300);

ctx.fillStyle = "white";
ctx.fillRect(240, 30, 200, 300);

ctx.fillStyle = "red";
ctx.fillRect(440, 30, 200, 300);


