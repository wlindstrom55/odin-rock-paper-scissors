//first function should randomly return either 'Rock' 'Paper' or 'Scissors'.
function computerPlay() {
    let choice = Math.random() * 10;
    console.log(choice);
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
    if (choice > 6.66 && choice < 9.99) {
        ret = scissors;
    }
    console.log(ret);
    return ret;
}

//second function plays a single round of rock-paper-scissors. Should take 2 param, and return a string that declares the winner.
function play(playerSelection, computerSelection) {
    let youWin = `Congratulations! You win! ${} beats ${}!`;
}
computerPlay();