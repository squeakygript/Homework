const questionElement = document.getElementById("questionText");
const answerOptionsContainer = document.getElementById("answerOptions");

const questionOne = {
  question: "What is the capital of France?",
  options: [" A) Berlin", " B) Madrid", " C) Paris", " D) Rome"],
  answer: "C",
};
const questionTwo = {
  question: "What is 2 + 2?",
  options: [" A) 3", " B) 4", " C) 5", " D) 6"],
  answer: "B",
};
const questionThree = {
  question: "What is the largest planet in our solar system?",
  options: [" A) Earth", " B) Jupiter", " C) Mars", " D) who knows?"],
  answer: "D",
  altAnswer: "B",
};

const quizQuestions = [questionOne, questionTwo, questionThree];

alert(
  "Welcome to Brainy Quiz! You will be asked 3 questions. Please answer by typing the letter corresponding to your choice. Good luck!"
);
rerun = false;
while (!rerun) {
  let score = 0;

  let currentQuestionIndex = 0;
  function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answerOptionsContainer.innerHTML = "";

    const options = currentQuestion.options;
    for (const option of options) {
      const button = document.createElement("button");
      button.textContent = option;
      answerOptionsContainer.appendChild(button);
      button.addEventListener("click", () => {
        console.log("User selected option: " + option);
      });
    }
  }

  ////if (currentQuestion === questionThree) {
  //if (userAswer.toUpperCase() === currentQuestion.answer) {
  // alert("Correct!");
  //score++;
  //} else if (userAswer.toUpperCase() === currentQuestion.altAnswer) {
  // alert("I mean it is correct but Who knows that?");
  //score++;
  // } else {
  // alert(
  //  "Wrong! The correct answer was" +
  //    " " +
  //    currentQuestion.answer +
  //    " " +
  //   "or" +
  //   " " +
  //   currentQuestion.altAnswer +
  //   "."
  // );
  // }
  displayQuestion();
  //if (
  //userAswer.toUpperCase() === currentQuestion.answer &&
  //currentQuestion !== questionThree;
  //) {
  //alert("Correct!");
  //score++;
  //} //else if (
  //userAswer.toUpperCase() !== currentQuestion.answer &&
  //currentQuestion !== questionThree;
  //) {
  //alert("Wrong! The correct answer was" + " " + currentQuestion.answer);
  //}
  //}
  alert("Quiz over! You scored " + score + " out of " + quizQuestions.length);
  if ((rerun = confirm("Do you want to retake the quiz? (yes/no):"))) {
    rerun = false;
  } else {
    rerun = true;
  }
}
