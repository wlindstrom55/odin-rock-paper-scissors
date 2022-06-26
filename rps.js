//first function should randomly return either 'Rock' 'Paper' or 'Scissors'.
function computerPlay() {
    let choice = Math.random() * 10;
    //console.log(choice);
    const rock = 'Rock';
    const paper = 'Paper';
    const scissors = 'Scissors';
    let ret;
    if (choice > 0 && choice < 3.33) {
        ret = rock;
    }
    if (choice > 3.33 && choice < 6.66) {
        ret = paper;
    }
    if (choice > 6.66 && choice <= 10) {
        ret = scissors;
    }
    //console.log(ret);
    return ret;
}

//second function plays a single round of rock-paper-scissors. Should take 2 param, and return a string that declares the winner.
function play(cleanPrompt, computerSelection) {
    let cleanPS = cleanPrompt;
    let retVal;
    let didIWin;
if (cleanPS == 'Rock' && computerSelection == 'Rock') {
    retVal = `There was a tie! You and the opponent both chose ${cleanPS}`;
    didIWin = 'Tie';
}
if (cleanPS == 'Rock' && computerSelection == 'Paper') {
    retVal = 'You lose! Paper beats rock.';
    didIWin = 'Loss';
}
if (cleanPS == 'Rock' && computerSelection == 'Acissors') {
    retVal = 'You win! Rock crushes scissors.';
    didIWin = 'Win';
}
if (cleanPS == 'Paper' && computerSelection == 'Rock') {
    retVal = 'You win! Paper suffocates rock.';
    didIWin = 'Win';
}
if (cleanPS == 'Paper' && computerSelection == 'Paper') {
    retVal = 'You tied! Paper cancels out.';
    didIWin = 'Tie';
}
if (cleanPS == 'Paper' && computerSelection == 'Scissors') {
    retVal = 'You lose. Your paper was shredded by scissors.';
    didIWin = 'Loss';
}
if (cleanPS == 'Scissors' && computerSelection == 'Paper') {
    retVal = 'You win handily, as your scissors mercilessly cut up the enemy paper.';
    didIWin = 'Win';
}
if (cleanPS == 'Scissors' && computerSelection == 'Rock') {
    retVal = 'You lose. Scissor chips against rock.';
    didIWin = 'Loss';
}
if (cleanPS == 'Scissors' && computerSelection == 'Scissors') {
    retVal = 'You tie. Scissors clash against each other and cancel out.';
    didIWin = 'Tie';
}  
return [retVal , didIWin];
}

//3rd function will be for the utility of cleaning up a player's input
function cleanPrompt(input) {
    let a = input.trim().toLowerCase(); //we want this to work with any case
    let b = a.slice(0,1).toUpperCase();
    let c = a.slice(1, a.length);
    let d = b + c;
    return d;
}

//4th function will be a loop that plays the game in multiple rounds.
function game() {
    let counter = 0;
    let winCounter = 0;
    let lossCounter = 0;
    let tieCounter = 0;
    let z;
for (let i = 0; i < 5; i++) {
    let playerAnswer = prompt();
    let cleanPA = cleanPrompt(playerAnswer);
    let cleanCA = cleanPrompt(computerPlay());
    z = play(cleanPA, cleanCA);
    if (z[1] == 'Tie') {
        tieCounter++;
    }
    if (z[1] == 'Loss') {
        lossCounter++;
    }
    if (z[1] == 'Win') {
        winCounter++;
    }
    console.log('Round number: ' + counter);
    console.log(z);
    counter++;
}
console.log('There were: ' + winCounter + ' wins; ' + lossCounter + " losses; " + tieCounter + ' ties. Game Over!');
return z;
}
game();

//computerPlay();

//console.log(cleanPA + cleanCA);

