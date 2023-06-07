// navbar.js
document.addEventListener("DOMContentLoaded", function () {
    // Fetch the navbar.html content
    fetch("assets/navbar.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        // Replace the navbar-placeholder div with the navbar.html content
        document.getElementById("navbar-placeholder").innerHTML = html;
      })
      .catch(function (error) {
        console.log("Error fetching navbar:", error);
      });
  });
  