//coding challenge #1
const weightMark = 78;
const heightMark = 1.69;
const weightJohn = 95;
const heightJohn = 1.88;
let markBMI = weightMark / heightMark ** 2;
console.log(markBMI);
let johnBMI = weightJohn / heightJohn ** 2;
console.log(johnBMI);
markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

//coding challenge #2
if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's! (${johnBMI})`);
} else {
  console.log(`John's BMI ${johnBMI}) is higher than Mark's! (${markBMI})`);
}
