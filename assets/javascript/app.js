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

		//create variables to store result of grabbing question/indexes from multi-dimensional array
		var question = qnaArray[questionIdx][0];
		//display question and answers to user
		$("#question").html("<h2>"+question+"</h2>");
		
		for (i=1; i<(qnaArray[questionIdx].length-1); i++) {

			var ans = qnaArray[questionIdx][i];

			$("#choices").append("<label class='choices'><input type='radio' class='radiobtn' name='answers' value='"+i+"'/>"+ans+"</label><br>");
		
		};
		//submit button
		$("#submit").append("<button class='submit' onclick='submitAnswer()'>Submit</button>");



		//set countdown variable
		countdown = 20;
		//set interval for countdown
		timer = setInterval(hourGlass, 1000);
		//display countdown in html
		console.log(countdown);
		$("#countdown").text(countdown);
		debugger;
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
		$("#question").empty();
		$("#choices").empty();
		$("#submit").empty();
		incorrect++;
		displayAnswer();
	}


}



//create an on click event for answer submission
function submitAnswer() {
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
		clearInterval(timer);
		if (answer == correctAnswerIdx) {
		correct++;
		$("#question").empty();
		$("#choices").empty();
		$("#submit").empty();
		$("#qresult").text("CORRECT!");
		//display photo at questionIdx
		//display answer
		displayAnswer();
		}
		else {
		incorrect++;
		$("#question").empty();
		$("#choices").empty();
		$("#submit").empty();
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





	






























