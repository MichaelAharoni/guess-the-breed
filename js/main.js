'use strict'
var border = 'This breed of dog can lead up to 200 sheeps by his own, there\'s who says that this is the smartest dog in the whole word!';
var pitbull = 'Many rumers about that breed, a lot of power combained with a lot of bravness, guess who is this ?(hint : from the most dangerus breeds at ISRAEL)';
var husky = 'that dog can run as much as most of you drives per day, use to take laguages and deal with a super cold weather';
var labrador = 'Most of the service dogs are from that breed, he usually love to sweam, play fatch and mostly to hug and cuddle';
var german = 'You cant call your army a real army without having a unit of dogs, most of the armies at the entire word have a lot of that spesific bread';
var elDescription = document.querySelector('.description');
var gData = [{ description: border, optionA: 'Border Collie', optionB: 'Malinoa', isIt: true, img: 'imgs/1.jpg' }, { description: pitbull, optionA: 'Bulldog', optionB: 'Pitbull', isIt: false, img: 'imgs/5.jpg' }, { description: husky, optionA: 'Malamut', optionB: 'Husky Sibiri', isIt: false, img: 'imgs/3.jpg' }, { description: labrador, optionA: 'Labrador', optionB: 'Pekinez', isIt: true, img: 'imgs/2.jpg' }, { description: german, optionA: 'GermanSheph', optionB: 'Shnautzer', isIt: true, img: 'imgs/4.jpg' }];
var gCurrQuestIdx = 0;
var gCurrAnswer = null;
var answers = [0, 1, 1, 0, 0];



function initGame() {
    renderQuest(gData, gCurrQuestIdx);
}
function restart() {
    gCurrQuestIdx = 0;
    renderQuest(gData, gCurrQuestIdx);
}

function checkAnswer(optIdx) {
    if (gCurrAnswer === answers[optIdx]) gCurrQuestIdx++;
    renderQuest(gData, gCurrQuestIdx);
}
function secondbtn() {
    gCurrAnswer = 1;
    checkAnswer(gCurrQuestIdx);
    
}

    function firstbtn() {
        gCurrAnswer = 0;
        checkAnswer(gCurrQuestIdx);
    }
    
    
function woof() {
    var audio = new Audio('sounds/dog.wav');
    audio.play();
}

function renderQuest(data, optIdx) {
    var elImg = document.querySelector('img');
    var elDiv1 = document.querySelector('.div1');
    var elDiv2 = document.querySelector('.div2');
    var elBtn = document.querySelector('button');
    if (optIdx < 5) {
        elBtn.style.display = "none";
        elDiv1.style.display = "block";
        elDiv2.style.display = "block";
        elImg.src = data[optIdx].img;
        elDiv1.innerText = data[optIdx].optionA;
        elDiv2.innerText = data[optIdx].optionB;
        elDescription.innerText = data[optIdx].description;
        gFirstIsTrue = data[optIdx].isIt;
        console.log(optIdx);
    } else {
        alert('🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳VICTORY🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳')
        elBtn.style.display = "block";
        var audio = new Audio('sounds/win.wav');
        audio.play();
        elImg.src = 'imgs/6.jpg';
        elDiv1.style.display = "none";
        elDiv2.style.display = "none";
        elDescription.innerText = 'YOU DID IT!!!🥳🥳🥳🥳🥳🥳🥳🥳🥳 now let me ask you a question, do you spend enough time with you own dog ?🤔🤨'
    }
}