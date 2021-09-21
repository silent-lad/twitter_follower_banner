require('dotenv').config()
const express = require("express");
const needle = require("needle");
const bodyParser = require("body-parser");
const chalk = require("chalk");

const app = express();

app.set("port", process.env.PORT || 8080);

app.use(express.urlencoded({extended: true})); 
app.use(express.json());


app.get("/",(req,res)=>{
    res.json({status:"ok"});
})

app.get("/follow",(req,res)=>{
    // let follow_count = req.body.followers;
    const token = process.env.BEARER_TOKEN
if (!token) {
  terminate(
    'Config mismatch. Expected BEARER_TOKEN environment variable to contain a Twitter API token. Found undefined',
  )
}

const auth_headers = {
    headers: {
       Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    },
    timeout: 20000,
  }
  var userId = "906370059097972737";

  needle('get', `https://api.twitter.com/1.1/users/show.json?user_id=${userId}`, {}, auth_headers)
    .then((response) => {
    if (
        response.body 
    ) {
        res.json({status:response.body.followers_count});
    }
  })
})

app.listen(app.get("port"), () => {
    console.log("Listeneing at port 8080");
  });
