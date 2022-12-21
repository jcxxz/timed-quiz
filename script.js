const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById
('answer-btns')
 
let shuffledQuestions, currentQuestionsIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionsIndex++
    setNextQuestion()
})

function startGame() {
console.log('Started')
startButton.classList.add('hide')
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
        answerButtonElement.appendChild(button)
    } )
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild
        (answerButtonElement.firstChild).forEach(button => {
            setStatusClass(button, button.dataset.correct)
        })
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }else {
        element.classList.add('wrong')
    }
    }

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.wrong('wrong')
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
     Array.from(answerButtonElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
    })
}
nextButton.classList.remove('hide') 


const questions = [
    {
        question: 'what is 2+4?',
        answers: [
            { text: '6', correct: true },
            { text: '22', correct: false }
        ],
    

    
        question: 'what is 2+4?',
        answers: [
            { text: '6', correct: true },
            { text: '22', correct: false }
        ],
    

    
        question: 'what is 2+4?',
        answers: [
            { text: '6', correct: true },
            { text: '22', correct: false }
        ],

        question: 'what is 2+4?',
        answers: [
            { text: '6', correct: true },
            { text: '22', correct: false }
        ],
    }
]

