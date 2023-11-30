const numInp1 = document.querySelector(".input1");
const numInp2 = document.querySelector(".input2");
const numInp3 = document.querySelector(".input3");
const numInp4 = document.querySelector(".input4");
const numInp5 = document.querySelector(".input5");
const numInp6 = document.querySelector(".input6");



let riskText = document.querySelector(".risk-level");
let sumText = document.querySelector(".sum-text");

const calcBut = document.querySelector(".calc-but");
let sum = 0;
let avg = 0;
function sumFunc() {
  sum = Number(numInp1.value) + Number(numInp2.value) + Number(numInp3.value) + Number(numInp4.value) + Number(numInp5.value) + Number(numInp6.value);
  if (sum === 0) {
    sumText.textContent = "Please enter a value";
  } else {
    avg = sum / 6;
    sumText.textContent = `Sum: ${sum}`;
    riskText.textContent = `Risk level(Sum/Number of Inputs): ${avg}`;
  }
  return;
}





calcBut.onclick = sumFunc;
