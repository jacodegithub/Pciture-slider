const progress = document.getElementById('progress-line')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

console.log(circles.length)
let currentActive = 1;
let prevActive = currentActive;

next.addEventListener('click', () => {
    currentActive++
    
    if(currentActive > circles.length) {
        currentActive = circles.length;
    }
    prevActive = currentActive;
    console.log(currentActive, prevActive)
    forward()
})

prev.addEventListener('click', () => {
    currentActive--
    
    if(currentActive < circles.length) {
        currentActive = 1;
    }

    backword()
})

function forward() {
    circles.forEach((circle, index) => {
        if(index < currentActive) {
            circle.classList.add('active')
        }
    })

    utilityFunction();
}

function backword() {
    circles.forEach((circle, index) => {
        if(index+1 === prevActive && prevActive !== 1) {
            circle.classList.remove('active')
            prevActive--;
        }
    })

    utilityFunction();
}

function utilityFunction() {
    const actives = document.querySelectorAll('.active')
    
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if(prevActive === 1) {
        prev.disabled = true;
    } else if(currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}