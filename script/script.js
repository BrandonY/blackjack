let bet_div = document.getElementById("bet");
let playerTwo = document.getElementById("playerTwo")
let playerThree = document.getElementById("playerThree")
let playerFour = document.getElementById("playerFour")
let playerFive = document.getElementById("playerFive")
let playerSix = document.getElementById("playerSix")
let betAmmount = 20;
let hitClicks = 0;


let cards = ["/images/cards/2C.jpg",
"/images/cards/2C.jpg",
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


function increase(){
    betAmmount++
    bet_div.innerHTML = betAmmount;    
}

function decrease(){
    betAmmount--
    bet_div.innerHTML = betAmmount;
}

function selectCardOne(){
    let rndCard = Math.floor(Math.random() * 51 );
    document.getElementById("playerOne").src = cards[rndCard];
}

function selectCardTwo(){
    let rndCard = Math.floor(Math.random() * 51 );
    document.getElementById("playerTwo").src = cards[rndCard];
}

function selectCardDealer(){
    let rndCard = Math.floor(Math.random() * 51 );
    document.getElementById("dealer").src = cards[rndCard];
}

function hit(){
    if (hitClicks === 0) {hitOne(), hitClicks++};
    if (hitClicks === 1) {hitTwo(), hitClicks++};
    if (hitClicks === 2) {hitThree(), hitClicks++};
    if (hitClicks === 3) {hitFour(), hitClicks++};
    console.log(hitClicks)
}

function hitOne(){
    let rndCard = Math.floor(Math.random() * 51 );
    document.getElementById("playerThree").src = cards[rndCard]
};

function hitTwo(){
    let rndCard = Math.floor(Math.random() * 51 );
    document.getElementById("playerFour").src = cards[rndCard]
};

function hitThree(){
    let rndCard = Math.floor(Math.random() * 51 );
    document.getElementById("playerFive").src = cards[rndCard]
};

function hitFour(){
    let rndCard = Math.floor(Math.random() * 51 );
    document.getElementById("playerSix").src = cards[rndCard]
};

selectCardOne();
selectCardTwo();
selectCardDealer();



