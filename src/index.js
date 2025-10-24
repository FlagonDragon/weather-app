import './styles.css';

console.log('Yeah we workin');

const searchBar = document.querySelector('.searchBar');
const display = document.querySelector('.display');

let weatherData;

async function logWeather(city) {

    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=2X7JKFSQFBAXMQKYQ5R64PRKS`)

    weatherData = await response.json();

    return weatherData;

};

function processData(city) {

    logWeather(city).then((result) => {

        console.log(result);

        console.log(result.currentConditions.conditions);

        console.log(result.days[0].temp);

    });
    
}

function capitalizeWord(string) {

    let splitString = string.split('')

    let newString = splitString.slice(1)

    newString.unshift(splitString[0].toUpperCase())

    console.log(newString.join(''));
    
    return newString.join('');

};

function capitalizeSentence(string) {

    let searchArray = string.split(' ');

    let newArray = searchArray.map(capitalizeWord);

    console.log(newArray.join(' '));
    
    return newArray.join(' ');

}

capitalizeWord('this')
capitalizeSentence('new york');

searchBar.addEventListener('keydown', (e) => {

    if (e.key == 'Enter') {

        console.log(searchBar.value);

        processData(searchBar.value);

        displayName(searchBar.value);

        displayTemp('25 C')

        searchBar.value = '';
        
    };

});

// processData('paris');

function displayTemp(temp) {

    let tempDiv = document.createElement('div');

    tempDiv.textContent = `Temperature ${temp}`

    display.appendChild(tempDiv);

};

function displayName(city) {

    let nameDiv = document.createElement('div');
    
    let cityName = capitalizeSentence(city);

    nameDiv.textContent = `${cityName}`

    display.appendChild(nameDiv);

};