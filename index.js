require('dotenv').config()

const needle = require("needle");

const {generateImage} = require('./lib/canvas');
const {uploadImage} = require('./lib/upload');


setInterval(() => {
  var token = process.env.BEARER_TOKEN 
  token.replace(/\r?\n|\r/g, '')
  const auth_headers = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-type': 'application/json',
    },
    timeout: 20000,
  }
  var userId = "906370059097972737";

  console.log(auth_headers)

  needle('get', `https://api.twitter.com/1.1/users/show.json?user_id=${userId}`, {}, auth_headers)
    .then((response) => {
    if (
        response.body 
    ) {
      generateImage(response.body.followers_count).then(()=>{
        uploadImage();
      })
    }
  }).catch((err)=>{
    console.log(err);
  })
  
}, 6000);


