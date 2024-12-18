let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","green","purple"];

let started = false;

let level = 0;

let score = 0;


let highScore = document.querySelector("#highScore");

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
  if(started == false){
    console.log("game is started...");
    started = true;

    levelUp();
  }
})

function checkAns(idx){//function for matching sequence
  if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
      setTimeout(levelUp,1000);
      //levelUp();
    }
  }else{
    //console.log("game over");
    let hscore = 0;
    let score = level*2;
    if(hscore < score){
      hscore = score;
    }else{
      console.log("nothing");
    }
    h2.innerHTML = `Game Over! Your score was <b>${score}</b><br>Press any key to restart.`;
    highScore.innerHTML = `Highest Score ${hscore}`;

    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor = "white";
    },200)
    restart();
  }

}

function btnFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },220)
}

function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  },220)
}

function levelUp(){
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random()*3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq)

  btnFlash(randBtn);
}

function btnPress(){
  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
  btn.addEventListener("click",btnPress);
}

function restart(){
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
  
}





