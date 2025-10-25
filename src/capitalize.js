function capitalizeWord(string) {

    let splitString = string.toLowerCase().split('')

    let newString = splitString.slice(1);

    newString.unshift(splitString[0].toUpperCase());
    
    return newString.join('');

};

function capitalizeSentence(string) {

    let searchArray = string.split(' ');

    let newArray = searchArray.map(capitalizeWord);
    
    return newArray.join(' ');

};

export {capitalizeSentence};