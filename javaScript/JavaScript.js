const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
//Used Const to declare answer options. Attempted to use getElementById . 

//Attempted to create an array as instructed by Professor to switch questions. 
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


//Created function to change questions through innerHTML
function displayingQuestion() {

    choiceA.innerHTML = TriviaQuestions.choiceA;
    choiceB.innerHTML = TriviaQuestions.choiceB;
    choiceC.innerHTML = TriviaQuestions.choiceC;


}