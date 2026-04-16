const canvas = document.getElementById("firmaCanvas");
const ctx = canvas.getContext("2d");

let dibujando = false;

canvas.addEventListener("mousedown", () => dibujando = true);
canvas.addEventListener("mouseup", () => dibujando = false);
canvas.addEventListener("mousemove", e => {
  if (!dibujando) return;

  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
});

function obtenerFirma() {
  return canvas.toDataURL();
}