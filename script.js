const moves = ["rock", "paper", "scissors"]; //Creates global variable (string array); Max index = 2; Length = 3
const gameResult = []; //Creates string array containing winners of each game


function newGame(){ //Plays the game for 5 rounds; Console-based
    for(i = 0; i < 5; i++){
        newRound(i); //Calls newRound() and passes i as parameter
    }

    //Same as
    //newRound()
    //newRound()
    //newRound()
    //newRound()
    //newRound()

    getGameResult(); //Calls getGameResult()
}

function newRound(round){ //Plays a round
    const playerMove = getPlayerMove(); //Calls getPlayerMove()
    const computerMove = getComputerMove(); //Calls getComputerMove()
    const roundWinner = getRoundWinner(playerMove, computerMove); //Calls getRoundWinner() and passes playerMove and computerMove as parameters

    gameResult.push(roundWinner); //Adds roundWinner string as array item
    getRoundResult(playerMove, computerMove, roundWinner, round); // Calls getRoundResult and passes playerMove, computerMove, roundWinner, round as parameters; Gets round value from i parameter
}

function getPlayerMove(){ //Gets input from user and validates string
    let input = prompt("What's your move?"); //Gets input from user
    input = input.toLowerCase(); //Converts input to case-insensitive string

    while (input == null) { //Fixes type error when cancelling prompt
        input = prompt("What's your move?");
    }

    let check = validateInput(input); //Calls validateInput() and passes input argument as parameter; Checks if input is included in moves[]
    while (check == false){ //while input not included in moves[], get input from user, call validateInput() again; Loops continously runs until check becomes true
        input = prompt("What's your move?");

        while (input == null) { //Fixes type error when cancelling prompt
            input = prompt("What's your move?");
        }

        input = input.toLowerCase();
        check = validateInput(input); 
    }

    return(input);
}

function getComputerMove(){ //Generates random string from moves[]
    return moves[Math.floor(Math.random() * moves.length)]; //Rounds down random integer; e.g. 2.99 -> 2
}

function validateInput(input){ //Checks if input is included in moves[]
    if(moves.includes(input)){
        return true;
    } else {
        return false;
    }

    //The same as
    //return moves.includes(input)
    //Still returns boolean value
}

function getRoundWinner(playerMove, computerMove){ //Gets winner for each round
    if( playerMove === computerMove){
        return "Draw";
    } else if( // All cases where player wins
        (playerMove === "rock" && computerMove === "scissors") ||
        (playerMove === "paper" && computerMove === "rock") ||
        (playerMove === "scissors" && computerMove === "paper")
    ){ 
        return "Player";
    } else{
        return "Computer";
    }
}

function getGameResult(){ //Logs results each game
    let playerScore = gameResult.filter((item) => item == "Player").length; //Returns the length of a new array that has the exact number of "player" in gameResult[]
    let computerScore = gameResult.filter((item) => item == "Computer").length;
    let drawScore = gameResult.filter((item) => item == "Draw").length;

    console.log("GAME RESULTS")
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);
    console.log("Draws: " + drawScore);

    console.log("-----------------------------");

    //The same as
    //console.log("Player: ", playerScore);
}

function getRoundResult(playerMove, computerMove, roundWinner, round){ //Logs results each round
    console.log("ROUND ", round + 1);
    console.log("You chose ", playerMove);
    console.log("Computer chose ", computerMove);
    console.log("Winner: ", roundWinner);

    console.log("-----------------------------");
}