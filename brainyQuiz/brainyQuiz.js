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

  for (let i = 0; i < quizQuestions.length; i++) {
    console.log(i);
    console.log(quizQuestions.length);
    console.log(quizQuestions[i]);

    let currentQuestion = quizQuestions[i];
    let userAswer = prompt(
      currentQuestion.question + ": " + currentQuestion.options
    );

    console.log(currentQuestion);

    while (
      userAswer.toUpperCase() !== "A" &&
      userAswer.toUpperCase() !== "B" &&
      userAswer.toUpperCase() !== "C" &&
      userAswer.toUpperCase() !== "D"
    ) {
      alert("Please enter a valid option: A, B, C, or D.");
      userAswer = prompt(
        currentQuestion.question + ": " + currentQuestion.options
      );
    }
    if (currentQuestion === questionThree) {
      if (userAswer.toUpperCase() === currentQuestion.answer) {
        alert("Correct!");
        score++;
      } else if (userAswer.toUpperCase() === currentQuestion.altAnswer) {
        alert("I mean it is correct but Who knows that?");
        score++;
      } else {
        alert(
          "Wrong! The correct answer was" +
            " " +
            currentQuestion.answer +
            " " +
            "or" +
            " " +
            currentQuestion.altAnswer +
            "."
        );
      }
    }
    if (userAswer.toUpperCase() === currentQuestion.answer) {
      alert("Correct!");
      score++;
    } else {
      alert("Wrong! The correct answer was" + " " + currentQuestion.answer);
    }
  }

  console.log("we are outside the loop now");
  alert("Quiz over! You scored " + score + " out of " + quizQuestions.length);
  if ((rerun = confirm("Do you want to retake the quiz? (yes/no):"))) {
    rerun = false;
  }
  break;
}
