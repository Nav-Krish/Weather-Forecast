var weatherContainer=document.getElementById('weatherContainer')

var enter=document.getElementById('cityName')
enter.addEventListener("keypress", (e)=>{
  if(e.key=="Enter"){
    e.preventDefault();
    // document.getElementById("myBtn").click();
    getWeatherData()
  }
})

async function getWeatherData(){
    try{

        //get weather data from the openweather API using fetch
        var cityName=document.getElementById('cityName').value
    console.log(cityName)
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e81f09aeaf7682af4f913672dc0df16c&units=metric`

        let data=await fetch(url)
        let res=await data.json()
        console.log(res)
        var tempF=(res.main.temp*9/5)+32
        tempF=tempF.toFixed(2)
        var feelsF=(res.main.feels_like*9/5)+32
        feelsF=feelsF.toFixed(2)
    weatherContainer.innerHTML=`
    
    <div class="card mb-3 text-start" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://cdn3.vectorstock.com/i/1000x1000/10/87/weather-forecast-vector-11181087.jpg" class="img-fluid rounded-start" alt="Generic Weather Image">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title text-center mb-2">${res.name} Weather Details</h5>
                  <p class="card-text p-0 mb-1">Temperature: ${res.main.temp}°C / ${tempF}°F</p>
                  <p class="card-text p-0 mb-1">Feels Like: ${res.main.feels_like}°C / ${feelsF}°F</p>
                  <p class="card-text p-0 mb-1">Humidity: ${res.main.humidity}%</p>
                  <p class="card-text p-0 mb-1">Description: ${res.weather[0].description}</p>
                </div>
              </div>
            </div>
          </div> 

          `
    }
    catch(err){
        weatherContainer.innerHTML="Not Available"
        weatherContainer.style.textAlign="center"
        alert("Not Available")
        console.log("Error Found")
    }
}
