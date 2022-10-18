const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })
    if(currentTime > 0) {
        let randomPosition = square[Math.floor(Math.random() * 9)]
        randomPosition.classList.add('mole')
        hitPosition = randomPosition.id
    }
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition) {
            id.id = null
            result++
            score.textContent = result
            id.classList.remove('mole')
        }
    })
})


function moveMole() {
    let timerID = null
    timerID = setInterval(randomSquare, 1000)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime === 0) {
        clearInterval(timerID)
        alert('Game Over! Final Score: ' + result)
    }
}

let timerID = setInterval(countDown, 1000)
