import img from "../img/koji-chef.jpeg";

export default function loadMainPage() {
  createPageContent();
  loadHeading();
  loadImg();
  appendText();
}
const content = document.getElementById("content");
const pageContent = document.createElement("div");

function createPageContent() {
  pageContent.classList.add("page-content");
  content.appendChild(pageContent);
}

function loadHeading() {
  const heading = document.createElement("div");
  heading.innerHTML = "<h1>Koji's Restaurant</h1>";
  heading.classList.add("heading");
  pageContent.appendChild(heading);
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
