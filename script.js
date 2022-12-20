const startBtn = document.getElementById('start-btn')
const nextBtn = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById
('answer-btns')
 
let shuffledQuestions, currentQuestionsIndex

startBtn.addEventListener('click', startGame)

function startGame() {
console.log('Started')
startBtn.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionsIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionsIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        } 
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    } )
}

function resetState() {
    nextBtn.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children)
}

const questions = [
    {
        question: 'what is 2+4?',
        answers: [
            { text: '6', correct: true },
            { text: '22', correct: false }
        ]
    }
]