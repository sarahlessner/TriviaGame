//create a multi dimensional array
//questions at index 0
//choices at 1-4
//value for correct answer at 5
var qnaArray = [

	["What is the most popular dog breed in the United States?", "Golden Retriever", "Bulldog", "Maltese", "Labrador Retriever", "4", "assets/images/blacklab.png"],
	["Which breed of dog is commonly associated with firehouses?", "Dalmatian", "German Shepherd", "Rottweiler", "Pitbull", "1", "assets/images/dalmatian.png"],
	["How many teeth do dogs typically have?", "24", "38", "42", "32", "3", "assets/images/puppy.png"],
	["The Chihuahua is a breed of dog believed to originate from what country?", "Canada", "Mexico", "Argentina", "Australia", "2", "assets/images/ratdog.png"],
	["Which command is most commonly taught to dogs in training?", "Stay", "Sit", "Come", "Down", "2", "assets/images/sit.png"],
	["Through which part of the body do dogs sweat?", "Mouth", "Ears", "Nose", "Paws", "4", "assets/images/dogpaw.png"],
	["Which breed is the preferred breed of the Queen of England?", "Pomeranian", "Poodle", "Corgi", "Bichon Frise", "3", "assets/images/corgi.png"],
	["Which dog breed is known for their black tongue?", "Chow Chow", "Husky", "Weimaraner", "Samoyed", "1", "assets/images/chow.png"],
	["Which breed was once known as St. John's Newfoundland?", "Golden Retriever", "Labrador", "Newfoundland", "Irish Setter", "2", "assets/images/choclab.png"],
	["Puppies are delivered how many weeks after conception?", "36 weeks", "16 weeks", "9 weeks", "25 weeks", "3", "assets/images/huskypups.png"]

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
	$("#tryagain").empty();
	//calls function for a new question/answer pair
	displayQ();
}

//create function for displaying question/answer pair

function displayQ() {

	$("#qresult").empty();
	$("#images").attr("src","");

	if (questionIdx === qnaArray.length) {
		$("#countdown").empty();
		$("#correct").append("You got "+correct+" questions right");
		$("#incorrect").append("You got "+incorrect+" questions wrong");
		$("#final-result").text("GAME OVER!");
		$("#tryagain").html("<button class='startbtn' onclick='beginGame()'>Try Again?</button>");
	}

	else {

		//create variables to store result of grabbing question/indexes from multi-dimensional array
		var question = qnaArray[questionIdx][0];
		//display question and answers to user
		$("#question").html("<h2>"+question+"</h2>");
		
		for (i=1; i<(qnaArray[questionIdx].length-2); i++) {

			var ans = qnaArray[questionIdx][i];

			$("#choices").append("<label class='choices'><input type='radio' class='radiobtn' name='answers' value='"+i+"'/>"+ans+"</label><br>");
		
		};
		//submit button
		$("#submit").append("<button class='submit' onclick='submitAnswer()'>Submit</button>");



		//set countdown variable
		countdown = 20;
		$("#countdown").css("font-size", (150-(5*countdown)));
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
	$("#countdown").css("font-size", (150-(5*countdown)));
	$("#countdown").text(countdown);
	//if countdown is 0 clear the interval, increase incorrect count and display result
	if (countdown === 0) {
		$("#qresult").html("TIME'S UP! ");
		$("#images").attr("src",qnaArray[questionIdx][6]);
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
		$("#qresult").text("CORRECT! ");
		//display photo at questionIdx - photos at last index 6
		$("#images").attr("src",qnaArray[questionIdx][6]);
		//display answer
		displayAnswer();
		}
		else {
		incorrect++;
		$("#question").empty();
		$("#choices").empty();
		$("#submit").empty();
		$("#qresult").text("WRONG! ");
		//display photo at questionIdx again
		$("#images").attr("src",qnaArray[questionIdx][6]);
		//display answer
		displayAnswer();
		}

		
	}
// call function that sets a timeout to display new question

};

//function to get correct answer

function displayAnswer() {
	$("#countdown").empty();
	correctAnswerIdx = qnaArray[questionIdx][5];
	correctAnswerIdx = parseInt(correctAnswerIdx);
	var correctAnswerText = qnaArray[questionIdx][correctAnswerIdx];
	$("#qresult").append("<br>"+"The answer was "+correctAnswerText);
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





	






























