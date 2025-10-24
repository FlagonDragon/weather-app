const display = document.querySelector('.display');

let nameDiv = document.createElement('div');
let tempDiv = document.createElement('div');
let condDiv = document.createElement('div');

display.appendChild(nameDiv);
display.appendChild(tempDiv);
display.appendChild(condDiv);

function displayData(address, temp, conditions) {

    nameDiv.textContent = address;
    tempDiv.textContent = `Temperature: ${temp}`;
    condDiv.textContent = `Conditions: ${conditions}`;

};

export {displayData}