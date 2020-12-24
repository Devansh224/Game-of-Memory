debugger;
document.addEventListener('DOMContentLoaded', () => {

//card options
const cardArray = [
        {
      name: 'css',
      img: 'images/css.png'
    },
    {
      name: 'html',
      img: 'images/html.png'
    },
    {
      name: 'php',
      img: 'images/php.png'
    },
    {
      name: 'sql',
      img: 'images/sql.png'
    },
    {
      name: 'python',
      img: 'images/python.png'
    },
    {
      name: 'js',
      img: 'images/js.png'
    },
    {
      name: 'css',
      img: 'images/css.png'
    },
    {
      name: 'html',
      img: 'images/html.png'
    },
    {
      name: 'php',
      img: 'images/php.png'
    },
    {
      name: 'sql',
      img: 'images/sql.png'
    },
    {
      name: 'python',
      img: 'images/python.png'
    },
    {
      name: 'js',
      img: 'images/js.png'
    }
    ];

cardArray.sort(() => 0.5 - Math.random());
    
const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
var cardsChosen = [];
var cardsChosenId = [];
const cardsWon = [];

//creating game board
function createBoard()  {
    for(let i = 0; i < cardArray.length; i++) {
var card = document.createElement('img');
card.setAttribute('src', 'images/blank.png');
card.setAttribute('data-id', i);
card.addEventListener('click', flipCard);
grid.appendChild(card);
    }
}
//check for matches
function checkForMatch() {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if(optionOneId[0] === optionTwoId[1]) {
        alert('You clicked same image!');
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('Sorry, try again!');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if(cardsWon.length === cardArray.length / 2) {
        resultDisplay.textContent = ' Congratulations! You found them all!';
    }
}
    

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();

})