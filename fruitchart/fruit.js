'use strict';

// An array of fruit objects
const fruit = [
    {name:"Apple", quantity: 20, color: "red"},
    {name:"Orange", quantity: 10, color: "orange"},
    {name:"Banana", quantity: 15, color: "yellow"},
    {name:"Kiwi", quantity: 5, color: "green"},
    {name:"Blueberry", quantity: 5, color:"blue"},
    {name:"Grapes", quantity: 10, color:"purple"}
];

window.onload = function() {
    const canvas = document.getElementById('fruit-chart');
    const ctx = canvas.getContext("2d");

    let maxBarHeight = 130;
    let start_y = 0;
    let quantityCalc = 25;

    for (let i = 0; i < fruit.length; i++) {
        let calcWidth = fruit[i].quantity / quantityCalc * canvas.width;
        ctx.fillStyle = fruit[i].color;
        ctx.fillRect(0, start_y, calcWidth, maxBarHeight);
        ctx.fillStyle = "black";
        ctx.font = "20px Arial";
        ctx.fillText(fruit[i].quantity, 10, start_y + maxBarHeight / 2 + 30);
        ctx.fillText(fruit[i].name, 10, start_y + maxBarHeight / 2);
        start_y += maxBarHeight + 20;
    }
}