const got = require('got');

got('https://www.fintelics.com', { json: true }).then(response => {
  console.log(response);
}).catch(error => {
  console.log(error.response.body);
});

