import { processData } from "./processData";
import { container, tempDiv, displayData, displayChange } from "./displayData";
import { capitalizeSentence } from "./capitalize";
import loader from "./loader.gif"

const searchBar = document.querySelector('.searchBar');
const display = document.querySelector('.display');
let buffer = document.createElement('img');
buffer.style.height = '50px'

async function searchCity() {

    try {

    container.style.display = 'none';

    buffer.src = loader;

    display.appendChild(buffer)

    let currentCity = await processData(capitalizeSentence(searchBar.value));

    buffer.remove();

    container.style.display = 'flex'
    
    console.log(currentCity);

    displayData(currentCity.address, currentCity.temp, currentCity.conditions, currentCity.icon);

    searchBar.value = '';

    return currentCity

    } catch (error) {

        console.log(error);

        buffer.remove();

        container.style.display = 'flex'
        
        alert("'"+searchBar.value+"'"+' is not a valid city!');

        searchBar.value = '';

    }

};

function addListeners() {

    searchBar.addEventListener('keydown', (e) => {

        if (e.key == 'Enter') {

            searchCity();
            
        };

    });


    tempDiv.addEventListener('click', (e) => {

        displayChange();

    });

};

export default addListeners