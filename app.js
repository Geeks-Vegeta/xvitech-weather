const express = require("express");

const getCityWeather = require("./helper/getFunction");

const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/",(req, res)=>{
    res.json({"message":"Initial route"});
})

app.post("/getWeather",async(req, res)=>{
    let {cities}=req.body;
   
    let x=await getCityWeather(cities);
    res.json({"weather":x});
})
const port = 5000;

app.listen(port, ()=>{
    console.log(`connected to port ${port}`);
})
