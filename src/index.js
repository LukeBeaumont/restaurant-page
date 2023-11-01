import "./style.css";
import loadMainPage from "./load-page";
import appendTabs from "./create-tabs";
import loadMenu from "./load-menu.js";

appendTabs();
loadMainPage();

const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const contact = document.querySelector(".contact");

function addListeners() {
  home.addEventListener("click", () => {
    clearPage();
    loadMainPage();
  });
  menu.addEventListener("click", () => {
    clearPage();
    loadMenu();
  });
}

addListeners();

function clearPage() {
  const pageContent = document.querySelector(".page-content");
  const content = document.querySelector(".content");
  content.removeChild(pageContent);
}
