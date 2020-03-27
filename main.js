// select all elements
//const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const starDiv = document.getElementById("starContainer");
const qlevel = document.getElementById("qlevel");
const levels = document.getElementById("levels");
const yessound = document.getElementById("yesaudio");
const nosound = document.getElementById("noaudio");
const levelreportDiv = document.getElementById("levelreport");	
const scorereportDiv = document.getElementById("scorereport");	
	
	
// create some variables

//const lastQuestion = questions.length - 1;

const lastQuestion = 10 -1; //asking at most ten questions
let runningQuestion = 0;
let count = 0;
const questionTime = 30; // 30s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;
let currentlevel=1;

//document.getElementById("lv1").style.backgroundColor = "lightblue";

// getting questions from outside files 

//var questions = [];


function setDifficulty(level){
	currentlevel = level;
	//alert(currentlevel);
	//document.getElementById("lv1").style.backgroundColor = "white";
	//document.getElementById("lv2").style.backgroundColor = "white";
	//document.getElementById("lv3").style.backgroundColor = "white";
	
	//document.getElementById("lv"+level).style.backgroundColor = "lightblue";
	qlevel.innerHTML = "Level: "+ currentlevel ;
	startQuiz(level)
}

// difficulty level
function generateQuestion(){
	//additionQ = additionQ.filter(item => item.level ==currentlevel);	
	//subtractionQ = subtractionQ.filter(item => item.level == currentlevel);	
	//multiplicationQ = multiplicationQ.filter(item => item.level ==currentlevel);	
	//divisionQ = divisionQ.filter(item => item.level ==currentlevel);	
	questions = questionbank.filter(item => item.level == currentlevel);
	//questions.push(...additionQ,...subtractionQ,...multiplicationQ,...divisionQ)
	shuffleArray(questions);
	
}







// randomize question
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}



// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = "<p> A. " + q.choiceA +"</p>";
    choiceB.innerHTML = "<p> B. " + q.choiceB +"</p>";
    choiceC.innerHTML = "<p> C. " + q.choiceC +"</p>";
}

//start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(level){
    start.style.display = "none";
	levels.style.display = "none";
	generateQuestion();
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// restart at the given level
function mainmenu(){
	scoreDiv.style.display = "none";
	quiz.style.display = "none";
	start.style.display = "block";
	levels.style.display = "block";
	runningQuestion = 0;
	count = 0;
	score = 0;
	progress.innerHTML = "";
}


// restart at the given level
function restart(level){
	scoreDiv.style.display = "none";
	runningQuestion = 0;
	count = 0;
	score = 0;
	progress.innerHTML = "";
	startQuiz(level);
}

// restart with level up
function levelup(){
	if (currentlevel < 5){
		currentlevel++;
	}
	qlevel.innerHTML = "Level: "+ currentlevel ;
	//alert(currentlevel);
	restart(currentlevel);
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render
function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}



function checkAnswer(answer){
	// checkAnswer
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
		yessound.play();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
		nosound.play();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#ffcc00";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#e4e4e4";
	document.getElementById(runningQuestion).style.borderColor = "#e4e4e4";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/(lastQuestion+1));
    const yellowstar = Math.round(scorePerCent / 10);
	const graystar = 10 - yellowstar;
    // choose the image based on the scorePerCent
   
    
	levelreportDiv.innerHTML =  "<p> Level "+ currentlevel + "</p>";
	scorereportDiv.innerHTML =  "<p> Score: "+ scorePerCent + "</p>";
	
	starDiv.innerHTML = "";
	//alert(yellowstar);
	//starDiv.innerHTML += "<img class='inline-block' src='img/GoldenStar.png'>";
	//starDiv.innerHTML += "<img class='inline-block' src='img/GoldenStar.png'>";
	for (let counter= 0;counter < yellowstar; counter++){
			starDiv.innerHTML += "<img src='img/GoldenStar.png'>";
			//alert(counter);
	}
	for (let counter= 0;counter < graystar; counter++){
			starDiv.innerHTML += "<img src='img/GrayStar.png'>";
			//alert(counter);
	}
	
    //scoreDiv.innerHTML = "<img src="+ img +">";
	//scoreDiv.innerHTML = ""
    //scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}





















