

const convertToCelsius = function(fahrenheit) {

let celsius = 0;

celsius = (fahrenheit - 32) * 5/9

    if (celsius === Math.floor(celsius)) {
        console.log('celsius: '+celsius);
        
        return celsius;
    } else {
        console.log('celsius: '+celsius);
        
        return +celsius;
    }

};

const convertToFahrenheit = function(celsius) {

let fahrenheit = 0;

fahrenheit = celsius * (9/5) + 32;

    if (fahrenheit === Math.floor(fahrenheit)) {
        console.log('fahrenheit: '+fahrenheit);

        return fahrenheit;
    } else {
        console.log('fahrenheit: '+fahrenheit);

        return +fahrenheit;
    }
    
};

let currentScale = 'fahrenheit';

function changeScale(num) {

    if (currentScale == 'fahrenheit') {

        currentScale = 'celsius';

        return convertToCelsius(num);
    
    } else {

        currentScale = 'fahrenheit';

        return convertToFahrenheit(num);
    }

};

export {currentScale, convertToCelsius, changeScale}