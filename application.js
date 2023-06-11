

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

// ----------------------------[ Allotment Allocator functionality ]----------------------------

const searchBar = document.getElementById("search-bar");
const suggestionsList = document.querySelector(".suggestions-list");
const locationSelectorUl = document.querySelector('.location-selector > ul');
const locationSelector = document.querySelector('.location-selector > h3');

searchBar.addEventListener("input", () => {
  const searchText = searchBar.value.trim();
  
  if (searchText === "") {
    suggestionsList.style.display = "none";
    locationSelectorUl.style.visibility = "hidden";
    locationSelector.innerHTML = "";
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

      li.addEventListener("click", function() {
        const clickedInnerHTML = this.innerHTML;

        searchBar.value = clickedInnerHTML; // Replace input field value with clicked innerHTML

        locationSelector.innerHTML = "> " + clickedInnerHTML + ":";
        locationSelectorUl.style.visibility = "visible";
      });
    });

    suggestionsList.style.display = "block";
  }
});



const availablePlots = document.querySelectorAll('.location-selector-available');

availablePlots.forEach(plot => {
  let isReserved = false; // Track the reserved state

  plot.addEventListener("click", function(event) {
    event.preventDefault();

    if (isReserved) {
      this.innerHTML = "Reserve";
      isReserved = false;
    } else {
      this.innerHTML = "Reserved";
      isReserved = true;
    }
  });
});
