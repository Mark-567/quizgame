const quizForm = document.getElementById('quiz-form');
const result = document.getElementById('result');

quizForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let score = 0;

  const q1Answer = document.querySelector('input[name="city"]:checked');
  if (q1Answer && q1Answer.value === 'Paris') {
    score++;
  }

  const q2Answer = document.querySelector('input[name="planet"]:checked');
  if (q2Answer && q2Answer.value === 'Jupiter') {
    score++;
  }

  const q3Answer = document.querySelector('input[name="artist"]:checked');
  if (q3Answer && q3Answer.value === 'Leonardo da Vinci') {
    score++;
  }

  result.textContent = `Your score is ${score}/3.`;
});
