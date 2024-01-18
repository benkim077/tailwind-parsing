const heading = document.querySelector("h1");
const button = document.querySelector("button");
button.onclick = attachClass;

function attachClass() {
  heading.classList.add("underline");
}
