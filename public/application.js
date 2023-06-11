

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

const locations = [
  {
    name: 'Kintra St',
    latitude: 55.856833,
    longitude: -4.308500
  },
  {
    name: 'The Field',
    latitude: 55.859556,
    longitude: -4.303972
  },
  {
    name: 'Stag St',
    latitude: 55.861651,
    longitude: -4.301731
  },
  {
    name:'Napier St',
    latitude:55.861461,
    longitude: -4.306350
  }

];

// const postcodeInput = document.getElementById('search-bar');
// const suggestionsList = document.getElementById('suggestions');

// postcodeInput.addEventListener('input', function() {
//   const postcode = postcodeInput.value.trim();

//   geocodePostcode(postcode, function(latitude, longitude) {
//     if (latitude !== null && longitude !== null) {
//       const closestLocation = findClosestLocation(latitude, longitude);
//       displaySuggestions([closestLocation]);
//     } else {
//       displaySuggestions([]);
//     }
//   });
// });

// function geocodePostcode(postcode, callback) {
//   // Use geocoding service (e.g., Google Maps Geocoding API) to convert postcode to latitude and longitude
//   // Implement the geocoding logic and call the callback function with latitude and longitude values
//   // Replace the code below with your geocoding implementation
//   const latitude = null;
//   const longitude = null;
//   callback(latitude, longitude);
// }

// function findClosestLocation(latitude, longitude) {
//   // Implement the logic to find the closest location based on the latitude and longitude
//   // Replace the code below with your closest location calculation implementation
//   return locations[0];
// }

// function displaySuggestions(suggestions) {
//   suggestionsList.innerHTML = '';

//   suggestions.forEach(function(suggestion) {
//     const li = document.createElement('li');
//     li.textContent = suggestion.name;
//     suggestionsList.appendChild(li);
//   });
// }