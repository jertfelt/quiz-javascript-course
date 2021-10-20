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

//TODO: Retry button
retryButton.addEventListener("click", () => {

})

