// example1
// first grab the element create event when clicked and then do a certain task
// chain the event on the element you get by the method
document.getElementById("changeTextButton").addEventListener('click', function () {
  let para = document.getElementById("myParagraph");
  para.textContent = "The text has been changed!";
})

// example2
document.getElementById("highlightFirstCity").addEventListener('click', function () {
  let citiesList = document.getElementById("citiesList");
  citiesList.firstElementChild.classList.add("highlight");
})

// example3
document.getElementById("changeOrder").addEventListener('click', function () {
  document.getElementById("coffeeType").textContent = "Espresso";
})

// example4
document.getElementById("addNewItem").addEventListener('click', function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Butter";
  document.getElementById("shoppingList").appendChild(newItem);
})

// example5
document.getElementById("removeLastTask").addEventListener("click", function () {
  let taskList = document.getElementById("taskList");
  // taskList.removeChild(taskList.lastElementChild);
  taskList.lastElementChild.remove();
})
// example6
document.getElementById("clickMeButton").addEventListener("dblclick",function(){
  alert("Button was clicked!");
})

// example7
document.getElementById("teaList").addEventListener("click", function(event){
  if (event.target && event.target.matches(".teaItem")){
    alert("you clicked on:"+event.target.textContent)
  }
})

// example8
document.getElementById("feedbackForm").addEventListener("submit",function(event){
event.preventDefault();
  let feedback = document.getElementById("feedbackInput").value;
  document.getElementById("feedbackDisplay").textContent=`Your feedback is: ${feedback}`;
})

//example9
document.addEventListener("DOMContentLoaded",function(){
  document.getElementById("domStatus").textContent="DOM fully loaded";
})

// example10
document.getElementById("toggleHighlight").addEventListener("click",function(){
  let description = document.getElementById("descriptionText");
  description.classList.toggle("highlight");
  }
)