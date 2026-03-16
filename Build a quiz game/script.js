const questions = [
  {
    category: "Gaming",
    question: "Which is the darkSoul game?",
    choices: ["GTA", "MARIO", "ELDEN RING"],
    answer: "ELDEN RING",
  },
  {
    category: "Geography",
    question: "What is the capital of Japan?",
    choices: ["Seoul", "Beijing", "Tokyo"],
    answer: "Tokyo",
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["Thomas Jefferson", "George Washington", "Abraham Lincoln"],
    answer: "George Washington",
  },
  {
    category: "Entertainment",
    question: "Which movie won the Oscar for Best Picture in 1994?",
    choices: ["Pulp Fiction", "Forrest Gump", "The Shawshank Redemption"],
    answer: "Forrest Gump",
  },
  {
    category: "Programming",
    question: "Which language is used for web styling?",
    choices: ["HTML", "Python", "CSS"],
    answer: "CSS",
  },
];

function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomComputerChoice(choice) {
  const randomIndex = Math.floor(Math.random() * choice.length);
  return choice[randomIndex];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return (
      "The computer's choice is wrong. The correct answer is: " +
      question.answer
    );
  }
}
