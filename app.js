const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  const postcode = req.body.postcode;

  axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${postcode}`)
    .then(response => {
      const data = response.data;
      if (data.length > 0) {
        const latitude = parseFloat(data[0].lat);
        const longitude = parseFloat(data[0].lon);
        res.send({ success: true, latitude, longitude });
      } else {
        res.send({ success: false, message: 'No results found.' });
      }
    })
    .catch(error => {
      console.error('Error:', error);
      res.send({ success: false, message: 'Error occurred during geocoding.' });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
