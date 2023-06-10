var button = document.getElementById("follow-button");

if (button) {
  button.addEventListener("click", function() {
    if (button.classList.contains("follow-button-clicked")) {
      button.classList.remove("follow-button-clicked");
      button.innerHTML = "Follow";
    } else {
      button.classList.add("follow-button-clicked");
      button.innerHTML = "Followed";
    }
  });
}