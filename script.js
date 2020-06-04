const arrPredictions = ['Да', 'Нет', 'Пока неясно', 'u fag', 'Попробуй позже', 'Eh thats kinda gay'],
    ball = document.querySelector('.ball__img'),
    textPredictions = document.querySelector('.prediction');

makePrediction = () => {
    let i = Math.floor(Math.random() * 6);
    textPredictions.textContent = arrPredictions[i];
};
ball.addEventListener('click', makePrediction);