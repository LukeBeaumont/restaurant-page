import img from "../img/koji-chef.jpeg";

export default function loadHomePage() {
  const content = document.getElementById("content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");
  content.appendChild(pageContent);

  const heading = document.createElement("div");
  heading.innerHTML = "<h1>Koji's Restaurant</h1>";
  heading.classList.add("heading");
  pageContent.appendChild(heading);

  const pic = new Image();
  pic.src = img;
  pic.classList.add("img");

  pageContent.appendChild(pic);

  const text = document.createElement("div");
  pageContent.appendChild(text);
  text.textContent = "Welcome to Koji boys amazing restaurant.";
}
