// Function so we can call it in onclick() in html
function navigate(destination) {
  const display = document.getElementById("Content");

  if (destination !== undefined) { // Do we have a destination?

    document.title = destination;
    
    if (destination == "Blog") { // Calling blog function.
      OpenBlog();
    } else {
      fetch("../pages/" + destination + ".html")
      .then((response) => response.text())
      .then((text) => (display.innerHTML = text));
    }
    
  } else if (window.location.href.split("#")[1] !== undefined) { // Was the user on another page already?
    
    const last_page = window.location.href.split("#")[1];
    document.title = last_page;
    
    if (last_page !== "Blog") {
      fetch("../pages/" + last_page + ".html")
      .then((response) => response.text())
      .then((text) => (display.innerHTML = text));
    } else { // Was it blog?
      OpenBlog();
    }
    
  } else { // If it's their first time, redirect to home.

    document.title = "Home";
    
    fetch("../pages/Home.html")
    .then((response) => response.text())
    .then((text) => (display.innerHTML = text));
  }
}
navigate(); // Call on page load.