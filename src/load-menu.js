export default function loadMenu() {
  const content = document.getElementById("content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");
  content.appendChild(pageContent);

  const menu = document.createElement("ul");
  pageContent.appendChild(menu);

  const itemOne = document.createElement("li");
  itemOne.textContent = "Fish skin doughnut";
  menu.appendChild(itemOne);

  const itemTwo = document.createElement("li");
  itemOne.textContent = "Puppachino";
  menu.appendChild(itemTwo);

  const itemThree = document.createElement("li");
  itemOne.textContent = "chip";
  menu.appendChild(itemThree);

  const itemFour = document.createElement("li");
  itemOne.textContent = "turkey and tripe";
  menu.appendChild(itemFour);
}
