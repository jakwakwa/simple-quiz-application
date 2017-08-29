// Question (Constructor Function)

function Question(questionText, choices, answer) {

  this.questionText = questionText;
  this.choices = choices;
  this.answer = answer;

}

// Checks if the user's choice is the correct answer
Question.prototype.IsCorrectAnswer = function () {
	return this.answer === choice;
}