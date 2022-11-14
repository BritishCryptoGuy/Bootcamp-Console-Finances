// Variables
let numMonths = finances.length;
let monthArray = [];
let dataArray = [];
let profitMonths = [];
let lossMonths = [];
let max = 0;
let min = 0;
let greatestInc;
let greatestDec;
let totalAverage;

let avgChangeArr = [];

for (let i = 0; i < finances.length; i++) {
  monthArray.push(finances[i][0]);
  dataArray.push(finances[i][1]);
  if (dataArray[i] >= 0) {
    profitMonths.push(dataArray[i]);
  } else if (dataArray[i] <= 0) {
    lossMonths.push(dataArray[i]);
  }
}

let totalCalc = function (data) {
  let sum = 0;
  for (const dat of data) {
    sum = sum + dat;
  }
  return sum;
};

let avgMOMCalc = function (data) {
  let sum = [];
  for (let i = 0; i < dataArray.length; i++) {
    sum.push(dataArray[i] - dataArray[i - 1]);
  }
  avgChangeArr = sum;
  return;
};

avgMOMCalc(dataArray);
avgChangeArr.shift();

//Increase/decrease
let avgCal = function (data) {
  max = Math.max(...data);
  min = Math.min(...data);
  greatestInc = finances[avgChangeArr.indexOf(max) + 1];
  greatestInc.splice(1, 1, ` $${greatestInc[1]}`);
  greatestInc.join(" ");
  greatestDec = finances[avgChangeArr.indexOf(min) + 1];
  greatestDec.splice(1, 1, ` $${greatestDec[1]}`);
  greatestDec.join(" ");
  return;
};
let overallAvgCal = function (data) {
  totalAverage = data / avgChangeArr.length;
  return;
};

totalAverage = totalCalc(avgChangeArr);
overallAvgCal(totalAverage);
avgCal(avgChangeArr);
//Console log results
console.log(`Game stats:\n Total Months:${numMonths}\n Total Profitable Months:${
  profitMonths.length
}\n Total non Profitable Months:${
  lossMonths.length
}\n Total Profit/Losses: £${totalCalc(
  dataArray
)}\n Greatest Increase by month: ${greatestInc} (Change from prior month $${max})\n Greatest Decrease by month: ${greatestDec} (Change from prior month $${min})\n Average monthly change: $${totalAverage}
`);
