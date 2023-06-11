

// Sets the visibility style of the body element to 'visible' once the window has finished loading
window.onload = function() {
  document.body.style.visibility = 'visible';
};


// ----------------------------[ Follow button on profile page ]----------------------------

var button = document.getElementById("follow-button");

if (button) {
  button.addEventListener("click", function() {
    if (button.classList.contains("follow-button-clicked")) {
      button.classList.remove("follow-button-clicked");
      button.innerHTML = "Follow";
    } else {
      button.classList.add("follow-button-clicked");
      button.innerHTML = "Following";
    }
  });
}

// ----------------------------[ Suggestive text Search bar ]----------------------------

const searchBar = document.getElementById("search-bar");
const suggestionsList = document.querySelector(".suggestions-list");

searchBar.addEventListener("input", () => {
  const searchText = searchBar.value.trim();
  
  if (searchText === "") {
    suggestionsList.style.display = "none";
  } else {
    const suggestedLocations = [
      "Kintra St, Govan, Glasgow G51 2RL",
      "Southcroft St, Govan, Glasgow G51 2DH",
      "Stag St, Govan, Glasgow G51 2LS"
    ];

    suggestionsList.innerHTML = "";
    suggestedLocations.forEach(location => {
      const li = document.createElement("li");
      li.textContent = location;
      suggestionsList.appendChild(li);
    });

    suggestionsList.style.display = "block";
  }
});

