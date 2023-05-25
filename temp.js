//Dont read below, its secret
const weatherAPIKey = 'a8aa6a7bf2f7e0cd31f9c1cce752f174';
const mainApiUrl = 'https://api.openweathermap.org/data/2.5/forecast?'
const keyParam = `&appid=${weatherAPIKey}`;
const excludeParam = '&exclude=minutely,hourly,alerts';
const locationParam = 'lat=48.6108&lon=-2.0949';
const unitParam = '&units=metric';
const countParam = '&cnt=5'
const url = `${mainApiUrl}${locationParam}${countParam}${keyParam}${unitParam}`

//testing
console.log(url);


// fetch weather data from API
async function getWeather() {

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const weatherData = await response.json();
        //console.log(weatherData.list);
        return weatherData.list;

    } catch (error) {
        console.error(`Failed to fetch the weather data: ${error}`);
    }
};

// create object to store weather data
let todayWeather = {};

// store return of promise in the obj above
async function storeDataInObj() {
    todayWeather.data = await getWeather();
};  
storeDataInObj();

console.log(todayWeather);

