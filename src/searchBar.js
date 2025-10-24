import { processData } from "./processData";
import { displayName, displayTemp } from "./displayData";
import { capitalizeSentence } from "./capitalize";

const searchBar = document.querySelector('.searchBar');

async function searchCity() {

    let myCity = capitalizeSentence(searchBar.value);

    console.log('myCity is: '+ myCity);

    let currentCity = await processData(myCity);
    
    console.log(currentCity);

    displayName(currentCity.address);

    displayTemp(currentCity.temp);

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