let weatherData;
let currentCity = {address: '', temp: '', conditions: ''}

async function logWeather(city) {

    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=2X7JKFSQFBAXMQKYQ5R64PRKS`)

    weatherData = await response.json();

    return weatherData;

};

async function processData(city) {

    let result = await logWeather(city)
    
    console.log(result);

    currentCity.address = result.address;

    currentCity.conditions = result.currentConditions.conditions;

    currentCity.temp = result.days[0].temp;

    return currentCity;
    
};

export {processData}