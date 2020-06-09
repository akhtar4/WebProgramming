const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");


let question1 = [{
        question: "Who directed the Dark Knight Trilogy?",
        choiceA: "Steven Spielberg",
        choiceB: "Crisopher Nolan",
        choiceC: "Thanos",
        correct: "B"
    }

    {
        question: "Who created SpaceX?",
        choiceA: "Bill Gates",
        choiceB: "Jeff Bezos",
        choiceC: "Elon Musk",
        correct: "C"
    }

    {
        question: "Who was the first man on the moon?",
        choiceA: "Scooby Doo",
        choiceB: "Jackie Chan",
        choiceC: "Niel Armstrong",
        correct: "C"
    }
]

function displayingQuestion() {
    let TriviaQuestions = questions[currentQuestion];
    question.innerHTML = "<h1>" + h1.question + "</h1>";
    choiceA.innerHTML = TriviaQuestions.choiceA;
    choiceB.innerHTML = TriviaQuestions.choiceB;
    choiceC.innerHTML = TriviaQuestions.choiceC;


}