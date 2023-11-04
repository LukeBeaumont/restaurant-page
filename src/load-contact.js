export default function loadContactPage() {
  const content = document.getElementById("content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");
  content.appendChild(pageContent);

  const address = document.createElement("p");
  address.innerHTML =
    "Find us on Melbourne high street at <br> 12 longwalk way,<br>The park,<br>RX3 K9";
  pageContent.appendChild(address);

  const contactInfo = document.createElement("p");
  contactInfo.innerHTML =
    "To book now/enquire please get in touch.<br> Call us on 0234 56789 <br> or email: kojiboyresturant@woof.com";
  pageContent.appendChild(contactInfo);
}
