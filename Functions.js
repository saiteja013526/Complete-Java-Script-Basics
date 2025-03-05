/*
Rock Paper and Scissors game using simple functions to have a better understanding how the functions, if else statements works in the java script, and how to use parameters and return the values in the javascript.

in the 07-Rock-Paper-Scissors.html I made a basic interactive webpage to play the Rock Paper Scissors.
*/ 

let playersMove = 'paper';
let score = JSON.parse(localStorage.getItem('score')) ||  {
  wins: 0,
  losses: 0,
  tie: 0
};

function playGame(playersMove){
  const computerMove = pickComputerMove();
  let result='';

   //for rock
  if(playersMove ==='rock'){
    if(computerMove === 'rock'){
    result='tie.';
    }else if(computerMove === 'paper'){
      result = 'You Loose.'; 
    }else if(computerMove === 'scissors'){
      result = 'You Win.';
    }
  }

   //for paper
   if(playersMove ==='paper'){
    if(computerMove === 'rock'){
    result='You Win.';
    }else if(computerMove === 'paper'){
      result = 'tie.';
    }else if(computerMove === 'scissors'){
      result = 'You Loose.';
    }
  }

  //for scissors
  if(playersMove ==='scissors'){
    if(computerMove === 'rock'){
    result='You Loose.';
    }else if(computerMove === 'paper'){
      result = 'You Win.';
    }else if(computerMove === 'scissors'){
      result = 'tie.';
    }
  }


  localStorage.setItem('score', JSON.stringify(score));
  console.log(`You Picked ${playersMove}, computer move is ${computerMove}. ${result}
wins: ${score.wins}, losses: ${score.losses}, tie: ${score.tie}`);


}

function pickComputerMove(){
  const randomNumber=Math.random();
  let computerMove='';

  if(randomNumber >=0 && randomNumber < 1/3){
    computerMove='rock';
  }else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove='paper';
  }else if(randomNumber >= 2/3 && randomNumber < 1){
    computerMove='scissors';
  }
  return computerMove;
}

//calling the function to use it.
playGame(playersMove);

