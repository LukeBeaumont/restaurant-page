import img from "../img/koji-chef.jpeg";

export default function loadMainPage() {
  loadHeading();
  appendHeading();
  loadImg();
  appendText();
}

const content = document.getElementById("content");

// nest in another div to make clearing page easier
const pageContent = document.createElement("div");
pageContent.classList.add("page-content");
content.appendChild(pageContent);

function loadHeading() {
  const heading = document.createElement("div");
  heading.innerHTML = "<h1>Koji's Restaurant</h1>";
  heading.classList.add("heading");
  return heading;
}

function appendHeading() {
  pageContent.appendChild(loadHeading());
}

function loadImg() {
  const pic = new Image();
  pic.src = img;
  pic.classList.add("img");

  pageContent.appendChild(pic);
}

function appendText() {
  const text = document.createElement("div");
  pageContent.appendChild(text);
  text.textContent = "Welcome to Koji boys amazing restaurant.";
}
