const choices = ["ROCK","PAPER","SCISSORS"]

function getComputerChoice(choices){
    return choices[Math.floor(Math.random()*choices.length)]
}

function validatePlayerSelection(playerSelection){
    return choices.includes(playerSelection)
}

function playRound(computerSelection,playerSelection){

    if (computerSelection === playerSelection){
        return("It's a tie")
    }else{
        if (
        (computerSelection === "PAPER") && (playerSelection=== "ROCK")||
        (computerSelection === "ROCK") && (playerSelection=== "SCISSORS")||
        (computerSelection === "SCISSORS") && (playerSelection=== "PAPER")
        ){
            return(`You lose! ${computerSelection} beats ${playerSelection}`)
        }
        else{
            return(`You win! ${playerSelection} beats ${computerSelection}`)
        }
    }
}
function declareWinner (computerScore,playerScore){
    if (computerScore>playerScore){
        return(`The computer wins with a score of ${computerScore}:${playerScore}`)
    }else if (playerScore>computerScore){
        return(`You win with a score of ${playerScore}:${computerScore}`)
    }else {
        return(`It's a tie`)
    }
}

function game(){
    let computerScore = 0
    let playerScore = 0

    for (let i=1; i<=5; i++){
        const computerSelection = getComputerChoice(choices).toUpperCase()
        const playerSelection = prompt("Rock,Paper or Scissors?:").toUpperCase()

        if (validatePlayerSelection(playerSelection)){
            result=playRound(computerSelection,playerSelection)
            console.log(result)

            if (result===`You lose! ${computerSelection} beats ${playerSelection}`){
                computerScore++
            }else if (result === `You win! ${playerSelection} beats ${computerSelection}`){
                playerScore++
            }
        }else{
            console.log(
        `Invalid choice:`)
        }
    }
    alert(declareWinner(computerScore,playerScore))
}

game()


