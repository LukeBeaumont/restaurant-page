export default function loadMainPage() {
  const heading = document.createElement("div");
  heading.innerHTML = "<h1>Koji's Restaurant</h1>";
  heading.classList.add("heading");
  return heading;
}
