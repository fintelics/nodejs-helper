const superagent = require('superagent');

superagent.get('https://www.fintelics.com')
//.query({ api_key: 'DEMO_KEY', date: '2017-08-02' })
.end((err, res) => {
  if (err) { return console.log(err); }
  console.log(res.body);
  console.log(res.body);
});
