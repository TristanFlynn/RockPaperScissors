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
console.log(getComputerChoice());