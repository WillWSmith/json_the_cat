const request = require("request");

const breedFetcher = (breedName) => {
  // Construct the API endpoint URL with the breed name query parameter
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      console.error(`Request failed: `, error);
      return;
    }

    const data = JSON.parse(body);

    // Check if the response array is empty
    if (data.length === 0) {
      console.log(`Sorry, breed not found.`);
    } else {
      // Log the description of the first breed in the response
      console.log(`Description: `, data[0].description);
    }
  });
};

const breedName = process.argv[2];
breedFetcher(breedName);
