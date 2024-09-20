// alert('okay');

// getting button element through getelementbyid
const button = document.getElementById("search-button");
const input = document.getElementById("city-input");


const cityname = document.getElementById('city-name');
const citytime = document.getElementById('city-time');
const citytemp = document.getElementById('city-temp');
const cityhumidity = document.getElementById('city-humidity');

const weatherimg = document.getElementById('weather-img');

const btn = document.getElementById("myButton");


async function getdata(cityname){
    const promise = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=8fe6dbbe334d4ebb84773811241909&q=${cityname}&aqi=yes`
    );
    return await promise.json();
}


// for location of user to show weather-------------------------------

async function getdata1(lat,long){
    const promise = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=8fe6dbbe334d4ebb84773811241909&q=${lat},${long}&aqi=yes`
    );
    return await promise.json();
}

async function gotlocation(position){
    const result = await getdata1(
     position.coords.latitude, 
     position.coords.longitude 
 );
    console.log(result);

    // console.log(result);
    cityname.innerText =`Location : ${result.location.name}, ${result.location.region} - ${result.location.country}`;
    citytime.innerText = `LocalTime : ${result.location.localtime}`;
    citytemp.innerText = `Temperature : ${result.current.temp_c}`;
    cityhumidity.innerText = `Humidity : ${result.current.humidity}`;

     // Update the weather image
     weatherimg.src = `https:${result.current.condition.icon}`; // Full URL for the weather icon
     weatherimg.alt = result.current.condition.text; // Set alt text based on weather condition
   
 }
 
 function failedToGet(){
     console.log("There was some issue");
 }


btn.addEventListener('click', async () => {
    navigator.geolocation.getCurrentPosition( gotlocation, failedToGet )
});

//-----------------------------------------------------------------


button.addEventListener('click', async () => {
    const value = input.value;
    const result = await getdata(value);
    // console.log(result);
    cityname.innerText =`Location : ${result.location.name}, ${result.location.region} - ${result.location.country}`;
    citytime.innerText = `LocalTime : ${result.location.localtime}`;
    citytemp.innerText = `Temperature : ${result.current.temp_c}`;
    cityhumidity.innerText = `Humidity : ${result.current.humidity}`;

     // Update the weather image
     weatherimg.src = `https:${result.current.condition.icon}`; // Full URL for the weather icon
     weatherimg.alt = result.current.condition.text; // Set alt text based on weather condition
});


// 8fe6dbbe334d4ebb84773811241909

// http://api.weatherapi.com/v1/current.json?key=8fe6dbbe334d4ebb84773811241909&q=London&aqi=yes

