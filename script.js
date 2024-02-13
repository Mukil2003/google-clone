function search_url() {
  let searchUrl = document.getElementById("input_value").value;
  let url = "https://www.google.com/search?q=" + searchUrl;
  window.open(url, "google");
}
