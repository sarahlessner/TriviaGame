//create an array of questions
var questionsArray = ["1", "2", "3", "4"];
//create an array of answer sets at the same index as the corresponding question
var answersArray = [
	["1-a1", "1-a2", "1-a3", "1-a4"],
	["2-a1", "2-a2", "2-a3", "2-a4"],
	["3-a1", "3-a2", "3-a3", "3-a4"],
	["4-a1", "4-a2", "4-a3", "4-a4"],
];
var correctsAnswers = [2,0,3,1];

//create an array of photos that will display with correct answer

//create global variables for:
//index of the question/answer pair
var questionIdx = 0;
//timer
var timer;
//countdown for seconds to countdown time to answer question
var countdown = 30;
//variable to store correct/incorrect selection count
var correct = 0;
var incorrect = 0;
$("#correct").text(correct);
$("#incorrect").text(incorrect);


//create onclick function for start button

	//hide start button

	//calls function for a new question/answer pair

//create function for displaying question/answer pair
//will display on click - start and 5 second delay with timer re-set

	//make question-answer container visible

	//calls function for timer countdown when new question/answer is displayed

	//jquery to display "questions" at questionIdx

	//variable to store "answers" at questionIdx
	var answers = answersArray[questionIdx];

	//use jquery to put answers in corresponding input element







//create function to run an interval timer that counts down time to make a selection

	
	//stop timer if 
































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
