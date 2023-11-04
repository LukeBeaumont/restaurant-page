import "./style.css";
import loadHomePage from "./load-page";
import appendTabs from "./create-tabs";
import loadMenu from "./load-menu.js";
import loadContactPage from "./load-contact.js";

appendTabs();
loadHomePage();

const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const contact = document.querySelector(".contact");

function addListeners() {
  home.addEventListener("click", () => {
    clearPage();
    loadHomePage();
  });
  menu.addEventListener("click", () => {
    clearPage();
    loadMenu();
  });
  contact.addEventListener("click", () => {
    clearPage();
    loadContactPage();
  });
}

addListeners();

function clearPage() {
  const pageContent = document.querySelector(".page-content");
  const content = document.getElementById("content");
  if (pageContent) {
    content.removeChild(pageContent);
  }
}
