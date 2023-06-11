

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

const postcodeInput = document.getElementById('search-bar');
const suggestionsList = document.getElementById('suggestions');

postcodeInput.addEventListener('input', function() {
  console.log("Input detected.")
  const postcode = postcodeInput.value.trim();

  geocodePostcode(postcode, function(latitude, longitude) {
    if (latitude !== null && longitude !== null) {
      const closestLocation = findClosestLocation(latitude, longitude);
      displaySuggestions([closestLocation]);
    } else {
      displaySuggestions([]);
    }
  });
});

function geocodePostcode(postcode, callback) {
  const apiUrl = `https://nominatim.openstreetmap.org/search?q=${postcode}&format=json&addressdetails=1`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (Array.isArray(data) && data.length > 0) {
        const { lat, lon } = data[0];
        const latitude = parseFloat(lat);
        const longitude = parseFloat(lon);
        callback(latitude, longitude);
      } else {
        callback(null, null);
      }
    })
    .catch(error => {
      console.error('Error geocoding postcode:', error);
      callback(null, null);
    });
}

// Logic to find the closest location based on the latitude and longitude
function findClosestLocation(latitude, longitude) {
  let closestLocation = null;
  let closestDistance = Number.MAX_VALUE;

  for (const location of locations) {
    const distance = calculateDistance(latitude, longitude, location.latitude, location.longitude);

    if (distance < closestDistance) {
      closestLocation = location;
      closestDistance = distance;
    }
  }

  return closestLocation;
}

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
}

function toRad(value) {
  return value * Math.PI / 180;
}

function displaySuggestions(suggestions) {
  suggestionsList.innerHTML = '';

  if (suggestions.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'No suggestions found';
    suggestionsList.appendChild(li);
  } else {
    suggestions.forEach(function(suggestion) {
      const li = document.createElement('li');
      li.textContent = suggestion.name;
      suggestionsList.appendChild(li);
    });
  }
}
