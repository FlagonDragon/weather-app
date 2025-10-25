import { currentScale, convertToCelsius, changeScale } from "./changeScale";

const display = document.querySelector('.display');

let nameDiv = document.createElement('div');
let tempDiv = document.createElement('div');
let condDiv = document.createElement('div');

display.appendChild(nameDiv);
display.appendChild(tempDiv);
display.appendChild(condDiv);

let tempNum;

function displayData(address, temp, conditions) {

    nameDiv.textContent = address;

    if (currentScale == 'fahrenheit') {

        tempDiv.textContent = `Temperature: ${temp} °F`;

    } else {

        tempDiv.textContent = `Temperature: ${convertToCelsius(temp)} °C`;

    }

    condDiv.textContent = `Conditions: ${conditions}`;

    tempNum = (tempDiv.textContent.replace(/[^0-9]/g, ''))/10;

};

function displayChange() {

    console.log(currentScale);

    console.log('tempNum: '+tempNum);

    let newTempNum = changeScale(tempNum);

    tempNum = newTempNum;

    console.log('newTempNum: '+newTempNum);

    console.log(currentScale);

    if (currentScale == 'fahrenheit') {

        tempDiv.textContent = `Temperature: ${tempNum} °F`;

    } else {

        tempDiv.textContent = `Temperature: ${(tempNum)} °C`;

    }

};

export {tempDiv, displayData, displayChange}