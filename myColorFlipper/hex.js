const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//# = hex values - contains # and 6 colours 0-9 and have letters for 10-15
// #f15025

//repeat stages from app.js
//select button by id   - looking for the same button
//get colour with query.Selector

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//add event listener for click event
btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()]; //need += because if only have = it will overwrite it every iteration and just get 0 (not #000000) as it's last thing in our loop/iteration. += generates a string with # and 6 values from array. (Remember ( ) after invoke)
  }
  color.textContent = hexColor; //text content = hex color
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
//generate random number for hex colour
//set up loop to generate hex colour randomly and
//target the body and change the background of the body and
//add the value within the colour span

//create hex value with #

//set up loop to run 6 times for 6 values to get a random value from array and add to hexColor variable.
// start with 0 and stop loop before i=6 - run till i is less than 6 (i.e. 5 so runs 6 times and increment by one each time)

//set colour - start with hard coding - each iteration add a value from array - array name is hex - set index to first item 0 (instead of random no at first, to show it works)

// then target again the body and the text content - color.textContent = hexColor; and same for borderStyle:
//document.body.style.backgroundColor = hexColor;

//Note - this sets background color to #000000 not random items, just getting all array items as an item of 1

//need to set up a function to get random no so get random item from array.

//function for random Nos and in function body return floor and random.
//Differnce this time multiply by length of hex array, not the colours array length - as we want it multiplied by length of array to ensure we get values between 0 and the last index in array.

//each time we click, we spin up loop and generate the random number
//instead of using hard coded no in loop, to access item from array need to invoke function in [getRandomNumber]


//Click changes background colour in the body and hex value in the span. Shows in 2 places - in the span shows what colour it is and in the body it shows it equals the hex value.