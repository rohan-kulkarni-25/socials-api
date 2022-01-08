const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/',(req,res)=>{
  res.status(200).send(`<h1>Welcome to Socials API</h1><br><h3>This will provide you endpoints from where you can get information about my social handles and their details.</h3><h1><ul><li>/api/v1/instagram</li><li>/api/v1/twitter</li><li>/api/v1/linkedin</li><li>/api/v1/github</li></ul></h1><em>All the Data is Hardcoded not coming from real API</em>`)
})

app.get('/api/v1/instagram',(req,res)=>{
  const instaObj = {
    username : 'rohan_k_2502',
    bio:'Web developer',
    posts:46,
    followers:469,
    followings:559
  }
  res.status(200).json(instaObj);
});

app.get('/api/v1/twitter',(req,res)=>{
  const twitterObj = {
    username : 'rohan_2502',
    bio:`WEB LEAD OF GDSC-SITS,Tweets About Open-Source,Web-Development,Github, and much more !`,
    tweets:2842,
    followers:1423,
    followings:561
  }
  res.status(200).json(twitterObj);
});

app.get('/api/v1/linkedin',(req,res)=>{
  const linkedinObj = {
    username : 'rohan-k-2502',
    bio:`Web Lead at GDSC-SITS | Learning Web-Development | Exploring Open Source `,
    connections:4686
  }
  res.status(200).json(linkedinObj);
});

app.get('/api/v1/github',(req,res)=>{
  const githubObj = {
    username : 'rohan-kulkarni-25',
    bio:`Web Lead at GDSC-SITS | Learning Web-Development | Exploring Open Source  `,
    followers:210,
    followings:60,
    repositories:71,
    commits: 2076
  }
  res.status(200).json(githubObj);
});

app.listen(PORT ,()=>{
  console.log(`Social App Server running on PORT ${PORT}`);
});

