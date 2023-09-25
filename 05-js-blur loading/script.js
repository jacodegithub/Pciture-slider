const img = document.querySelector('.img')
const loadText = document.querySelector('.loading-text')

let load = 0;

let int = setInterval(blurring, 10)

function blurring() {
    load++;

    if(load > 99) {
        clearInterval(int)
    }

    loadText.innerHTML = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    img.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    console.log(load)
}


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}