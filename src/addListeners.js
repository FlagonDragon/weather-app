import { processData } from "./processData";
import { tempDiv, displayData, displayChange } from "./displayData";
import { capitalizeSentence } from "./capitalize";

const searchBar = document.querySelector('.searchBar');

async function searchCity() {

    let currentCity = await processData(capitalizeSentence(searchBar.value));
    
    console.log(currentCity);

    displayData(currentCity.address, currentCity.temp, currentCity.conditions);

    searchBar.value = '';

    return currentCity

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