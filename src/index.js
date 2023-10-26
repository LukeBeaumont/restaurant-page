import "./style.css";
import loadMainPage from "./load-page";
import appendTabs from "../create-tabs";

const content = document.getElementById("content");

appendTabs();
content.appendChild(loadMainPage());
