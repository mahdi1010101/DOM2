function getRandomColor() {
  return [
    Math.floor(Math.random() * (255 + 1)),
    Math.floor(Math.random() * (255 + 1)),
    Math.floor(Math.random() * (255 + 1)),
  ];
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("change-color-btn").addEventListener("click", () => {
    let randomColor = getRandomColor();
    document.getElementById(
      "color-box"
    ).style.backgroundColor = `RGB( ${randomColor[0]},${randomColor[1]},${randomColor[2]})`;
    console.log(randomColor);
  });
});
