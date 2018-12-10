var crypto = require('crypto');
var md5sum = crypto.createHash('md5')
var sha1sum = crypto.createHash('sha1')

sha1sum.update('fintelics')
md5sum.update('fintelics')

var md5output = md5sum.digest('hex')
var sha1output = sha1sum.digest('hex')

console.log('md5 value is '+md5output)
console.log('Sha1 value for sum is '+sha1output)

