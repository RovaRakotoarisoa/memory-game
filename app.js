const cardArray = [
	{
		name: 'basketball',
		img: 'img/basketball.png',
	},
	{
		name: 'deck',
		img: 'img/deck.png',
	},
	{
		name: 'pizza',
		img: 'img/pizza.png',
	},
	{
		name: 'thor',
		img: 'img/thor.png',
	},
	{
		name: 'game',
		img: 'img/game.png',
	},
	{
		name: 'nintendo-switch',
		img: 'img/nintendo-switch.png',
	},
	{
		name: 'basketball',
		img: 'img/basketball.png',
	},
	{
		name: 'deck',
		img: 'img/deck.png',
	},
	{
		name: 'pizza',
		img: 'img/pizza.png',
	},
	{
		name: 'thor',
		img: 'img/thor.png',
	},
	{
		name: 'game',
		img: 'img/game.png',
	},
	{
		name: 'nintendo-switch',
		img: 'img/nintendo-switch.png',
	},

]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay =  document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
	for (let i = 0; i < cardArray.length; i++) {
		const card = document.createElement('img');
		card.setAttribute('src', 'img/background.jpg');
		card.setAttribute('data-id', i);

		card.addEventListener('click',flipCard)

		gridDisplay.appendChild(card);

	}
}

createBoard();

function checkMatch(){
	const cards = document.querySelectorAll('#grid img');
	const optionOneId = cardsChosenIds[0];
	const optionTwoId = cardsChosenIds[1];

	if (optionOneId == optionTwoId) {
		cards[optionOneId].setAttribute('src', 'img/background.jpg');
		cards[optionTwoId].setAttribute('src', 'img/background.jpg');
		alert('You have clicked the same image');
	}
	if(cardsChosen[0] == cardsChosen[1]){
		alert('You found a match!')
		cards[optionOneId].setAttribute('src', 'img/cool-background.png');
		cards[optionTwoId].setAttribute('src', 'img/cool-background.png');
		cards[optionOneId].removeEventListener('click', flipCard);
		cards[optionTwoId].removeEventListener('click', flipCard);
		cardsWon.push(cardsChosen);
	}else{
		cards[optionOneId].setAttribute('src', 'img/background.jpg');
		cards[optionTwoId].setAttribute('src', 'img/background.jpg');
		alert('Sorry try again!');
	}
	resultDisplay.innerText = cardsWon.length;
	cardsChosen = [];
	cardsChosenIds = [];

	if (cardsWon.length == cardArray.length / 2) {
		resultDisplay.innerText = 'Congratulations you found them all!';
	}
}


function flipCard() {
	const cardId = this.getAttribute('data-id');

	cardsChosen.push(cardArray[cardId].name);
	cardsChosenIds.push(cardId);
	this.setAttribute('src', cardArray[cardId].img);
	if (cardsChosen.length === 2 ) {
		setTimeout(checkMatch, 500);
	}
}




















