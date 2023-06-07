// footer.js
document.addEventListener("DOMContentLoaded", function () {
    // Fetch the footer.html content
    fetch("assets/footer.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        // Replace the footer-placeholder div with the footer.html content
        document.getElementById("footer-placeholder").innerHTML = html;
      })
      .catch(function (error) {
        console.log("Error fetching footer:", error);
      });
  });
  