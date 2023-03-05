const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})




const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

// Function to search for text within an element and highlight it
function highlight(element, query) {
  if (element.nodeType === Node.TEXT_NODE) {
    const text = element.textContent;
    const matchIndex = text.toLowerCase().indexOf(query.toLowerCase());
    if (matchIndex >= 0) {
      const highlight = document.createElement('span');
      highlight.className = 'highlight';
      highlight.textContent = text.substring(matchIndex, matchIndex + query.length);
      const prefix = document.createTextNode(text.substring(0, matchIndex));
      const suffix = document.createTextNode(text.substring(matchIndex + query.length));
      element.parentNode.replaceChild(suffix, element.nextSibling);
      element.parentNode.insertBefore(highlight, suffix);
      element.parentNode.insertBefore(prefix, highlight);
    }
  } else if (element.nodeType === Node.ELEMENT_NODE) {
    const children = element.childNodes;
    for (let i = 0; i < children.length; i++) {
      highlight(children[i], query);
    }
  }
}

