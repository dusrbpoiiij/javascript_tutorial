// Challenge 1 : Your Age in Days

function ageInDays() {
    var birthYear = prompt('What year were you born.... Good friend?');
    var ageInDayes = (2019-birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are '+ ageInDayes + ' days old.');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('flex-box-result').remove();
}


// Challenge 2 : Cat Generator
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://i.ytimg.com/vi/MBtJdkiEhBk/maxresdefault.jpg";
    div.appendChild(image);
}


// Challenge 3 : Rock, Paper, Scissors 
function rpsGame(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    result = decideWinner(humanChoice,botChoice); // [1,0] human win, bot lost
    message = finalMessage(result); // {'message' : 'You won', 'color' : 'green'}
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

 // 0,1,2 중 하나 뽑는 함수 
function randToRpsInt() {
    return Math.floor(Math.random()*3); 
}

// 랜덤한 숫자에 맞는 가위,바위,보 중 하나 나오는 함수 
function numberToChoice(number) {
    return ['rock','paper','scissors'][number];  
}

// Json파일을 이용한 가위바위보 승자 확인 
function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors':1, 'rock':0.5, 'paper':0},
        'paper': {'rock':1, 'paper':0.5, 'scissors':0},
        'scissors': {'paper':1, 'scissors':0.5, 'rock':0},
    };
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

// 결과에 따른 메시지 출력 
function finalMessage([yourScore, computerScore]) {
    if (yourScore == 0) {
        return {'message':'You lost', 'color':'red'};
    } else if (yourScore == 0.5) {
        return {'message':'You tied', 'color':'yellow'};
    } else {
        return {'message':'You won', 'color':'green'};
    }
}

// 화면 출력 Front End 
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src,
    }

    // Let's remove all the images 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    console.log(finalMessage);

    humanDiv.innerHTML = "<img src='"+imagesDatabase[humanImageChoice]+"' height=150 width=150 style='box-shadow:0px 10px 50px rgba(0,0,0,.4)'>";
    botDiv.innerHTML = "<img src='"+imagesDatabase[botImageChoice]+"' height=150 width=150 style='box-shadow:0px 10px 50px rgba(0,0,0,.4)'>";
    messageDiv.innerHTML = "<h2 style='color:"+finalMessage['color']+"; font-size:60px; padding:30px;'>"+finalMessage['message']+"</h2>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}   


// Challenge 4 : Change the Color of All Buttons
var all_buttons = document.getElementsByTagName('button');  // All of the Buttons

var copyAllButtons = [];
 // duplicate the original buttons classList[1] for reset
for (let i=0; i<all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}

// 같은 값을 선택한 경우 동작하지 않음. onchange니까.  이를 해결할 방법은 ??
function buttonColorChange(buttonThingy) {

    if(buttonThingy.value === 'red') {
        buttonsRed();
    } else if (buttonThingy.value === 'green') {
        buttonsGreen();
    } else if (buttonThingy.value === 'reset') {
        buttonColorReset();
    } else if (buttonThingy.value === 'random') {
        randomColors();
    } 

}

function buttonsRed() {
    for (let i=0; i<all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for (let i=0; i<all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset() {
    for (let i=0; i<all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
    var choices = ['btn-primary', 'btn-danger', 'btn-warning','btn-success'];
    
    for (let i=0; i<all_buttons.length; i++) {
        var randomNumber = Math.floor(Math.random()*4);  // Random Number
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}