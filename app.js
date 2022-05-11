// //colours are in an array representing the type of colours we'll have e.g. green, red and rgba - to show it'll work w ith any colour values, and hex #)
// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// const btn = document.getElementById("btn");
// const color = document.querySelector(".color"); //color had class color:

// //set variables for button and color using in ( ) the id and class we gave them in html

// btn.addEventListener("click", function () {
//   const randomNumber = getRandomNumber(); //invoking getRandom function
//   console.log(randomNumber); //to show the values you're getting of the random no

//   document.body.style.backgroundColor = colors[randomNumber];
//   color.textContent = colors[randomNumber];
// });

// //set a random Math function and invoke it, display it in the call back function above - instead of the hard coded no
// function getRandomNumber() {
//   return Math.floor(Math.random() * colors.length);
// }
// //multiply random no by length of colours array, but this will never give the 4th colour value

// //return Math.random() * colors.length;

// //instead add Math.floor which always rounds it down to nearest integer
// //gives our maths floor and pass it the values we get when multiplying math.random with our colours length


