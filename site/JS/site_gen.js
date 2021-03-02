/* mouse cursor*/

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
  cursor.style.right = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
}
