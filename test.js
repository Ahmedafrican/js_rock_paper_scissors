   // function of computer
        
   function getComputerChoice(){
    return "ROCK";
  }
  
  // function of user
  
  function getUserChoice( ){
    let name = prompt("Write Your Shape");
    let up = name.toUpperCase();
    
  
    return up ;
    }
  // fucntion 0f decideResult
  function decideResult(userChoice , computerChoice) {
    if (userChoice === computerChoice) {
              return "draw";
            } else if (userChoice === "ROCK" && computerChoice === "SCISSORS") {
              return "player";
            } else if (userChoice === "ROCK" && computerChoice === "PAPER") {
              return "computer";
            } else if (userChoice === "PAPER" && computerChoice === "ROCK") {
              return "player";
            } else if (userChoice === "PAPER" && computerChoice === "SCISSORS") {
              return "computer";
            } else if (userChoice === "SCISSORS" && computerChoice === "PAPER") {
              return "player";
            } else if (userChoice=== "SCISSORS" && computerChoice === "ROCK") {
              return "computer";
            }
          }
          // function of displayRoundResult 
          
          function displayRoundResult(roundResult){
            if (roundResult === "draw" ){
              console.log(" draw ");
            }else if (roundResult === "player"){
              console.log("The Player Won");
            }else if (roundResult === "computer"){
              console.log("The Computer Won");
            }
            
          }
        
        
          // for loop
         let playerScore = 0 ;
         let computerScore = 0 ;
          for (let i = 1; i < 6; i++){
            console.log("round" + " " + i);
            let x = getComputerChoice();
            let b = getUserChoice();
            let c = decideResult(b, x);
            displayRoundResult(c);
            if(c === "computer"){
             console.log(`${'computer score ='} ${computerScore+=1}`);
             console.log(`${"player score ="} ${playerScore}`);
            }else if (c === "player"){
              console.log(`${"player score ="} ${playerScore+=1}`);
              console.log(`${`computer score =`} ${computerScore}`);
            }else{
              console.log(`${'computer score ='} ${computerScore}`);
              console.log(`${"player score ="} ${playerScore}`);
            }if (computerScore === 3){
              break;
            }else if(playerScore === 3){
              break;
            }
         }
         
         if (computerScore > playerScore){
              console.log("The Computer is the winner");
            }else if (playerScore > computerScore){
              console.log("The Player is the winner");
            }else{
              console.log("The Player draw with the Computer");
            }
  