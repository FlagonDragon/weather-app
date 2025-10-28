import { processData } from "./processData";
import { tempDiv, displayData, displayChange } from "./displayData";
import { capitalizeSentence } from "./capitalize";

const searchBar = document.querySelector('.searchBar');

async function searchCity() {

    try {

    let currentCity = await processData(capitalizeSentence(searchBar.value));
    
    console.log(currentCity);

    displayData(currentCity.address, currentCity.temp, currentCity.conditions, currentCity.icon);

    searchBar.value = '';

    return currentCity

    } catch (error) {

        console.log(error);
        
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