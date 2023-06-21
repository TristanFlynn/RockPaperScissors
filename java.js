/* let userScore = 0;
let compScore = 0;

const savedScore = JSON.parse(localStorage.getItem('userScore', 'compScore'));
if(savedScore) {
  userScore = savedScore;
  compScore = savedScore;
}

updateuserScoreElement();
updatecompScoreElement();

function playGame(playerMove) {
  const computerMove = getComputerChoice();
  const resultElement = document.querySelector('.js-result');
  
  if (playerMove === computerMove) {
    resultElement.innerHTML = 'Tie.';

  } else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') || 
    (playerMove === 'scissors' && computerMove === 'paper') 
  ) {
    resultElement.innerHTML = 'You Win';
    userScore += 1;
  } else {
    resultElement.innerHTML = 'You Lose';
    compScore += 1;
  }

  updateuserScoreElement();
  updatecompScoreElement();
  localStorage.setItem('userScore', JSON.stringify(userScore));
  localStorage.setItem('compScore', JSON.stringify(compScore));
} */
let result = '';
//result variable has been moved outside playGame function scope to access the new gameScore function

 function playGame(playerMove) {
// This function will operate when a "playerMove" button is clicked
//Results are compared to "computerMove" which operates the computerChoice function
  const computerMove = getComputerChoice();

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie!';
    } else if (computerMove === 'paper') {
      result = 'You Lose!';
    } else if (computerMove === 'scissors') {
      result = 'You Win!';
    }
  }

  if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You Win!';
    } else if (computerMove === 'paper') {
      result = 'Tie!';
    } else if (computerMove === 'scissors') {
      result = 'You Lose!';
    }
  }

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You Lose!';
    } else if (computerMove === 'paper') {
      result = 'You Win!';
    } else if (computerMove === 'scissors') {
      result = 'Tie!';
    }
  }

  console.log(`you picked ${playerMove}, computer picked ${computerMove}, by default, ${result}`);
}

function getComputerChoice () {
// For Computer's move, I am starting a function that creates a random number
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }
// By generating a random number, each random event i split into equal thirds for possibilties
  return computerMove;
}

/* function updatecompScoreElement() {
  document.querySelector('js-compScore').innerHTML = `${compScore}`;
}

function updateuserScoreElement() {
  document.querySelector('js-userScore').innerHTML = `${userScore}`;
} */