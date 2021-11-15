const quizDB = [{
        question: "Q1:JavaScript is a ___ -side programming language.",
        a: "client",
        b: "both",
        c: "server",
        d: "none",
        ans: "ans2"
    },
    {
        question: "Q2:Which of the following will write the message “Hello DataFlair!” in an alert box?",
        a: " alertBox(“Hello DataFlair!”);",
        b: " alert(Hello DataFlair!);",
        c: "msgAlert(“Hello DataFlair!”);",
        d: " alert(“Hello DataFlair!”);",
        ans: "ans4"
    },
    {
        question: "Q3:How do you find the minimum of x and y using JavaScript?",
        a: " min(x,y);",
        b: " Math.min(x,y)",
        c: " Math.min(xy)",
        d: " min(xy);",
        ans: "ans2"
    },
    {
        question: "Q4:Which JavaScript label catches all the values, except for the ones specified?",
        a: " catch",
        b: " label",
        c: " try",
        d: " default",
        ans: "ans4"
    },
    {
        question: "Q5:Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
        a: " if(x 2)",
        b: " if(x = 2)",
        c: " if(x == 2)",
        d: " if(x != 2 )",
        ans: "ans3"
    },
]




const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer ');
const scores = document.querySelector('#scores');

 let questionCount = 0;
let score = 0;


const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;


};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}




submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if (checkedAnswer == quizDB[questionCount].ans) {
        score++;
    }
    questionCount++;

    deselectAll();


    if (questionCount < quizDB.length) {
        loadQuestion();
    }
    else {
       scores.innerHTML = `
       <h3> Your score is ${score}/${quizDB.length} </h3>
       <button class="btn" onclick="location.reload()">Play Again </button>
       `;
       scores.classList.remove('scoreArea');

    }

});