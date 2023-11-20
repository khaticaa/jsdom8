let div = document.querySelectorAll("div");

div.forEach((element, i) => {
  if ((i + 1) % 5 === 0) {
    element.style.background = "blue";
  } else if ((i + 1) % 2 === 0) {
    element.style.background = "red";
  } else {
    element.style.background = "yellow";
  }
});
