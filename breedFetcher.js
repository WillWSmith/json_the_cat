const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      // If there's an error, pass the error to the callback
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);

    // Check if the response array is empty
    if (data.length === 0) {
      // If breed not found, pass a message to the callback
      callback(null, "Sorry, breed not found.");
    } else {
      // If successful, pass the description to the callback
      callback(null, data[0].description);
    }
  });
};

module.exports = {
  fetchBreedDescription,
};
