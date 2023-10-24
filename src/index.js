import "./style.css";
import loadMainPage from "./load-page";
import createTabs from "../create-tabs";

const content = document.getElementById("content");

document.body.appendChild(loadMainPage());

function appendTabs() {
  for (let i = 0; i < 3; i++) {
    content.appendChild(createTabs());
  }
}

appendTabs();
