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

let quizContainer = document.getElementById("quizHome");

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

//*put the multiple choices in a separate array for the looping purposes
const quizQuestionsMultiple = {
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
}

//* creating an empty array for future divs with separate DIVs per question:
let quizBodyArr = [];

   //* creating HTML-radiobuttons for each available answer through looping through the object-array
quizQuestions.forEach((currentQuest, questNumb) => {
  let answerArray = [];
  for (choice in currentQuest.answers){
    //* this took me some time to figure out:
    answerArray.push(`<input type="radio" name="question${questNumb}" value="${choice}">
    ${choice} :
    ${currentQuest.answers[choice]}
  `
    ) 
  }
  //*Pushing the answerArray into an answers div, along with divs for questions and images. 
  
//*! märk noga här: parent till div class question är quizHome: då med ordningen images, question, answers
  quizBodyArr.push(
    `<div class="images"></div>
    <div class="question"> ${currentQuest.question} </div>
    <div class="answers"> ${answerArray.join('')} </div>`
    //* just discovered the basic wonders of join (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) a neat way to push in the array elements as string objects.  
  );
});
quizContainer.innerHTML = quizBodyArr.join('');

//*TODO how to add pictures in every question using children nodes and adding html. Looping through every "images"-class, assigning them numbers, and then go into each element and give

