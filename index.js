const express = require ("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

const user = {
    name:"Rushikesh",
    roll:10
}

app.get("/", (req, res)=>{
    res.send("Site is ok");
})

// set the cookie to the client side
app.get("/setcookie", (req, res)=>{
    res.cookie("user", user);
    res.send("Cookie settled")

})

// get the cookies form client request
app.get("/getcookie", (req, res)=>{
    res.send(req.cookies);
})

app.listen(5000, ()=>console.log("Site is live"));