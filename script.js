const apikey="ecdda54cf0e06a0d4befcdf32c9c0f8d "
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    }
    else{
    var data = await response.json();


    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

   if(data.weather[0].main == "clouds"){
      weatherIcon.src = "clouds.png";
   }
   else if(data.weather[0].main == "clear"){
      weatherIcon.src = "clear.png";
   }
   else if(data.weather[0].main == "Rain"){
     weatherIcon.src = "rain.png";
   }
   
  else if(data.weather[0].main == "Drizzle"){
   weatherIcon.src = "drizzle.png";
  }

  else if(data.weather[0].main == "Mist"){
   weatherIcon.src = "mist.png";
  }

   
  document.querySelector(".weather").style.display="block";
  document.querySelector(".error").style.display = "block";
}
}

searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);

})
