const express = require("express");
const app=express();
app.use(express.static("public"));

app.listen(3000,()=>{
    console.log("servidor andando")//recursos
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/home.html")
})

app.get('/register.html', (req, res) => {
  res.sendFile(__dirname + "/views/register.html")
})
app.get('/login.html', (req, res) => {
  res.sendFile(__dirname + "/views/login.html")
})

