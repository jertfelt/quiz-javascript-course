//* Navigation bar buttons:
let changingButton = document.getElementById("changebutt");
let retryButton = document.getElementById("yestryagain");

//* Changing background colors (with a little help from my friend CSS)

changingButton.addEventListener("click", () => {
console.log("test")
if (document.body.style.backgroundColor === "thistle")
  {
    document.body.style.backgroundColor = "#031229";
document.querySelector('body').className ='newfontcolor';}
  else {
document.body.style.backgroundColor = "thistle";
document.querySelector('body').className = 'original';
}})

//* A button for "retry", which will refresh the page entirely

retryButton.addEventListener("click", () => {
    let refreshing = confirm("Are you sure? This is taking you back to the start of the quiz now!")
    if (refreshing ===true) {
        location.reload();
    }})


//* Quiz structure and questions:

let quiz = document.getElementById("quizHome");

const quizQuestions = [
  {
    question : "Which of the following is not one of Rapunzel's chores?",
    answers : {
      a: "Candle making",
      b: "Crochet", //*right answer
      c: "Chess",
    },
    correct : "b"
  },
  {
    question : "How many times does Cinderella loose control over her shoe?",
    answers : {
      a: "1",
      b: "2",
      c: "3",
    },
    correct : "c, that clumpsy bee"
  },
  {
    question : "How goes the dishonor rant that Mushu performs in Mulan?",
    answers : {
      a: "Dishonor on your whole family! Make a note of this: dishonor on you, dishonor on your cow",
      b: "Dishonor on your whole ancestry line and all of your descendants",
      c: "Dishonor!! DISHONOR!! DIS-HONOOOOOR!"
    },
    correct : "a"
  },
  {
    question : "What's the first thing Jasmine says in response to Aladdin when he asks if she trusts him?",
    answers : {
      a: "What?",
      b: "I don't know",
      c: "I do",
    },
    correct: "a",
  },
  {
    question: "When was Disney founded?",
    answers: {
      a : "1934",
      b : "1923",
      c : "1945",
    },
    correct: "b",
  },
{
  question: "Who are the 'sinister cats' in Disney? (Sinister, not necessarily evil)",
  answers: {
    a: "Scar, Thomas O'Malley, Cheshire cat, Lucifer, Shere Khan, Felicia",
    b: "Scar, Cheshire cat, Felicia, Shere Khan",
    c: "Scar, Shere Khan, Felicia, Cheshire Cat, Lucifer",
  },
  correct: "c",
},
{
  question: "When was the Hercules movie released?",
  answers: {
    a: "1998",
    b: "1997",
    c: "1996",
  },
  correct: "b"
},
{
  question: "Who is Aladdin's father?",
  answers: {
    a: "A beggar in a cell",
    b: "The king of thieves",
    c: "A foreign prince",
  },
  correct: "b",
},
]

//*put the multiple choices in a separate array for the purpose of creating divs, hence practising two ways of creating buttons and such:
const quizQuestionsMultiple = [ {
// (plot twist: alla är rätt)
question: "Which ones of these great movies were released in the 80s?",
answers: {
  a: "Tron",
  b: "The Great Mouse Detective",
  c: "Who framed Roger Rabbit",
  d: "Oliver & Company",
  e: "The Little Mermaid",
},
correct: {
  a: "Tron",
  b: "The Great Mouse Detective",
  c: "Who framed Roger Rabbit",
  d: "Oliver & Company",
  e: "The Little Mermaid",
},
},
{
question : "Which ones of these are Disney villains?",
answers: {
  a: "Jafar",
  b: "Bruce",
  c: "Hades",
},
correct: {
  a: "Jafar",
  c: "Hades",
},
},]

//* creating an empty array for future divs with separate DIVs per question: 
let quizBodyArr = [];

//* creating HTML-radiobuttons for each available answer through looping through the object-array

quizQuestions.forEach((currentQuest, questNumb) => {
  let visibleArray = [];
  for (choice in currentQuest.answers){
    //* creating HTML and pushing
    visibleArray.push(`<input type="radio" class= "outLooped" id ="question${questNumb}" name="question${questNumb}" value="${choice}">
    ${currentQuest.answers[choice]}<br>
  `  )} 

  //*Pushing the array into an answers div, along with divs for questions and images, and then appending it by adding it into quizQuestions innerHTML. 

  quizBodyArr.push(
    `<div class="question"> ${currentQuest.question} </div> 
    <div class="answers1"> ${visibleArray.join('')} </div><br>`
  );
});
quiz.innerHTML = quizBodyArr.join('');
//*(see comments.txt) about join

//*? Instead of creating an addEventListener to every button (it seems impossible, believe me, I. HAVE. TRIED.) I will instead have a button that submits answers - incidentally the same one as "Check answers" that will loop over user answers, check them, and then show the result. 

let checkAnswersButt = document.getElementById("check");
let resultDiv = document.getElementById("result")
let numCorrect = 0;

function scoreResults(){
  let resultbox = document.createElement("div");
  let resulttext = document.createElement("h3");
  resultDiv.appendChild(resultbox);
  resultbox.appendChild(resulttext);

let gettingAnswersFromQuiz = document.querySelectorAll(".answers1"); 

  //*this is looping through the "ordinary questions"
  quizQuestions.forEach((currentQ, qNumb) => {
    let gettingAnswers = gettingAnswersFromQuiz[qNumb];
    let userInput = `input[name=question${qNumb}]:checked`; 
    //*  ({}) is an empty object. (see comments.txt) 
    let userChoice = (gettingAnswers.querySelector(userInput) || {}).value; 
    if (userChoice === currentQ.correct){
      numCorrect++;
      console.log(numCorrect.value + "this be right")}
    else {
      console.log("Wrong on this question ")
    }
    console.log("Total correct answers:" + numCorrect);  
  })}

  //* now for the multiple answers nightmare: 
  function multiple(){
    let correctAnswersMultiple = [];

    //*TODO: det här fungerar inte HELLER. 
  quizQuestionsMultiple.forEach((currentQ) => {
let gettingCorrect = currentQ.correct;
console.log(" These are the multiple answers: " + currentQ)
  })}



  
//*Adding eventlistener
checkAnswersButt.addEventListener("click", ()=> {
  scoreResults();
  multiple();  

//*TODO: change this text last:  
resulttext.innerHTML="You got " + (numCorrect + BonusCorrect) + " correct answers";

}) //*end of addevent ;

