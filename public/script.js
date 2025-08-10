const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const pageX = document.getElementById("pageX");
const pageY = document.getElementById("pageY");

canvas.addEventListener("click", function(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    ctx.fillStyle = "green";
    ctx.fillRect(x, y, 10, 10);
});
ctx.fillRect(0, 0, 100, 100);
