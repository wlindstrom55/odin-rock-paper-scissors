//first function should randomly return either 'Rock' 'Paper' or 'Scissors'. This will be the 'opponents' turn
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

//second function is logic for a single round of rock-paper-scissors.
function play(cleanPrompt, computerSelection) {
    let cleanPS = cleanPrompt;
    let retVal;
    let didIWin;
    if (cleanPS == 'Rock' && computerSelection == 'Rock') {
        retVal = `There was a tie! Rock cancels out.`;
        didIWin = 'Tie';
    }
    if (cleanPS == 'Rock' && computerSelection == 'Paper') {
        retVal = 'You lose! Rock is enveloped and swallowed alive mercilessly by paper.';
        didIWin = 'Lose';
    }
    if (cleanPS == 'Rock' && computerSelection == 'Scissors') {
        retVal = 'You win! Rock shatters scissors or maybe scissors just cannot fit around rock.';
        didIWin = 'Win';
    }
    if (cleanPS == 'Paper' && computerSelection == 'Rock') {
        retVal = 'You win! Paper wraps around rock?';
        didIWin = 'Win';
    }
    if (cleanPS == 'Paper' && computerSelection == 'Paper') {
        retVal = 'You tied! Paper cancels out.';
        didIWin = 'Tie';
    }
    if (cleanPS == 'Paper' && computerSelection == 'Scissors') {
        retVal = 'You lose. Your paper was shredded by scissors.';
        didIWin = 'Lose';
    }
    if (cleanPS == 'Scissors' && computerSelection == 'Paper') {
        retVal = 'You win handily, as your scissors mercilessly cut up the enemy paper.';
        didIWin = 'Win';
    }
    if (cleanPS == 'Scissors' && computerSelection == 'Rock') {
        retVal = 'You lose. Scissors are weak against rock.';
        didIWin = 'Lose';
    }
    if (cleanPS == 'Scissors' && computerSelection == 'Scissors') {
        retVal = 'You tie. Scissors clash against each other and cancel out.';
        didIWin = 'Tie';
    }  
    return [retVal , didIWin];
}

//3rd function will be for the utility of cleaning up a given input
function cleanPrompt(input) {
    let a = input.trim().toLowerCase(); //we want this to work with any case
    let b = a.slice(0,1).toUpperCase();
    let c = a.slice(1, a.length);
    let d = b + c;
    return d;
}

//this function will perform the work of playing 1 round of the game and then extracting the results to our divs
function extract(pChoice) {
    let s;
    let results = play(pChoice, computerPlay());
    let didIWin = results.pop();
    let response = results.pop();
    
    if(didIWin == 'Win') {
        s = "You win the round.";
        scoreP++;
    }
    if(didIWin == 'Lose') {
        s = "You lose the round.";
        scoreC++;
    } 
    if(didIWin == 'Tie') {
        s = "Tie round.";
    }
    if (scoreP <= 5 && scoreC <= 5){
        resultsContainer.textContent = `${response}`;
        counterContainer.textContent = `${s} That was round no.${counter}, the score is ${scoreP} - ${scoreC}`;
    }
    if (scoreP == 5) {
        s = `The game is over! You WIN! The score is ${scoreP} - ${scoreC}`;
        resultsContainer.textContent = 'You win!';
        counterContainer.textContent = `${s}`;
    }
    if (scoreC == 5){
        s = `The game is over! You LOST. The score is ${scoreP} - ${scoreC}`;
        resultsContainer.textContent = 'You lose!';
        counterContainer.textContent = `${s}`;
    }
    if (scoreP >= 5 && scoreC >= 5) {
        resultsContainer.textContent = 'The Game Is Over';
        counterContainer.textContent = 'Please refresh in order to reset';
    }

}

//counter variables
let scoreP = 0;
let scoreC = 0;
const counterContainer = document.querySelector('.counter');
const resultsContainer = document.querySelector('.results');
let counter = 1;

//Rock button
const rockb = document.querySelector('.rockB');
rockb.addEventListener('click', function (){
    extract('Rock');
    counter++;
});
//Paper button
const paperb = document.querySelector('.paperB');
paperb.addEventListener('click', function (){
    extract('Paper');
    counter++;
});
//Scissors button
const scissorsb = document.querySelector('.scissorsB');
scissorsb.addEventListener('click', function (){
    extract('Scissors');
    counter++;
});