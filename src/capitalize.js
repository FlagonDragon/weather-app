function capitalizeWord(string) {

    let splitString = string.split('')

    let newString = splitString.slice(1)

    newString.unshift(splitString[0].toUpperCase())

    // console.log(newString.join(''));
    
    return newString.join('');

};

function capitalizeSentence(string) {

    let searchArray = string.split(' ');

    let newArray = searchArray.map(capitalizeWord);

    // console.log(newArray.join(' '));
    
    return newArray.join(' ');

};

export {capitalizeWord, capitalizeSentence};