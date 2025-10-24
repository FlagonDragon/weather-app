const display = document.querySelector('.display');

let nameDiv = document.createElement('div');
display.appendChild(nameDiv);

let tempDiv = document.createElement('div');
display.appendChild(tempDiv);


function displayName(city) {

    console.log(city);

    nameDiv.textContent = city;

};

function displayTemp(temp) {

    console.log(temp);

    tempDiv.textContent = `Temperature: ${temp}`;

};

export {displayName, displayTemp}