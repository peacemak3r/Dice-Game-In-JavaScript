/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


/* Global Variable Declaration */

var firstPlayerGlobalScore, secondPlayerGlobalScore, hold;

let player1, gamePlaying=true, player1RoundScore = 0, player2RoundScore= 0, panel1, panel2;

firstPlayerGlobalScore = document.querySelector('#score-0');
secondPlayerGlobalScore = document.querySelector('#score-1');



/* Get Panels */

panel1 = document.querySelector('.player-0-panel');
panel2 = document.querySelector('.player-1-panel');
player1 = document.querySelector('#current-0');
player2 = document.querySelector('#current-1');


/* New Panel */

document.querySelector('.btn-new').addEventListener('click',resetData);


/* Get Dice Button */

let diceBtn = document.querySelector('.btn-roll');

/* Get Hold Button */

hold = document.querySelector('.btn-hold');

hold.addEventListener('click', updateScore);



diceBtn.addEventListener('click', rollsDice);


function getDiceNum(){
	return Math.floor((Math.random()*Math.floor(6)+1));
}

function rollsDice(){

	if(gamePlaying){

		/* Get Dice Count */

		let diceCount = getDiceNum();

		/* Get Dice Image & Show Dice Result Image*/

		let diceImg = document.querySelector('.dice');
		diceImg.style.display = 'block';
		diceImg.src = `dice-${diceCount}.png`

		/* Check dice count */

		if(diceCount!==1){

			activePanel(diceCount);
		}
		else{

			switchPanel();
		}

	}	


} 


function activePanel(diceCount) {

	if(panel1.classList.contains('active')){

		player1RoundScore += diceCount;
		console.log(player1RoundScore);
		player1.textContent = player1RoundScore;

		if(player1RoundScore >= 100){
			document.querySelector('#name-0').textContent = 'Winner!!';
			firstPlayerGlobalScore.textContent = player1RoundScore;
			gamePlaying = false;
		}
	}

	else{
		player2RoundScore += diceCount;
		console.log(player2RoundScore);
		player2.textContent = player2RoundScore;

		if(player2RoundScore >= 100){
			document.querySelector('#name-1').textContent = 'Winner!!';
			secondPlayerGlobalScore.textContent = player2RoundScore;
			gamePlaying = false;
		}
	}
}


function switchPanel(){

	if(panel1.classList.contains('active')){

		panel1.classList.remove('active');
		player1RoundScore = 0;
		player1.textContent = 0;

		panel2.classList.add('active');

	}

	else {
		
		panel2.classList.remove('active');
		player2RoundScore = 0;
		player2.textContent = 0;
		panel1.classList.add('active');

	}

}


function updateScore() {

	if(panel1.classList.contains('active')){

		firstPlayerGlobalScore.textContent = player1RoundScore;

		switchPanel();

	}

	else{

		secondPlayerGlobalScore.textContent = player2RoundScore;

		switchPanel();
	}

}


function resetData(){

	if(panel2.classList.contains('active')){		
		panel2.classList.remove('active');
		panel1.classList.add('active');
	}

	firstPlayerGlobalScore.textContent = 0;
	secondPlayerGlobalScore.textContent = 0;
	player1RoundScore= 0;
	player1.textContent= 0;
	player2RoundScore= 0;
	player2.textContent= 0;
	gamePlaying = true;
	console.log('hello');
}