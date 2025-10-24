import { processData } from "./processData";
import { displayData } from "./displayData";
import { capitalizeSentence } from "./capitalize";

const searchBar = document.querySelector('.searchBar');

async function searchCity() {

    let currentCity = await processData(capitalizeSentence(searchBar.value));
    
    console.log(currentCity);

    displayData(currentCity.address, currentCity.temp, currentCity.conditions);

    searchBar.value = '';

};

function addSearchListener() {

    searchBar.addEventListener('keydown', (e) => {

        if (e.key == 'Enter') {

            searchCity();
            
        };

    });

};

export default addSearchListener