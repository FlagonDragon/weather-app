import { currentScale, convertToCelsius, changeScale } from "./changeScale";

const container = document.querySelector('.container');

let nameDiv = document.createElement('div');
let tempDiv = document.createElement('div');
let condDiv = document.createElement('div');
let imgEl = document.createElement('img');
imgEl.style.height = '80px'

container.appendChild(nameDiv);
container.appendChild(tempDiv);
container.appendChild(condDiv);
container.appendChild(imgEl);

let tempObj = {num: ''};

async function displayData(address, temp, conditions, icon) {

    nameDiv.textContent = address;

    if (currentScale == 'fahrenheit') {

        tempDiv.textContent = `Temperature: ${temp} °F`;

        tempObj.num = (temp);

    } else {

        tempDiv.textContent = `Temperature: ${Math.round(convertToCelsius(temp)*10)/10} °C`;

        tempObj.num = (convertToCelsius(temp));

    }

    condDiv.textContent = `Conditions: ${conditions}`;

    console.log(tempObj.num);

    let mySrc = await import(`./imgModules/${icon}.js`);
    imgEl.src = mySrc.img;

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

export {container, tempDiv, displayData, displayChange}