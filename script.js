
let score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Loses: 0,
    Ties: 0
};
updateScore();

document.getElementById('rock').addEventListener('click', function () {
    playGame('Rock');
});

document.getElementById('paper').addEventListener('click', function () {
    playGame('Paper');
});

document.getElementById('scissor').addEventListener('click', function () {
    playGame('Scissor');
});

document.getElementById('reset').addEventListener('click', function () {
    // Reset score and localStorage
    score.Wins = 0;
    score.Loses = 0;
    score.Ties = 0;
    localStorage.removeItem('score');
    updateScore();
});

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';
    if (playerMove === 'Scissor') {
        if (computerMove === 'Rock') {
            result = 'You lose.';
        } else if (computerMove === 'Paper') {
            result = 'You win.';
        } else if (computerMove === 'Scissor') {
            result = 'Tie!';
        }
    }

    if (playerMove === 'Paper')
        if (computerMove === 'Rock') {
            result = 'You win.';
        } else if (computerMove === 'Paper') {
            result = 'Tie!';
        } else if (computerMove === 'Scissor') {
            result = 'You lose';
        }

    if (playerMove === 'Rock')
        if (computerMove === 'Rock') {
            result = 'Tie!';
        } else if (computerMove === 'Paper') {
            result = 'You lose.';
        } else if (computerMove === 'Scissor') {
            result = 'You win.';
        }


    if (result === 'You win.') {
        score.Wins++;
    } else if (result === 'You lose.') {
        score.Lose++;
    } else if (result === 'Tie!') {
        score.Ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));
    updateScore();
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You
<img src="images/${playerMove}-emoji.png" alt="" class="move-icon">
<img src="images/${computerMove}-emoji.png" alt="" class="move-icon">
Computer`;
}

function updateScore() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.Wins};, Loses: ${score.Loses}, Ties: ${score.Ties}`;
}

function pickComputerMove() {
    const randomNum = Math.random();
    let computerMove = '';

    if (randomNum >= 0 && randomNum <= 1 / 3) {
        computerMove = 'Rock';
    } else if (randomNum >= 1 / 3 && randomNum <= 2 / 3) {
        computerMove = 'Paper';
    } else if (randomNum >= 2 / 3 && randomNum < 1) {
        computerMove = 'Scissor';
    };

    return computerMove;
}