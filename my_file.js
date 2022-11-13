// Variables
let numMonths = finances.length;
let monthArray = [];
let dataArray = [];
let profitMonths = [];
let lossMonths = [];
let min;
let max;

let avgChangeArr = [];

for (let i = 0; i < finances.length; i++) {
  monthArray.push(finances[i][0]);
  dataArray.push(finances[i][1]);
  if (dataArray[i] >= 0) {
    profitMonths.push(dataArray[i]);
  } else if (dataArray[i] <= 0) {
    lossMonths.push(dataArray[i]);
  }
  for (let j = 0; j < finances[i].length; j++) {
    if (max < finances[j][1]) {
      max += finances[j][1];
    }
  }
}
//loop through
//find largest difference

let totalCalc = function (data) {
  let sum = 0;
  for (const dat of data) {
    sum = sum + dat;
  }
  return sum;
};
// console.log(dataArray);

let avgMOMCalc = function (data) {
  let sum = [];
  for (let i = 0; i < dataArray.length; i++) {
    sum.push(dataArray[i] - dataArray[i - 1]);
  }
  avgChangeArr = sum;
  return;
};
let avgChangeAvg = function (data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  sum = sum / data.length;
  return sum;
};
// function biggestNumberInArray(arr) {
//   let max = Math.max(...arr);
//   console.log(max);
//   return max;
// }

// let maxminFunction = function (data) {
//   for (let i = 0; i < data.length; i++);

// };

// maxminFunction(finances);

// let max = biggestNumberInArray(dataArray);
console.log(max);
console.log(min);

avgMOMCalc(dataArray);
avgChangeArr.shift();
console.log(avgChangeArr);

console.log(avgChangeAvg(avgChangeArr));

// console.log(avgChangeArr);
console.log(`Game stats:\n Total Months:${numMonths}\n Total Profitable Months:${
  profitMonths.length
}\n Total non Profitable Months:${
  lossMonths.length
}\n Total Profit/Losses: £${totalCalc(dataArray)}
`);
