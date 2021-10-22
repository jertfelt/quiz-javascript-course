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

//* creating an empty array for future divs with separate DIVs per question: (you'll see further down)
let quizBodyArr = [];

   //* creating HTML-radiobuttons for each available answer through looping through the object-array

quizQuestions.forEach((currentQuest, questNumb) => {
  let answerArray = [];
  for (choice in currentQuest.answers){
    //* creating HTML and pushing
    answerArray.push(`<input type="radio" class= "test" id ="question${questNumb}" name="question${questNumb}" value="${choice}">
    ${currentQuest.answers[choice]}<br>
  `  )} 

  //*Pushing the answerArray into an answers div, along with divs for questions and images, and then appending it by adding it into quizContainers innerHTML.
   //* Disclaimer: searching the web for possible solutions of creating this, I stumbled upon join(): (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Globalt_Objects/Array/join) a neat way to push in the array elements as string objects, and it seems to work although I do not 100% comprehend it.

   
  quizBodyArr.push(
    `<div class="images"></div>
    <div class="question"> ${currentQuest.question} </div>
    <div class="answers1"> ${answerArray.join('')} </div><br>`
  );
});
quiz.innerHTML = quizBodyArr.join('');

//*TODO how to add pictures in every question using children nodes and adding html. Looping through every "images"-class, assigning them numbers, and then go into each element and give //*! märk noga här: parent till div class question är quizHome: då med ordningen images, question, answers

//*? Instead of creating an addEventListener to every button (it seems impossible, believe me, I. HAVE. TRIED.) I will instead have a button that submits answers - incidentally the same one as "Check answers" that will loop over user answers, check them, and then show the result. And then I will add inside that eventlistener a loop for the multiple replies

let checkAnswersButt = document.getElementById("check");
let resultDiv = document.getElementById("result")
let numCorrect = 0;
let bonusCorrect= 0;

//*Adding eventlistener
checkAnswersButt.addEventListener("click", ()=> {
  let resultbox = document.createElement("div");
  let resulttext = document.createElement("h3");
  resultDiv.appendChild(resultbox);
  resultbox.appendChild(resulttext);
  
  let gettingAnswersFromQuiz = document.querySelectorAll(".answers1"); 
  
  //*TODO: måste fixa detta:
  alert("Wrong lever Kronk! You need to answer all questions!") //*! får inte in denna ifsats någonstans! inuti foreach fungerar men då upprepas den för varje input typ. utanför: kan inte accessa  (gettingAnswers.querySelector(userInput)).value
 
  //*this is looping through the "ordinary questions"
  quizQuestions.forEach((currentQ, qNumb) => {
    let gettingAnswers = gettingAnswersFromQuiz[qNumb];
    let userInput = `input[name=question${qNumb}]:checked`; //*cannot use .checked because it's a string
    let userChoice = (gettingAnswers.querySelector(userInput)).value; 
    if (userChoice === currentQ.correct){
      numCorrect++;
      console.log(numCorrect.value + " är rätt")
    }
    else {
      console.log("Wrong on this question ")
    }
    console.log("Total correct answers:" + numCorrect);  
});

//*this is looping through multiple answer choice:
//*! 

//! this needs to have a :checked

//*TODO: kolla denna (FUNGERADE EJ)
let userchecksBonus = document.getElementsByName("Movies");
let selected = [];
for (let i =0; i< userchecksBonus.length; i++){
  if (userchecksBonus[i].checked){
    selected.push(userchecksBonus[i].value); 
    if (selected.length === (userchecksBonus-1)){
      bonusCorrect++;
      console.log("TEST")
    }
  }
} 

//*array with checked 
let userchecksBonusVillains = document.querySelectorAll(`[name="Villains"]:checked`); 

quizQuestionsMultiple.forEach((item) => {
  let correctanswers = item.correct;
  console.log(correctanswers);

  userchecksBonusVillains.forEach((item) => {
   let userAnswer = `input[name="Villains"]:checked`;
   let correctAnswer1 = `input[id="checkboxJafar"]:checked` 
   let correctAnswer2 = `input[id="checkboxHades"]:checked`; 
   if (userAnswer === correctAnswer1 && correctAnswer2) {
     console.log("YASSSS QUEEN");
     bonusCorrect++;
   }
 })

})

//*TODO: change this text last:  
resulttext.innerHTML="You got " + (numCorrect + BonusCorrect) + " correct answers";

}) //*end of addevent
    
