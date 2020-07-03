let cardsImage = ["/images/cards/2C.jpg",
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

let cardsValue = [2,3,4,5,6,7,8,9,10,10,10,10,11,
    2,3,4,5,6,7,8,9,10,10,10,10,11,
    2,3,4,5,6,7,8,9,10,10,10,10,11,
    2,3,4,5,6,7,8,9,10,10,10,10,11];

let bet_div = document.getElementById("bet");
let playerTwo = document.getElementById("playerTwo");
let playerThree = document.getElementById("playerThree");
let playerFour = document.getElementById("playerFour");
let playerFive = document.getElementById("playerFive");
let playerSix = document.getElementById("playerSix");
const hit_button = document.getElementById("hit");
const check_button = document.getElementById("check");
const double_button = document.getElementById("double");
let betAmmount = 20;
const arrayLength = 20;

// select 20 random values

hit_button.onclick = function(){Hit()};
check_button.onclick = function(){Check()};
double_button.onclick = function(){Double()};


function Main(){

    numberselected =  Uint8Array.from(Array(arrayLength)).map( x => (Math.random() * 51));
    SelectCards(numberselected);
}

// Set values to the img src

function SelectCards(){

    dealerOne = numberselected[0]
    dealerTwo = numberselected[1]
    dealerThree = numberselected[2]
    dealerFour = numberselected[3]
    dealerFive = numberselected[4]
    dealerSix = numberselected[5]
    dealerSeven = numberselected[6]
    dealerEight = numberselected[7]
    dealerNine = numberselected[8]
    dealerTen = numberselected[9]

    playerOne = numberselected[10]
    playerTwo = numberselected[11]
    playerThree = numberselected[12]
    playerFour = numberselected[13]
    playerFive = numberselected[14]
    playerSix = numberselected[15]
    playerSeven = numberselected[16]
    playerEight = numberselected[17]
    playerNine = numberselected[18]
    playerTen = numberselected[19]

    document.getElementById("dealerTwo").src = cardsImage[dealerTwo];
    document.getElementById("playerOne").src = cardsImage[playerOne];
    document.getElementById("playerTwo").src = cardsImage[playerTwo];

    FirstCheck(playerOne, playerTwo, dealerOne, dealerTwo);
}

function FirstCheck(){

    playerOneValue = cardsValue[playerOne];
    playerTwoValue = cardsValue[playerTwo];
    dealerOneValue = cardsValue[dealerOne];
    dealerTwoValue = cardsValue[dealerTwo];

    if (dealerOneValue + dealerTwoValue == 21){
        DealerBlackjack();
    }

    if (playerOneValue + playerTwoValue == 21){
        PlayerBlackjack();
    }
   
}

function Hit(){

    document.getElementById("playerThree").src = cardsImage[playerThree];
}



// Increase and decrese bets

function increase(){

    betAmmount++;
    bet_div.innerHTML = betAmmount;    
}

function decrease(){

    betAmmount--;
    bet_div.innerHTML = betAmmount;
}


function DealerBlackjack(){

    document.getElementById("message").innerHTML = "Dealer has blackjack! Dealer wins"
    hit_button.disabled = true;
    check_button.disabled = true;
    double_button.disabled = true;
}

function PlayerBlackjack(){

    document.getElementById("message").innerHTML = "Blackjack! You Win"
    hit_button.disabled = true;
    check_button.disabled = true;
    double_button.disabled = true;
}

// function winMessageBust(){
//     document.getElementById("message").innerHTML = "Dealer Has Bust! You Win"
//     hit_button.disabled = true;
//     check_button.disabled = true;
//     double_button.disabled = true;
// }





// function loseMessageDealerHigher(){
//     document.getElementById("message").innerHTML = "Dealer has   Dealer Wins"
//     hit_button.disabled = true;
//     check_button.disabled = true;
//     double_button.disabled = true;
// }

// function loseMessageBust(){
//     document.getElementById("message").innerHTML = "You Bust! Dealer Wins"
//     hit_button.disabled = true;
//     check_button.disabled = true;
//     double_button.disabled = true;
// }

// function selectDealerCards()
// {
//     let cardDealerOne = cardSellected;
//     let cardDealerTwo = cardSellected;
//     let cardDealerThree = cardSellected;
//     let cardDealerFour = cardSellected;
//     console.log(cardDealerFour, cardDealerOne, cardDealerTwo, cardDealerThree)
// }

//     let dealerCardValueOne = cardsValue[rndCardDealerOne];
//     let dealerCardValueTwo = cardsValue[rndCardDealerTwo];
//     let dealerCardValueThree = cardsValue[rndCardDealerThree];
//     let dealerCardValueFour = cardsValue[rndCardDealerFour];

//     let rndCardPlayerOne = Math.floor(Math.random() * 51 );
//     let rndCardPlayerTwo = Math.floor(Math.random() * 51 );
//     let rndCardPlayerThree = Math.floor(Math.random() * 51 );
//     let rndCardPlayerFour = Math.floor(Math.random() * 51 );
//     let rndCardPlayerFive = Math.floor(Math.random() * 51 );
//     let rndCardPlayerSix = Math.floor(Math.random() * 51 );

//     let cardValueOne = cardsValue[rndCardPlayerOne];
//     let cardValueTwo = cardsValue[rndCardPlayerTwo];     

//     document.getElementById("dealer").src = cards[rndCardDealerTwo];

//     check_button.addEventListener(`click`, function(){
        
//         check(rndCardDealerOne, rndCardDealerThree, rndCardDealerFour, dealerCardValueOne, dealerCardValueTwo, dealerCardValueThree, dealerCardValueFour, cardValueOne, cardValueTwo)});

//     document.getElementById("playerOne").src = cards[rndCardPlayerOne];
//     document.getElementById("playerTwo").src = cards[rndCardPlayerTwo];

//     hit_button.addEventListener(`click`, function(){

//         hitOne(rndCardPlayerOne, rndCardPlayerTwo, rndCardPlayerThree, rndCardPlayerFour,   rndCardPlayerFive, rndCardPlayerSix, cardValueOne, cardValueTwo)});

//     if (cardValueOne + cardValueTwo === 21){winMessage()};
// }

// function hitOne(rndCardPlayerOne, rndCardPlayerTwo, rndCardPlayerThree, rndCardPlayerFour,   rndCardPlayerFive, rndCardPlayerSix, cardValueOne, cardValueTwo){

//     let cardValueThree = cardsValue[rndCardPlayerThree];

//     document.getElementById("playerThree").src = cards[rndCardPlayerThree]
//     hit_button.addEventListener(`click`, function(){

//         hitTwo(rndCardPlayerOne, rndCardPlayerTwo, rndCardPlayerThree, rndCardPlayerFour,   rndCardPlayerFive, rndCardPlayerSix, cardValueOne, cardValueTwo, cardValueThree)
//     })

//     if (cardValueOne + cardValueTwo + cardValueThree > 21) {loseMessageBust()}
// };

// function hitTwo(rndCardPlayerOne, rndCardPlayerTwo, rndCardPlayerThree, rndCardPlayerFour,   rndCardPlayerFive, rndCardPlayerSix, cardValueOne, cardValueTwo, cardValueThree){

//     let cardValueFour = cardsValue[rndCardPlayerFour];

//     document.getElementById("playerFour").src = cards[rndCardPlayerFour];
//     hit_button.addEventListener(`click`, function(){

//         hitThree(rndCardPlayerOne, rndCardPlayerTwo, rndCardPlayerThree, rndCardPlayerFour,   rndCardPlayerFive, rndCardPlayerSix, cardValueOne, cardValueTwo, cardValueThree, cardValueFour)
//     })

//     if (cardValueOne + cardValueTwo + cardValueThree + cardValueFour > 21) {loseMessageBust()}
// };

// function hitThree(rndCardPlayerOne, rndCardPlayerTwo, rndCardPlayerThree, rndCardPlayerFour,   rndCardPlayerFive, rndCardPlayerSix, cardValueOne, cardValueTwo, cardValueThree, cardValueFour){

//     let cardValueFive = cardsValue[rndCardPlayerFive];
   
//     document.getElementById("playerFive").src = cards[rndCardPlayerFive]
//     hit_button.addEventListener(`click`, function(){

//         hitFour(rndCardPlayerOne, rndCardPlayerTwo, rndCardPlayerThree, rndCardPlayerFour,   rndCardPlayerFive, rndCardPlayerSix, cardValueOne, cardValueTwo, cardValueThree, cardValueFour, cardValueFive)

//     })

//     if (cardValueOne + cardValueTwo + cardValueThree + cardValueFour + cardValueFive > 21) {loseMessageBust()}
// };

// function hitFour(rndCardPlayerOne, rndCardPlayerTwo, rndCardPlayerThree, rndCardPlayerFour, rndCardPlayerFive, rndCardPlayerSix, cardValueOne, cardValueTwo, cardValueThree, cardValueFour, cardValueFive){

//     let cardValueSix = cardsValue[rndCardPlayerSix];

//     document.getElementById("playerSix").src = cards[rndCardPlayerSix]

//     if (cardValueOne + cardValueTwo + cardValueThree + cardValueFour + cardValueFive + cardValueSix > 21) {loseMessageBust()}

// };

// function check(rndCardDealerOne, rndCardDealerThree, rndCardDealerFour, dealerCardValueOne, dealerCardValueTwo, dealerCardValueThree, dealerCardValueFour, cardValueOne, cardValueTwo, cardValueThree, cardValueFour, cardValueFive, cardValueSix){

//     document.getElementById("back").src = cards[rndCardDealerOne];
//     document.getElementById("back").classList.add("backAfter");

//     let playerValue = cardValueOne + cardValueTwo + cardValueThree + cardValueFour + cardValueFive + cardValueSix;

//     console.log(playerValue);

//     if (dealerCardValueFour + dealerCardValueTwo > playerValue ) {loseMessageDealerHigher()}   

//     if (dealerCardValueOne + dealerCardValueTwo <= 17) 
//     {checkTwo(rndCardDealerOne, rndCardDealerThree, rndCardDealerFour, dealerCardValueOne, dealerCardValueTwo, dealerCardValueThree, dealerCardValueFour, cardValueOne, cardValueTwo, cardValueThree, cardValueFour, cardValueFive, cardValueSix)};

//     if (dealerCardValueOne + dealerCardValueTwo === 21) {loseMessageDealer()};
//     if (dealerCardValueOne + dealerCardValueTwo > 21) {winMessageBust()};    
// }

// function checkTwo(rndCardDealerOne, rndCardDealerThree, rndCardDealerFour, dealerCardValueOne, dealerCardValueTwo, dealerCardValueThree, dealerCardValueFour, cardValueOne, cardValueTwo, cardValueThree, cardValueFour, cardValueFive, cardValueSix){

//     document.getElementById("dealerTwo").src = cards[rndCardDealerThree];

//     if (dealerCardValueFour + dealerCardValueTwo > cardValueOne + cardValueTwo + cardValueThree + cardValueFour + cardValueFive + cardValueSix) {loseMessageDealerHigher()}; 

//     if (dealerCardValueOne + dealerCardValueTwo + dealerCardValueThree < 17) 
    
//     {checkThree(rndCardDealerOne, rndCardDealerThree, rndCardDealerFour, dealerCardValueOne, dealerCardValueTwo, dealerCardValueThree, dealerCardValueFour, cardValueOne, cardValueTwo, cardValueThree, cardValueFour, cardValueFive, cardValueSix)};

//     if (dealerCardValueOne + dealerCardValueTwo + dealerCardValueThree > 21) {winMessageBust()}
// }

// function checkThree(rndCardDealerOne, rndCardDealerThree, rndCardDealerFour, dealerCardValueOne, dealerCardValueTwo, dealerCardValueThree, dealerCardValueFour, cardValueOne, cardValueTwo, cardValueThree, cardValueFour, cardValueFive, cardValueSix){

//     document.getElementById("dealerThree").src = cards[rndCardDealerFour];

//     if (dealerCardValueFour + dealerCardValueTwo > cardValueOne + cardValueTwo + cardValueThree + cardValueFour + cardValueFive + cardValueSix) {loseMessageDealerHigher()}; 

//     if (dealerCardValueOne + dealerCardValueTwo + dealerCardValueThree + dealerCardValueFour > 21) {winMessageBust()}
// }

// function winMessageBust(){
//     document.getElementById("message").innerHTML = "Dealer Has Bust! You Win"
//     hit_button.disabled = true;
//     check_button.disabled = true;
//     double_button.disabled = true;
// }

// function winMessage(){
//     document.getElementById("message").innerHTML = "Blackjack! You Win"
//     hit_button.disabled = true;
//     check_button.disabled = true;
//     double_button.disabled = true;
// }

// function loseMessageDealer(){
//     document.getElementById("message").innerHTML = "Dealer Got Blackjack! Dealer Wins"
//     hit_button.disabled = true;
//     check_button.disabled = true;
//     double_button.disabled = true;
// }

// function loseMessageDealerHigher(){
//     document.getElementById("message").innerHTML = "Dealer has   Dealer Wins"
//     hit_button.disabled = true;
//     check_button.disabled = true;
//     double_button.disabled = true;
// }

// function loseMessageBust(){
//     document.getElementById("message").innerHTML = "You Bust! Dealer Wins"
//     hit_button.disabled = true;
//     check_button.disabled = true;
//     double_button.disabled = true;
// }

Main();