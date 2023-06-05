const axios = require("axios");

const getCityWeather=async(cities)=>{
    try {
        let city=[]
            for(let i=0;i<cities.length;i++){
                let api = `https://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=43ee602cd3f013c1a0c2fa793155236e`;
                let weather = await axios.post(api);
                let cityname = weather.data.name;
                let kelvin = weather.data.main.temp;
                let celcius = kelvin - 273.15;
                let deg = celcius.toFixed(0);
                let desc = weather.data.weather[0].description;
                city.push({name:cityname, deg:`${deg}C`, desc:desc})
            }
        return city;
    } catch (error) {
        console.log(error);
    }
}

module.exports=getCityWeather;