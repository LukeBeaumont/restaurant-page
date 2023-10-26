function createTabs() {
  const tab = document.createElement("div");
  tab.classList.add("tabs");

  return tab;
}

export default function appendTabs() {
  for (let i = 0; i < 3; i++) {
    container.appendChild(createTabs());
  }
  const container = document.createElement("div");
  container.classList.add("container");

  content.appendChild(container);
}
