const canvas = document.getElementById('cartoon');

// Allows canvas to take up the whole viewport
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Sets the background color of the canvas
canvas.style.background = "#EDF1D6";

const ctx = canvas.getContext("2d");

// Giving our cartoon a title
ctx.font = "40px serif";
ctx.fillText("Live here rent free!", canvas.width / 2, 90);

// Drawing a sun
ctx.beginPath();
ctx.arc(25, 25, 60, 0, Math.PI * 2, false);
ctx.fillStyle = "rgb(255, 255, 0)";
// When fill() is used, any open shapes are closed automatically, do not need to call closePath()
ctx.fill();

// Adding a brown ground color 
ctx.fillStyle = "#84694e";
ctx.fillRect(0, 450, canvas.width, 400);

// Drawing some clouds
// Cloud #1
ctx.beginPath();
ctx.arc(200, 105, 30, 0, Math.PI * 2, false);
ctx.arc(250, 105, 30, 0, Math.PI * 2, false);
ctx.fillStyle = "#FFFFFF";
ctx.fill();

// Cloud #2
ctx.beginPath();
ctx.arc(400, 105, 30, 0, Math.PI * 2, false);
ctx.arc(450, 105, 30, 0, Math.PI * 2, false);
ctx.fillStyle = "#FFFFFF";
ctx.fill();

// House in the middle
// Set line width
ctx.lineWidth = 8;

// Wall of house
ctx.strokeRect(250, 307, 170, 140);

// Door of house
ctx.fillStyle = "#b76f20";
ctx.fillRect(312, 383, 40, 60);

// Doorknob
ctx.beginPath();
ctx.arc(320, 420, 5, 0, Math.PI * 2, false);
ctx.fillStyle = "#000000";
ctx.fill();

// Roof
ctx.beginPath();
ctx.moveTo(250, 305);
ctx.lineTo(350, 185);
ctx.lineTo(420, 305);
ctx.stroke();
ctx.fillStyle = "#9D6055";
ctx.fill();

// Drawing grasses on left half of house
let x = 15;
for (let i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.moveTo(0+x, 400);
    ctx.lineTo(10+x, 450);
    ctx.lineTo(0+x, 450);
    ctx.fillStyle = "green";
    ctx.fill();
    x += 30;
}

// Drawing grasses on right half of house
let y = 430;
for (let j = 0; j < 8; j++) {
    ctx.beginPath();
    ctx.moveTo(0+y, 400);
    ctx.lineTo(10+y, 450);
    ctx.lineTo(0+y, 450);
    ctx.fillStyle = "green";
    ctx.fill();
    y += 30;
}


// Drawing mountain scenery on left side
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(0, 200);
ctx.lineTo(75, 170);
ctx.lineTo(105, 250);
ctx.lineTo(120, 190);
ctx.lineTo(130, 185);
ctx.lineTo(145, 235);
ctx.lineTo(165, 195);
ctx.lineTo(215, 300);
ctx.strokeStyle = "#977c53";
ctx.stroke();

// Drawing a pond of water
ctx.beginPath();
ctx.arc(800, 370, 80, 0, Math.PI * 2, false);
ctx.fillStyle = "#0e87cc";
ctx.fill();

// Drawing some trees
ctx.beginPath();
ctx.fillStyle = "#4F2412";
ctx.fillRect(970, 370, 20, 80);
ctx.fill();
ctx.fillStyle = "green";
ctx.arc(980, 345, 35, 0, Math.PI * 2, false);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#4F2412";
ctx.fillRect(1100, 370, 20, 80);
ctx.fill();
ctx.fillStyle = "green";
ctx.arc(1110, 350, 35, 0, Math.PI * 2, false);
ctx.fill();


// Drawing pebbles underneath the ground
let space = 50;
while (space < canvas.width) {
    ctx.beginPath();
    ctx.arc(space, 500, 4, 0, Math.PI * 2, false)
    ctx.fillStyle = "#5A4D41";
    ctx.fill();
    space += 100
}


// // x, y  = is 200 away from the left and 200 away from top
// ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
// ctx.fillRect(100, 100, 100, 100);
// ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
// ctx.fillRect(200, 200, 100, 100);
// ctx.fillStyle = "rgba(0, 255, 0, 0.5";
// ctx.fillRect(300, 300, 100, 100);

// // Line
// ctx.beginPath();
// ctx.moveTo(50, 300);
// ctx.lineTo(300, 100);
// ctx.lineTo(400, 300);
// ctx.strokeStyle = "#fa34a3";
// ctx.stroke();

// // Arc / Circle
// // ctx.beginPath();
// // ctx.arc(300, 300, 30, 0, Math.PI * 2, false);
// // ctx.strokeStyle = "blue";
// // ctx.stroke();

// // Creating multiple circles with a for loop
// for (let i = 0; i < 3; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     ctx.beginPath();
//     ctx.arc(x, y, 30, 0, Math.PI * 2, false);
//     ctx.strokeStyle = "blue";
//     ctx.stroke();
// }

