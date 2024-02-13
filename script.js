function search_url() {
  let searchUrl = document.getElementById("input_value").value;
  let url = "https://www.google.com/search?q=" + searchUrl;
  window.open(url, "google");
}

document
  .getElementById("input_value")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      search_url();
    }
  });
