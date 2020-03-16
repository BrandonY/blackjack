let cards = ["/images/cards/2C.jpg",
"/images/cards/3C.jpg",
"/images/cards/4C.jpg",
"/images/cards/5C.jpg",
"/images/cards/6C.jpg",
"/images/cards/7C.jpg",
"/images/cards/8C.jpg",
"/images/cards/9C.jpg",
"/images/cards/10C.jpg",
"/images/cards/JC.jpg",
"/images/cards/QC.jpg",
"/images/cards/KC.jpg",
"/images/cards/AC.jpg",
"/images/cards/2D.jpg",  
"/images/cards/3D.jpg",
"/images/cards/4D.jpg",
"/images/cards/5D.jpg",
"/images/cards/6D.jpg",
"/images/cards/7D.jpg",
"/images/cards/8D.jpg",
"/images/cards/9D.jpg",
"/images/cards/10D.jpg",
"/images/cards/JD.jpg",
"/images/cards/QD.jpg",
"/images/cards/KD.jpg",
"/images/cards/AD.jpg",
"/images/cards/2S.jpg",
"/images/cards/3S.jpg",
"/images/cards/4S.jpg",
"/images/cards/5S.jpg",
"/images/cards/6S.jpg",
"/images/cards/7S.jpg",
"/images/cards/8S.jpg",
"/images/cards/9S.jpg",
"/images/cards/10S.jpg",
"/images/cards/JS.jpg",
"/images/cards/QS.jpg",
"/images/cards/KS.jpg",
"/images/cards/AS.jpg",
"/images/cards/2H.jpg",
"/images/cards/3H.jpg",
"/images/cards/4H.jpg",
"/images/cards/5H.jpg",
"/images/cards/6H.jpg",
"/images/cards/7H.jpg",
"/images/cards/8H.jpg",
"/images/cards/9H.jpg",
"/images/cards/10H.jpg",
"/images/cards/JH.jpg",
"/images/cards/QH.jpg",
"/images/cards/KH.jpg",
"/images/cards/AH.jpg",
];

let cardsValue = [2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11];
let bet_div = document.getElementById("bet");
let playerTwo = document.getElementById("playerTwo");
let playerThree = document.getElementById("playerThree");
let playerFour = document.getElementById("playerFour");
let playerFive = document.getElementById("playerFive");
let playerSix = document.getElementById("playerSix");
let hit_button = document.getElementById("hit");

function increase(){
    betAmmount++;
    bet_div.innerHTML = betAmmount;    
}

function decrease(){
    betAmmount--;
    bet_div.innerHTML = betAmmount;
}

function playerGame(){
    let rndCardPlayerOne = Math.floor(Math.random() * 51 );
    let rndCardPlayerTwo = Math.floor(Math.random() * 51 );
    let rndCardPlayerThree = Math.floor(Math.random() * 51 );
    let rndCardPlayerFour = Math.floor(Math.random() * 51 );
    let rndCardPlayerFive = Math.floor(Math.random() * 51 );
    let rndCardPlayerSix = Math.floor(Math.random() * 51 );

    let cardValueOne = cardsValue[rndCardPlayerOne];
    let cardValueTwo = cardsValue[rndCardPlayerTwo];
    let cardValueThree = cardsValue[rndCardPlayerThree];
    let cardValueFour = cardsValue[rndCardPlayerFour];
    let cardValueFive = cardsValue[rndCardPlayerFive];
    let cardValueSix = cardsValue[rndCardPlayerSix];

    document.getElementById("playerOne").src = cards[rndCardPlayerOne];
    document.getElementById("playerTwo").src = cards[rndCardPlayerTwo];

    hit_button.addEventListener(`click`, function(){

        hitOne(rndCardPlayerOne, rndCardPlayerTwo, rndCardPlayerThree, rndCardPlayerFour,   rndCardPlayerFive, rndCardPlayerSix, cardValueOne, cardValueTwo, cardValueThree,  cardValueThree, cardValueFour, cardValueFive, cardValueSix)});

    if (cardValueOne + cardValueTwo === 21){winMessage()};
}

