document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'fire',
            img: 'images/fire.png'
        },
        {
            name: 'jeep',
            img: 'images/jeep.png'
        },
        {
            name: 'map',
            img: 'images/map.png'
        },
        {
            name: 'pattern',
            img: 'images/pattern.png'
        },
        {
            name: 'rocket',
            img: 'images/rocket.png'
        },
        {
            name: 'watch',
            img: 'images/watch.png'
        },
        {
            name: 'fire',
            img: 'images/fire.png'
        },
        {
            name: 'jeep',
            img: 'images/jeep.png'
        },
        {
            name: 'map',
            img: 'images/map.png'
        },
        {
            name: 'pattern',
            img: 'images/pattern.png'
        },
        {
            name: 'rocket',
            img: 'images/rocket.png'
        },
        {
            name: 'watch',
            img: 'images/watch.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const statusDisplay = document.querySelector('#status')
    const resultDisplay = document.querySelector('#result')
    const missesDisplay = document.querySelector('#misses')
    var cardsChosen = []
    var cardsChosenID = []
    var cardsWon = []
    var misses = 0

    //create your board
    function createBoard() {
        statusDisplay.textContent = 'Memory Game'
        for(let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/face.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneID = cardsChosenID[0]
        const optionTwoID = cardsChosenID[1]

        if(optionOneID == optionTwoID) {
            misses++
            cards[optionOneID].setAttribute('src', 'images/face.png')
            cards[optionTwoID].setAttribute('src', 'images/face.png')
            missesDisplay.textContent = misses.toString()
            alert('You have clicked the same image!')
        } else if(cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneID].setAttribute('src', 'images/blank.png')
            cards[optionTwoID].setAttribute('src', 'images/blank.png')
            cards[optionOneID].removeEventListener('click', flipCard)
            cards[optionTwoID].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)  
        } else {
            misses++
            cards[optionOneID].setAttribute('src', 'images/face.png')
            cards[optionTwoID].setAttribute('src', 'images/face.png')
            missesDisplay.textContent = misses.toString()
            alert('Sorry, try again.')
        }
        cardsChosen = []
        cardsChosenID = []
        resultDisplay.textContent = ' ' + cardsWon.length
        if(cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You have matched all the cards.'
        }
    }

    //flip your card
    function flipCard() {
        var cardID = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardID].name)
        cardsChosenID.push(cardID)
        this.setAttribute('src', cardArray[cardID].img)
        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})