import "./style.css";
import loadMainPage from "./load-page";
import createTabs from "../create-tabs";

const content = document.getElementById("content");

function appendTabs() {
  for (let i = 0; i < 3; i++) {
    container.appendChild(createTabs());
  }
}
const container = document.createElement("div");
container.classList.add("container");

content.appendChild(container);
appendTabs();
content.appendChild(loadMainPage());
