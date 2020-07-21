const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            //if answer is correct we increase the score to 25% depends how many questions
            score += 25;
        }
    });

   //show result on page
   //scrollTo(0,0);does the same without window
   window.scrollTo(0,0);//scrolls to the top to show answer
   result.querySelector('span').textContent = `${score}%`;
   result.classList.remove('d-none');

    //score animation goes up to the score and stops right there
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else{
            output++;
        }
    }, 10);


});




