function createTabs(className) {
  const tab = document.createElement("div");
  tab.classList.add(className);

  return tab;
}

export default function appendTabs() {
  const content = document.getElementById("content");
  const container = document.createElement("div");
  for (let i = 0; i < 3; i++) {
    if (i === 0) {
      container.appendChild(createTabs("home"));
    } else if (i === 1) {
      container.appendChild(createTabs("menu"));
    } else if (i === 2) {
      container.appendChild(createTabs("contact"));
    }
  }
  container.classList.add("container");

  content.appendChild(container);
}
