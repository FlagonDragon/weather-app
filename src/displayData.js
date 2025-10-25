import { currentScale, convertToCelsius, changeScale } from "./changeScale";

const display = document.querySelector('.display');

let nameDiv = document.createElement('div');
let tempDiv = document.createElement('div');
let condDiv = document.createElement('div');

display.appendChild(nameDiv);
display.appendChild(tempDiv);
display.appendChild(condDiv);

let tempObj = {num: ''};

function displayData(address, temp, conditions) {

    nameDiv.textContent = address;

    if (currentScale == 'fahrenheit') {

        tempDiv.textContent = `Temperature: ${temp} °F`;

    } else {

        tempDiv.textContent = `Temperature: ${convertToCelsius(temp)} °C`;

    }

    condDiv.textContent = `Conditions: ${conditions}`;

    tempObj.num = (tempDiv.textContent.replace(/[^0-9]/g, ''))/10;

};

function displayChange() {

    console.log('tempObj.num: '+tempObj.num);

    console.log('currentScale: '+currentScale);

    tempObj.num = changeScale(tempObj.num);

    console.log('currentScale: '+currentScale);

    console.log('new tempObj.num: '+tempObj.num);


    if (currentScale == 'fahrenheit') {

        tempDiv.textContent = `Temperature: ${Math.round(tempObj.num*10)/10} °F`;

    } else {

        tempDiv.textContent = `Temperature: ${Math.round(tempObj.num*10)/10} °C`;

    }

};

export {tempDiv, displayData, displayChange}