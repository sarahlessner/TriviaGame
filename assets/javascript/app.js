//create a multi dimensional array
//questions at index 0
//choices at 1-4
//value for correct answer at 5
var qnaArray = [

	["Who sang x?", "Band Ax", "Band Bx", "Band Cx", "Band Dx", "1"],
	["Who sang y?", "Band Ay", "Band By", "Band Cy", "Band Dy", "2"],
	["Who sang z?", "Band Az", "Band Bz", "Band Cz", "Band Dz", "3"],
	["Who sang q?", "Band Aq", "Band Bq", "Band Cq", "Band Dq", "4"]

];

//TODO: create an array of photos that will display with correct answer

//create global variables for:
//index of the question/answer pair
var questionIdx;
var correctAnswerIdx;
//countdown for seconds to countdown time to answer question
var countdown;
var timer;
//variable to store correct/incorrect selection count
var correct = 0;
var incorrect = 0;


$("button").on("click", beginGame);

//create function for new game click event
function beginGame() {
	//set questionIdx to zero
	questionIdx = 0;
	//clear display of correct/incorrect and set to 0
	correct = 0;
	$("#correct").empty();
	incorrect = 0;
	$("#incorrect").empty();
	$("#final-result").empty();
	//hide new game button
	$("#start").empty();
	//calls function for a new question/answer pair
	displayQ();
}

//create function for displaying question/answer pair

function displayQ() {

	$("#qresult").empty();

	if (questionIdx === qnaArray.length) {
		$("#countdown").empty();
		$("#correct").append("You got "+correct+" questions right");
		$("#incorrect").append("You got "+incorrect+" questions wrong");
		$("#final-result").text("GAME OVER!");
		$("#start").html("<button onclick='beginGame()'>Try Again</button>");
	}

	else {
		//store the selection of the q-and-a element as a variable since I need it a bunch
		var qandA = $("#q-and-a");
		//create variables to store result of grabbing question/indexes from multi-dimensional array
		var question = qnaArray[questionIdx][0];
		var ans1 = qnaArray[questionIdx][1];
		var ans2 = qnaArray[questionIdx][2];
		var ans3 = qnaArray[questionIdx][3];
		var ans4 = qnaArray[questionIdx][4];
		//display question and answers to user
		qandA.html("<h2>"+question+"</h2>");
		qandA.append("<input type='radio' name='answers' value='1'>"+ans1+"<br>");
		qandA.append("<input type='radio' name='answers' value='2'>"+ans2+"<br>");
		qandA.append("<input type='radio' name='answers' value='3'>"+ans3+"<br>");
		qandA.append("<input type='radio' name='answers' value='4'>"+ans4+"<br>");
		qandA.append("<button onclick='submitAnswer()'>Submit</button>");


		//set countdown variable
		countdown = 20;
		//set interval for countdown
		timer = setInterval(hourGlass, 1000);
		//display countdown in html
		console.log(countdown);
		$("#countdown").text(countdown);
	}
}


//function for the question timer countdown
	
function hourGlass() {

	//decrement "countdown"
	countdown--;
	//display "countdown"
	$("#countdown").text(countdown);
	//if countdown is 0 clear the interval, increase incorrect count and display result
	if (countdown === 0) {
		$("#qresult").html("TIME'S UP!");
		clearInterval(timer);
		$("#q-and-a").empty();
		incorrect++;
		displayAnswer();
	}


}



//create an on click event for answer submission
function submitAnswer() {
	clearInterval(timer);
	correctAnswerIdx = qnaArray[questionIdx][5];
	var answers = document.getElementsByName("answers");
	var answer = -1;
	for (var i=0; i<answers.length; i++) {
		if (answers[i].checked) {
			answer = answers[i].value;
		}
	}
	if (answer == -1) {
		alert("Choose an answer!");
	}
	else {
		if (answer == correctAnswerIdx) {
		correct++;
		$("#q-and-a").empty();
		$("#qresult").text("CORRECT!");
		//display photo at questionIdx
		//display answer
		displayAnswer();
		}
		else {
		incorrect++;
		$("#q-and-a").empty();
		$("#qresult").text("WRONG!");
		//display photo at questionIdx
		//display answer
		displayAnswer();
		}

		
	}
// call function that sets a timeout to display new question

};

//function to get correct answer

function displayAnswer() {

	correctAnswerIdx = qnaArray[questionIdx][5];
	correctAnswerIdx = parseInt(correctAnswerIdx);
	var correctAnswerText = qnaArray[questionIdx][correctAnswerIdx];
	$("#qresult").append(" "+correctAnswerText);
	questionIdx++;
	setTimeout(displayQ, 3500);

};




//function to display final game stats

	//jquery to display incorrect and correct answers count to HTML

	//display new game button for user to play again






//function to display and adjust various counters

	//clearInterval

	//highlight or otherwise display correct answer and a corresponding photo

	//if countdown is 0

		//display message that time is up

		//increase incorrect answer count

	// else

		//if value of user answer is equal to correct answer array at questionIdx

			//display message that user is correct

			//increase correct answer count

			
		//else

			//display message that they are incorrect

			//increase incorrect answer count

	//increment questionIdx

	//set timer to display results page or new question after 5 seconds

		//check if all questions have displayed (questionIdx <= # of questions)

			//if they have, then call function that displays final game stats

			//if not, call function that displays a new question/answer set





	
































// var questionList = [
// 	"Q1",// Question 1
// 	"Q2",
// 	"Q3"
// 	];
// var answerList = [
// 	["Q1-A1","Q1-A2","Q1-A3","Q1-A4"],//  Answers for Question 1
// 	["Q2-A1","Q2-A2","Q2-A3","Q2-A4", "Q2-A5"],
// 	["Q3-A1","Q3-A2","Q3-A3"],
// ];

// // Select your Q/A index, and fetch Q and As to internal variables
// var randIdx = ...normal random stuff...;
// var randQ = questionList[randIdx];	// The actual question String
// var randAList = answerList[randIdx];


// // Display stuff to user
// $("#textQ").text(randQ); // Question string pushed to page

// $("#textA0").text(randAList[0]);	// Answer 1 string pushed ot page
// $("#textA1").text(randAList[1]);	// Answer 1 string pushed ot page
// $("#textA2").text(randAList[2]);	// Answer 1 string pushed ot page
// $("#textA3").text(randAList[3]);	// Answer 1 string pushed ot page

// for(var i = 0; i < randAList.length; i++) {
// 	var name = "#textA" + i.toString();
// 	$(name).text(randAList[i]);
// }
