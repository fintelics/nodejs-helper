//This script uses the basic http requst template

const https = require('https');

https.get('https://google.com',(response)=>{

    let data ='';
    response.on('data',(chunk)=>{
        data+=chunk;
    });

    response.on('end',()=>{
        //console.log(JSON.parse(data).explanation)
        console.log(data)
    });
}).on("error",(err)=>{
    console.log("Error"+err.message);

});
