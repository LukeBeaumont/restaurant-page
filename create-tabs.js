function createTabs() {
  const tab = document.createElement("div");

  return tab;
}

export default function appendTabs() {
  const content = document.getElementById("content");
  const container = document.createElement("div");
  for (let i = 0; i < 3; i++) {
    container.appendChild(createTabs());
  }

  container.classList.add("container");

  content.appendChild(container);
}
