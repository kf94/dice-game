
var p1ScoreDisplay = document.getElementById('score-0');
var p2ScoreDisplay = document.getElementById('score-1');
var p1Name = document.getElementById('name-0');
var p2Name = document.getElementById('name-1');
var p1CurrentDisplay = document.getElementById('current-0');
var p2CurrentDisplay = document.getElementById('current-1');
var rollButton = document.getElementsByClassName('btn-roll')[0];
var rulesButton = document.getElementsByClassName('btn-rules')[0];
var newGameButton = document.getElementsByClassName('btn-new')[0];
var holdButton = document.getElementsByClassName('btn-hold')[0];
var diceImg = document.getElementsByClassName('dice')[0];
var p1Panel = document.getElementsByClassName('player-0-panel')[0];
var p2Panel = document.getElementsByClassName('player-1-panel')[0];
var buttonsDiv = document.getElementsByClassName('in-game-buttons')[0];
var mainContent = document.getElementsByClassName('wrapper')[0];
var rulesDiv = document.getElementsByClassName('rules-div')[0];
var rulesGotIt = document.getElementsByClassName('btn-got-it')[0];

var p1Score = 0;
var p2Score = 0;
var p1Current = 0;
var p2Current = 0;
var turnCount = 0;
var pTurn;

diceImg.style.display = 'none';

rulesDiv.style.display = 'none';

turnCount % 2 === 0?pTurn = 0:pTurn = 1;

function rollDice () {
return  Math.floor(Math.random() * 6) + 1;
};

function changeDiceImg(num) {
  diceImg.src="dice-" + num + ".png";
};

function setActivePlayer() {
  if (pTurn % 2 === 0) {
     p1Panel.classList.add('active');
     p2Panel.classList.remove('active');
   } else {
     p1Panel.classList.remove('active');
     p2Panel.classList.add('active');
   }
};

rulesButton.addEventListener('click', function () {
  mainContent.style.display = 'none';
  rulesDiv.style.display = 'block';
});

rulesGotIt.addEventListener('click', function () {
  mainContent.style.display = 'block';
  rulesDiv.style.display = 'none';
});

newGameButton.addEventListener('click', function () {
  diceImg.style.display = 'none';
  p1Score = 0;
  p2Score = 0;
  p1Current = 0;
  p2Current = 0;
  turnCount = 0;
  pTurn = 0;
  p1ScoreDisplay.innerHTML = p1Score;
  p2ScoreDisplay.innerHTML = p2Score;
  p1CurrentDisplay.innerHTML = p1Current;
  p2CurrentDisplay.innerHTML = p2Current;
  p1Panel.classList.remove('winner');
  p2Panel.classList.remove('winner');
  buttonsDiv.style.display = 'block';
  p1Name.textContent ="Player 1";
  p2Name.textContent ="Player 2";
  setActivePlayer();
});

rollButton.addEventListener('click', function () {
  if (pTurn % 2 === 0) {
    var roll = rollDice();
    changeDiceImg(roll);
    if (roll > 1) {
      p1Current += roll;
      p1CurrentDisplay.innerHTML = p1Current;
    } else {
      p1Current = 0;
      p1CurrentDisplay.innerHTML = p1Current;
      pTurn++;
    };
  } else {
    var roll = rollDice();
    changeDiceImg(roll);
    if (roll > 1) {
      p2Current += roll;
      p2CurrentDisplay.innerHTML = p2Current;
    } else {
      p2Current = 0;
      p2CurrentDisplay.innerHTML = p2Current;
      pTurn++;
  };
};
setActivePlayer();
diceImg.style.display = 'block';
});

holdButton.addEventListener('click', function () {
  if (pTurn % 2 === 0) {
    p1Score += p1Current;
    p1Current = 0;
    pTurn++;
    p1ScoreDisplay.innerHTML = p1Score;
    p1CurrentDisplay.innerHTML = p1Current;
  } else {
    p2Score += p2Current;
    p2Current = 0;
    pTurn++;
    p2ScoreDisplay.innerHTML = p2Score;
    p2CurrentDisplay.innerHTML = p2Current;
  };
  if (p1Score >= 100) {
    p1Panel.classList.add('winner');
    p1Name.textContent ="WINNER!";
    diceImg.style.display = 'none';
    buttonsDiv.style.display = 'none';
  } else if (p2Score >= 100) {
    p2Panel.classList.add('winner');
    p2Name.textContent ="WINNER!";
    diceImg.style.display = 'none';
    buttonsDiv.style.display = 'none';
  } else {
    setActivePlayer();
  }
});
