const container = document.querySelector("#container");

const createGrid = function(height, width) {
  const numOfSquares = height * width;
    for (let i = 0; i < numOfSquares; i++) {
      const square = document.createElement("div");
      container.appendChild(square);
      square.classList.add("square");
    }
}

const clearGrid = function() {
  while (container.firstChild) {
    container.removeChild(container.firstChild)
  }
}