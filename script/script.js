const currentDate = new Date(Date.now());
const openDate = new Date('7/1/2021');
const numberOfDaysToAdd = 120;
let counter = document.getElementById("counter");
openDate.setDate(openDate.getDate() + numberOfDaysToAdd); 
let diffDate = Math.floor((openDate - currentDate) / (1000*60*60*24))
counter.innerHTML = diffDate + " days"