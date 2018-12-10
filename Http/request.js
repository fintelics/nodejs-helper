const request = require('request');

request('https://www.fintelics.com', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body);
});
