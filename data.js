// keeps track of quiz score
var score = 0;
//  used to access current question by its index value in the questionData array
var questionArrayIndex = 0;
// used to render current question in numerical representation
var currentQuestionNumber = 0;
// used to determine state of quiz button if submit or next
var isButtonSubmit = true;
// object to store question data (question being asked, possible answers, correct answer)
const questionData = [
    {
        questionNumber: 1,
        question: 'What are the 3 current hero roles in Overwatch?',
        answers: ['Tank, Attack, Support', 'Protection, Damage, Support', 'Tank, Damage, Support', 'Tank, Damage, Healer'],
        correctAnswer: 2,
    },
    
    {
        questionNumber: 2,
        question: 'How many World of Warcraft expansions are there in 2019?',
        answers: [4, 7, 6, 2],
        correctAnswer: 1,
    },

    {
        questionNumber: 3,
        question: 'What year was the game Hearthstone released?',
        answers: [2012, 2015, 2014, 2018],
        correctAnswer: 2,
    },

    {
        questionNumber: 4,
        question: 'In Diablo 3 which class has the ability called "Zombie Charger"?',
        answers: ['Necromancer', 'Witch Doctor', 'Demon Hunter', 'Monk'],
        correctAnswer: 1,
        
    },

    {
        questionNumber: 5,
        question: 'In World of Warcraft Vanilla what is the final raid boss of Naxxramas?',
        answers: ['Ragnaros', 'Prince Melchezaar', "Kel'thuzad", 'Hemit Nesingwary'],
        correctAnswer: 2,
    }
]
// used to store html used for start and end view of quiz (keeps function.js shorter/cleaner)
const startFinishHtml = [
    {
        header: '<h1>Blizzard Entertainment Game Knowledge Quiz</h1>'
        + '<p id="italic"><i>How well do you know your Blizzard games!</i></p>',
        main: '<button id="start">Start</button>'
    },

    {
        header: '<h1>Quiz Results</h1>' +
        `<h2>You scored ${score}/5`,
        main: '<button id="retake">Retake</button>'
        
    }
]

