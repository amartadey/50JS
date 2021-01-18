const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);
fill.addEventListener("dragover", dragOver);
fill.addEventListener("dragenter", dragEnter);
fill.addEventListener("dragleave", dragLeave);
fill.addEventListener("dragdrop", dragDrop);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}
function dragEnd() {
  this.className = "fill";
}
function dragOver(e) {
  e.preventDefault();
  console.log("Drag Over");
}
function dragEnter(e) {
  e.preventDefault();
  console.log("Drag Enter");
  this.className += " hovered";
}
function dragLeave() {
  console.log("Drag Leave");
  this.className += "empty";
}
function dragDrop() {
  this.className = "empty";
  this.append(fill);
}
