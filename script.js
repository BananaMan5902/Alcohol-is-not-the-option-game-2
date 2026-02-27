const gameDiv = document.getElementById("game");

let playerNames = [];
let scores = [0,0];

let currentPlayer = 0;
let questionIndex = 0;

/* ===== QUESTION BANK (20 QUESTIONS) ===== */

let questions = [

{q:"Which is healthier?", a:"Drink water", b:"Drink mystery party drink", good:"A"},
{q:"Better sleep choice?", a:"Sleep 8 hours", b:"Stay up all night", good:"A"},
{q:"For energy?", a:"Eat fruit", b:"Drink soda only", good:"A"},
{q:"For brain focus?", a:"Study a little", b:"Skip homework", good:"A"},
{q:"Sports help?", a:"Play sports", b:"Avoid exercise", good:"A"},

{q:"Friend choice?", a:"Support friend", b:"Encourage risky drink", good:"A"},
{q:"Party choice?", a:"Have fun without alcohol", b:"Drink mystery liquid", good:"A"},
{q:"Body energy?", a:"Drink water", b:"Too much soda", good:"A"},
{q:"School day?", a:"Do homework", b:"Ignore school", good:"A"},
{q:"Healthy habit?", a:"Walk outside", b:"Stay inside all day", good:"A"},

{q:"Mind health?", a:"Talk to friends", b:"Hide problems", good:"A"},
{q:"Sports game?", a:"Play game", b:"Watch screen all day", good:"A"},
{q:"Snack choice?", a:"Fruit snack", b:"Candy only", good:"A"},
{q:"Morning?", a:"Wake up on time", b:"Skip morning", good:"A"},
{q:"Learning?", a:"Try new skill", b:"Quit learning", good:"A"},

{q:"Exercise?", a:"Move body", b:"No movement", good:"A"},
{q:"Water?", a:"Drink water", b:"Ignore water", good:"A"},
{q:"Friends?", a:"Be kind", b:"Be mean", good:"A"},
{q:"Hobby?", a:"Practice hobby", b:"Give up hobby", good:"A"},
{q:"Health?", a:"Balanced life", b:"Risky choices", good:"A"}

];

/* Shuffle Questions */

questions.sort(()=>Math.random()-0.5);

/* ===== Start Game ===== */

function startGame(){

playerNames[0]=prompt("Player 1 name");
playerNames[1]=prompt("Player 2 name");

renderQuestion();
}

/* ===== Render Question ===== */

function renderQuestion(){

if(questionIndex>=20){
endGame();
return;
}

let player = playerNames[currentPlayer];

let q = questions[questionIndex];

gameDiv.innerHTML=`
<h2>Turn: ${player}</h2>

<p>Question ${questionIndex+1}/20</p>

<h3>${q.q}</h3>

<button onclick="answer('A')">${q.a}</button>
<br>
<button onclick="answer('B')">${q.b}</button>
`;
}

/* ===== Answer Logic ===== */

function answer(choice){

let q = questions[questionIndex];

if(choice === q.good){
scores[currentPlayer]+=1;
}

currentPlayer = 1-currentPlayer;
questionIndex++;

renderQuestion();
}

/* ===== End Game ===== */

function endGame(){

gameDiv.innerHTML=`
<h2>🎉 Game Finished!</h2>

<p>${playerNames[0]} Score: ${scores[0]}</p>
<p>${playerNames[1]} Score: ${scores[1]}</p>

<h3>
Winner:
${
scores[0]>scores[1] ? playerNames[0] :
scores[1]>scores[0] ? playerNames[1] :
"Tie"
}
</h3>

<button onclick="location.reload()">Play Again</button>
`;
}

/* Start automatically */
startGame();
