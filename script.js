const humanChoice = getHumanChoice().toLowerCase()
const computerChoice = getComputerChoice().toLowerCase()

function getComputerChoice() {
	let rng = Math.floor((Math.random() * 3) + 1)
	switch (rng) {
		case 1:
			return "Rock"
		case 2:
			return "Paper"
		case 3:
			return "Scissors"
		default:
			return "ERROR"
	}
}

function getHumanChoice() {
	return window.prompt("Rock, Paper or Scissors?")
}

function playRound(humanChoice, computerChoice) {
	if (humanChoice == computerChoice) {
		calcScore("")
		return `We both picked ${computerChoice}. It's a draw`
	} else if (
		(humanChoice == "rock" && computerChoice == "paper")
		|| (humanChoice == "paper" && computerChoice == "scissors")
		|| (humanChoice == "scissors" && computerChoice == "rock")
	) {
		calcScore("computer")
		return `My ${computerChoice} beats your ${humanChoice}. You lose.`
	} else {
		calcScore("player")
		return `Your ${humanChoice} beats my ${computerChoice}. You win.`
	}
}

function calcScore(winner) {
	let playerScore = 0
	let computerScore = 0
	if (winner == "computer") {
		computerScore++
	} else if (winner == "player") {
		playerScore++
	}
	console.log(`Player: ${playerScore} points. Computer: ${computerScore} points.`)
}

console.log(playRound(humanChoice, computerChoice))
