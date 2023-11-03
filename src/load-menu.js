export default function loadMenu() {
  createMenu();
}

function createMenu() {
  const content = document.getElementById("content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  content.appendChild(pageContent);
}
