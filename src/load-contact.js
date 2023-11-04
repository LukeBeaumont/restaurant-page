export default function loadContactPage() {
  const content = document.getElementById("content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");
  content.appendChild(pageContent);

  const contactInfo = document.createElement("p");
  contactInfo.textContent = "To book now/enquire please get in touch";
  pageContent.appendChild(contactInfo);
}
