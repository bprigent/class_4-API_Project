//creating the API url to fetch data
const weatherAPIKey = 'a8aa6a7bf2f7e0cd31f9c1cce752f174';
const mainApiUrl = 'https://api.openweathermap.org/data/2.5/forecast?'
const keyParam = `&appid=${weatherAPIKey}`;
const excludeParam = '&exclude=minutely,hourly,alerts';
const locationParam = 'lat=48.6108&lon=-2.0949';
const unitParam = '&units=metric';
const countParam = '&cnt=5'
const url = `${mainApiUrl}${locationParam}${countParam}${keyParam}${unitParam}`


//create weatherData objetc
let weatherData;

// fetch weather data from API with async function then add it to object
async function fetchWeatherData() {

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        weatherData = data;

    } catch (error) {
        console.error(`Failed to fetch the weather data: ${error}`);
    }

};



//use weather data to add to HTML
function useWeatherData() {

    // Create temeratures
    let temp_today =  weatherData.list[0].main.temp;
    let temp_plus1 =  weatherData.list[1].main.temp;
    let temp_plus2 =  weatherData.list[2].main.temp;
    let temp_plus3 =  weatherData.list[3].main.temp;
    let temp_plus4 =  weatherData.list[4].main.temp;

    // add temeratures to html
    document.getElementById("temp_today").innerText = `${temp_today} °C`;
    document.getElementById("temp_plus1").innerText = `${temp_plus1} °C`;
    document.getElementById("temp_plus2").innerText = `${temp_plus2} °C`;
    document.getElementById("temp_plus3").innerText = `${temp_plus3} °C`;
    document.getElementById("temp_plus4").innerText = `${temp_plus4} °C`;
    
}


// get the data from API and the use that data inside 'useWeatherData'
fetchWeatherData().then(useWeatherData);
