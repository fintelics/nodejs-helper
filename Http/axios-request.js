const axios = require('axios');

axios.get('https://www.fintelics.com')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

