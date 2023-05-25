//Dont read below, its secret
const weatherAPIKey = 'a8aa6a7bf2f7e0cd31f9c1cce752f174';
const mainApiUrl = 'https://api.openweathermap.org/data/2.5/weather?'
const keyParam = `&appid=${weatherAPIKey}`;
const locationParam = 'q=Lancieux,fr'
const url = `${mainApiUrl}${locationParam}${keyParam}&units=metric`

console.log(url);
