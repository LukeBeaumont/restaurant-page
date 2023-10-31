import "./style.css";
import loadMainPage from "./load-page";
import appendTabs from "./create-tabs";

appendTabs();
loadMainPage();

const home = document.querySelector(".home");
console.log(home);

home.addEventListener("click", () => {
  alert("ho");
});
