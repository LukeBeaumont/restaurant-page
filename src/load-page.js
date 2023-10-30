import img from "../img/koji-chef.jpeg";

export default function loadMainPage() {
  loadHeading();
  appendHeading();
  loadImg();
  appendText();
}

const content = document.getElementById("content");

function loadHeading() {
  const heading = document.createElement("div");
  heading.innerHTML = "<h1>Koji's Restaurant</h1>";
  heading.classList.add("heading");
  return heading;
}

function appendHeading() {
  content.appendChild(loadHeading());
}

function loadImg() {
  const pic = new Image();
  pic.src = img;
  pic.classList.add("img");

  content.appendChild(pic);
}

function appendText() {}
