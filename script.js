const questionElement = document.getElementById("question");
const nextButton = document.getElementById("next-button");

const questions = [
  {
    question: "Who won the ballon d'Or in 2022?",
    options: ["mbappe", "benzema", "halland"],
    answer: "benzema"
  }
  ,{
    question: "Who won the ballon d'Or in 2012?",
    options: ["inesta", "ronaldo", "messi"],
    answer: "messi"
  }
  ,{
    question: "Who won the ballon d'Or in 2017?",
    options: ["ronaldo", "salah", "messi"],
    answer: "ronaldo"
  }
,
  {
    question: "Who won the ballon d'Or in 2008?",
    options: ["sauréz", "messi", "ronaldo"],
    answer: "ronaldo"
  }
  ,{
    question: "Who won the ballon d'Or in 2000?",
    options: ["henry", "figo", "zidane"],
    answer: "figo"
  }
  ,{
    question: "Who took the champions league 2015?",
    options: ["real", "barca", "juvents"],
    answer: "barca"
  }
  ,{
    question: " Who took the champions league 2000?",
    options: ["juvents", "real", "barca"],
    answer: "real"
  }
  ,{
    question: "Who took the champions league 2014?",
    options: ["bayern", "barca", "real"],
    answer: "real"
  }
  ,{
    question: "Who took the champions league 2012?",
    options: ["real", "barca", "chelse"],
    answer: "chelse"
  }
  ,{
    question: "Who took the champions league 1999?",
    options: ["manchester", "chelse", "real"],
    answer: "manchester"
  }
  // Add more questions here
];

let currentQuestionIndex = 0;

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  currentQuestion.options.forEach((option, index) => {
    const inputElement = document.createElement("input");
    inputElement.type = "radio";
    inputElement.name = "answer";
    inputElement.value = option;
    
    const labelElement = document.createElement("label");
    labelElement.textContent = option;
    
    const brElement = document.createElement("br");
  
    questionElement.appendChild(inputElement);
    questionElement.appendChild(labelElement);
    questionElement.appendChild(brElement);
  });
}

function showNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    questionElement.innerHTML = ``;
    showQuestion();
  } else {
    questionElement.textContent = "Quiz completed!";
    nextButton.disabled = true;
  }
}

nextButton.addEventListener("click", showNextQuestion);

showQuestion(); // Show the first question on page load