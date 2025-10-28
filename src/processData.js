let weatherData;
let currentCity = {address: '', temp: '', conditions: '', icon: ''}

async function logWeather(city) {

    try {

    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=2X7JKFSQFBAXMQKYQ5R64PRKS`)

    weatherData = await response.json();

    return weatherData;

    } catch {

        console.log(error);

    }

};

async function processData(city) {

    try {

    let result = await logWeather(city)
    
    console.log(result);

    currentCity.address = result.address;

    currentCity.temp = result.days[0].temp;

    currentCity.conditions = result.currentConditions.conditions;

    currentCity.icon = result.currentConditions.icon;

    return currentCity;

    } catch {

        console.log(error);

    }
    
};

export {processData}