function hitOne(rndCardPlayerOne, rndCardPlayerTwo, rndCardPlayerThree, rndCardPlayerFour,   rndCardPlayerFive, rndCardPlayerSix, cardValueOne, cardValueTwo, cardValueThree,  cardValueThree, cardValueFour, cardValueFive, cardValueSix){

    document.getElementById("playerThree").src = cards[rndCardPlayerThree]
    hit_button.addEventListener(`click`, function(){

        hitTwo(rndCardPlayerOne, rndCardPlayerTwo, rndCardPlayerThree, rndCardPlayerFour,   rndCardPlayerFive, rndCardPlayerSix, cardValueOne, cardValueTwo, cardValueThree,  cardValueThree, cardValueFour, cardValueFive, cardValueSix)
    })
};

function hitTwo(rndCardPlayerOne, rndCardPlayerTwo, rndCardPlayerThree, rndCardPlayerFour,   rndCardPlayerFive, rndCardPlayerSix, cardValueOne, cardValueTwo, cardValueThree,  cardValueThree, cardValueFour, cardValueFive, cardValueSix){

    document.getElementById("playerFour").src = cards[rndCardPlayerFour];
    hit_button.addEventListener(`click`, function(){

        hitThree(rndCardPlayerOne, rndCardPlayerTwo, rndCardPlayerThree, rndCardPlayerFour,   rndCardPlayerFive, rndCardPlayerSix, cardValueOne, cardValueTwo, cardValueThree,  cardValueThree, cardValueFour, cardValueFive, cardValueSix)
    })
};

function hitThree(rndCardPlayerOne, rndCardPlayerTwo, rndCardPlayerThree, rndCardPlayerFour,   rndCardPlayerFive, rndCardPlayerSix, cardValueOne, cardValueTwo, cardValueThree,  cardValueThree, cardValueFour, cardValueFive, cardValueSix){

    document.getElementById("playerFive").src = cards[rndCardPlayerFive]
    hit_button.addEventListener(`click`, function(){

        hitFour(rndCardPlayerOne, rndCardPlayerTwo, rndCardPlayerThree, rndCardPlayerFour,   rndCardPlayerFive, rndCardPlayerSix, cardValueOne, cardValueTwo, cardValueThree,  cardValueThree, cardValueFour, cardValueFive, cardValueSix)

    })
};

function hitFour(rndCardPlayerOne, rndCardPlayerTwo, rndCardPlayerThree, rndCardPlayerFour, rndCardPlayerFive, rndCardPlayerSix, cardValueOne, cardValueTwo, cardValueThree, cardValueThree, cardValueFour, cardValueFive, cardValueSixOne){

    document.getElementById("playerSix").src = cards[rndCardPlayerSix]
};

function selectCardDealer(){
    let rndCardDealer = Math.floor(Math.random() * 51 );
    document.getElementById("dealer").src = cards[rndCardDealer];
}

function check(){
    let rndCard = Math.floor(Math.random() * 51 );
    document.getElementById("back").src = cards[rndCard];
    document.getElementById("back").classList.add("backAfter");
}

function cardOne(){
    let rndCardOne = Math.floor(Math.random() * 51 );
    document.getElementById("dealerThree").src = cards[rndCardOne];
}
function cardTwo(){
    let rndCardTwo = Math.floor(Math.random() * 51 );
    document.getElementById("dealerTwo").src = cards[rndCardTwo];
}

function bankBallance(){
    let betValue = document.getElementById("bet").value;
    let bet = parseInt(betValue, 100);
}

function winMessage(){
    document.getElementById("message").innerHTML = "Blackjack! You Win"
}

playerGame();
selectCardDealer();
