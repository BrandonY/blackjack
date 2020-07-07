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

let playerOneValue = 0;
let playerTwoValue = 0;
let playerThreeValue = 0;
let playerFourValue = 0;
let playerFiveValue = 0;
let playerSixValue = 0;
let sumPlayer = 0;

let dealerOneValue = 0;
let dealerTwoValue = 0;
let dealerThreeValue = 0;
let dealerFourValue = 0;
let dealerFiveValue = 0;
let dealerSixValue = 0;
let sumDealer = 0;

const hit_button = document.getElementById("hit");
const check_button = document.getElementById("check");
const double_button = document.getElementById("double");
let message_div = document.getElementById("message");
let bank_div = document.getElementById("bank");
let bet_div = document.getElementById("bet");
let bet_up = document.getElementById("up");
let bet_down = document.getElementById("down");
let deal_button = document.getElementById("dealButton");
let restart_button = document.getElementById("restartButton");


let player_one = document.getElementById("playerOne");
let player_two = document.getElementById("playerTwo");
let player_three = document.getElementById("playerThree");
let player_four = document.getElementById("playerFour");
let player_five = document.getElementById("playerFive");
let player_six = document.getElementById("playerSix");

let dealer_back = document.getElementById("back");
let dealer_two = document.getElementById("dealerTwo");
let dealer_three = document.getElementById("dealerThree");
let dealer_four = document.getElementById("dealerFour");
let dealer_five = document.getElementById("dealerFive");
let dealer_six = document.getElementById("dealerSix");


let bankBallance = 180;
let hitCounter = 0;
let betAmmount = 20;
const arrayLength = 20;

let hasChecked = false;
let checkOne = false;
let checkTwo = false;
let checkThree = false;
let playerBust = false;
let dealerBust = false;


check_button.onclick = function(){DealerShowCard()};
double_button.onclick = function(){Double()};

// select 20 random values

hit_button.addEventListener('click', function (event) {

    target = event.target;
    switch(hitCounter){
        case 0:
            HitOne();
            break;
        case 1:
            HitTwo();
            break;
        case 2:
            HitThree();
            break;
        case 3:
            HitFour();
            break;
    }   
})

function Main(){

    bet_up.style.visibility = "visible";
    bet_down.style.visibility = "visible";
    bet_div.style.visibility = "visible";
    hit_button.style.visibility = "visible";
    check_button.style.visibility = "visible";
    double_button.style.visibility = "visible";
    deal_button.style.visibility = "hidden";
    message_div.style.visibility = "hidden";
    restart_button.style.visibility = "hidden";

    numberselected =  Uint8Array.from(Array(arrayLength)).map( x => (Math.random() * 51));
  
    bank_div.innerHTML = "Bank £" + bankBallance;
    bet_div.innerHTML = betAmmount;

    SelectCards();
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

    player_one.src = cardsImage[playerOne];
    player_two.src = cardsImage[playerTwo];
    dealer_two.src = cardsImage[dealerTwo];

    InitialCheck();
}

// Main logic

function InitialCheck(){

    playerOneValue = cardsValue[playerOne];
    playerTwoValue = cardsValue[playerTwo];
    playerTotalValue = playerOneValue + playerTwoValue;

    dealerOneValue = cardsValue[dealerOne];
    dealerTwoValue = cardsValue[dealerTwo];
    dealerTotalValue = dealerOneValue + dealerTwoValue;

    if (playerTotalValue == 21){
        PlayerBlackjack();
    }
}

function HitOne(){

    bet_up.style.visibility = "hidden";
    bet_down.style.visibility = "hidden";
    bet_div.style.visibility = "hidden";
    player_three.src = cardsImage[playerThree];
    playerThreeValue = cardsValue[playerThree];
    playerTotalValue = playerTotalValue + playerThreeValue;
    hitCounter++   
    PlayerBustCheck();
}

function HitTwo(){

    player_four.src = cardsImage[playerFour];
    playerFourValue = cardsValue[playerFour];
    playerTotalValue = playerTotalValue + playerFourValue;
    hitCounter++  
    PlayerBustCheck();
}

function HitThree(){

    player_five.src = cardsImage[playerFive];
    playerFiveValue = cardsValue[playerFive];
    playerTotalValue = playerTotalValue + playerFiveValue;
    hitCounter++   
    PlayerBustCheck();
}

function HitFour(){

    player_six.src = cardsImage[playerSix];
    playerSixValue = cardsValue[playerSix];
    playerTotalValue = playerTotalValue + playerSixValue;
    hitCounter++   
    PlayerBustCheck();
}

// Dealer draws

function DealerShowCard(){

    DissableButtons();

    dealer_back.src = cardsImage[dealerOne];

    if (dealerTotalValue <= 16){
        DealerDrawThree();
    }
    if (dealerTotalValue == 21){
        DealerBlackjack();
    }   
    else {
        WinnerCheck();
    }

    deal_button.style.visibility = "visible";
}

function DealerDrawThree(){

    dealer_three.src = cardsImage[dealerThree];
    dealerThreeValue = cardsValue[dealerThree]
    dealerTotalValue = dealerTotalValue + dealerThreeValue;
    checkOne = true;
    DealerResult();
}

function DealerDrawFour(){

    dealer_four.src = cardsImage[dealerFour];
    dealerFourValue = cardsValue[dealerFour]
    dealerTotalValue = dealerTotalValue + dealerFourValue;
    checkTwo = true;
    DealerResult();
}

