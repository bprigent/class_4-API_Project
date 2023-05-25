//Dont read below, its secret
const weatherAPIKey = 'a8aa6a7bf2f7e0cd31f9c1cce752f174';
const mainApiUrl = 'https://api.openweathermap.org/data/2.5/forecast?'
const keyParam = `&appid=${weatherAPIKey}`;
const excludeParam = '&exclude=minutely,hourly,alerts';
const locationParam = 'lat=48.6094&lon=2.1491';
const unitParam = '&units=metric';
const countParam = '&cnt=5'
const url = `${mainApiUrl}${locationParam}${countParam}${keyParam}${unitParam}`

//testing
console.log(url);



async function getWeatherForDate() {

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.error(`Failed to fetch the weather data: ${error}`);
    }
}

getWeatherForDate();

console.log(weatherData);