function DealerDrawFive(){

    dealer_five.src = cardsImage[dealerFive];
    dealerFiveValue = cardsValue[dealerFive]
    dealerTotalValue = dealerTotalValue + dealerFiveValue;
    checkThree = true;
    DealerResult();
}

function DealerDrawSix(){

    dealer_six.src = cardsImage[dealerSix];
    dealerSixValue = cardsValue[dealerSix]
    dealerTotalValue = dealerTotalValue + dealerSixValue;
    DealerResult();
}

// Checks

function DealerResult(){
    
    if ( dealerTotalValue > 21){
        DealerBust();
    }

    if (dealerTotalValue <= 16 && checkOne){
        checkOne = false;
        DealerDrawFour();
    }

    if (dealerTotalValue <= 16 && checkTwo){
        checkTwo = false;
        DealerDrawFive();
    }

    if (dealerTotalValue <= 16 && checkThree){
        checkThree = false;
        DealerDrawSix();
    }
}

function WinnerCheck(){

    message_div.style.visibility = "visible";

    if (dealerTotalValue > playerTotalValue && !dealerBust){
        DealerWins();
    }

    if (dealerTotalValue == playerTotalValue){
        Draw();
    }
    if (dealerTotalValue < playerTotalValue && !playerBust){
        PlayerWins();
    }
}

function PlayerBustCheck(){

    if (playerTotalValue > 21){
        PlayerBust();
    }

    if (playerTotalValue == 21){
        DissableButtons();
        DealerShowCard();
    }
}

function PlayerBlackjackCheck(){

    if (dealerOneValue + dealerTwoValue == 21 && hasChecked){
        DealerBlackjack();
    }
}

// Increase and decrese bets

function Increase(){

    if (bankBallance > 0){
        IncreaseBet();
    }
}

function Decrease(){

    if (betAmmount > 0){
        DecreaseBet();
    }
}

function IncreaseBet(){

    betAmmount++;
    bankBallance--;
    bet_div.innerHTML = betAmmount;  
    bank_div.innerHTML = "Bank £" + bankBallance;
}

function DecreaseBet(){

    betAmmount--;
    bankBallance++
    bet_div.innerHTML = betAmmount;
    bank_div.innerHTML = "Bank £" + bankBallance;
}

// Win or lose

function Draw(){

    message_div.innerHTML = "Push";
}

function DealerWins(){

    message_div.innerHTML = "Dealer has " + dealerTotalValue + ". Dealer wins"
    bankBallance = bankBallance - betAmmount;
    bank_div.innerHTML = "Bank £" + bankBallance;

    if (bankBallance <= 0){
        bank_div.innerHTML = "Bank £" + 0;
        restart_button.style.visibility = "visible";
        deal_button.style.visibility = "hidden";
        DissableButtons();
    }
}

function PlayerWins(){

    message_div.innerHTML = "Dealer has " + dealerTotalValue + ". You win"
    bankBallance = bankBallance + betAmmount;
    bank_div.innerHTML = "Bank £" + bankBallance; 
    DissableButtons();
}

function DealerBlackjack(){

    message_div.style.visibility = "visible";
    message_div.innerHTML = "Dealer has 21! Dealer wins"
    bankBallance = bankBallance - betAmmount;
    bank_div.innerHTML = "Bank £" + bankBallance;
}

function PlayerBlackjack(){

    message_div.innerHTML = "Blackjack! You win"
    bankBallance = bankBallance + (betAmmount * 2);
    bank_div.innerHTML = "Bank £" + bankBallance;
    DissableButtons();
    deal_button.style.visibility = "visible";
    message_div.style.visibility = "visible";
}

function PlayerBust(){

    playerBust = true;
    bankBallance = bankBallance - betAmmount;
    bank_div.innerHTML = "Bank £" + bankBallance;
    deal_button.style.visibility = "visible";
    message_div.style.visibility = "visible";
    message_div.innerHTML = "You went bust! Dealer wins"

    if (bankBallance <= 0){
        bank_div.innerHTML = "Bank £" + 0;
        restart_button.style.visibility = "visible";
        deal_button.style.visibility = "hidden";
        DissableButtons();
    }
    DissableButtons();
}

function DealerBust(){

   dealerBust = true; 
   message_div.innerHTML = "Dealer has bust! you win."
   bankBallance = bankBallance + betAmmount;
   bank_div.innerHTML = "Bank £" + bankBallance;
}

function DissableButtons(){
    
    hit_button.style.visibility = "hidden";
    check_button.style.visibility = "hidden";
    double_button.style.visibility = "hidden";
    bet_up.style.visibility = "hidden";
    bet_down.style.visibility = "hidden";
    bet_div.style.visibility = "hidden";
}

function DealAgain(){

    player_one.src = "";
    player_two.src = "";
    player_three.src = "";
    player_four.src = "";
    player_five.src = "";
    player_six.src = "";

    dealer_back.src = "";
    dealer_two.src = "";
    dealer_three.src = "";
    dealer_four.src = "";
    dealer_five.src = "";
    dealer_six.src = "";
    
    playerOneValue = 0;
    playerTwoValue = 0;
    playerThreeValue = 0;
    playerFourValue = 0;
    playerFiveValue = 0;
    playerSixValue = 0;
    sumPlayer = 0;
    dealerOneValue = 0;
    dealerTwoValue = 0;
    dealerThreeValue = 0;
    dealerFourValue = 0;
    dealerFiveValue = 0;
    dealerSixValue = 0;
    sumDealer = 0;

    hitCounter = 0;
    dealerBust = false;
    playerBust = false;

    Main();
}

function Reload(){

    window.location.reload();
}

Main();