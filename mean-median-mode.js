var arr = process.argv;
var arr1 = [];
var sum = 0;
var mean = 0;
var median = 0;
var max = 0;
var maxFrequency = 0;
var count = 0;
var counts = [];

//Push numbers to the arrray, getting rid of non numbers
//Also calculate sum while we are at it
for (i = 2; i < arr.length; i++) {
  num = Number(process.argv[i]);
  arr1.push(num);
  sum = sum + num;
}

//Sort the new array
//Determine mean and median
arr1 = arr1.sort(function(a,b) {return a-b});
mean = Math.floor(sum / arr1.length);
var mid = arr1.length / 2;
if (arr1 % 2 !== 0) {
  mid = Math.floor(mid);
}
median = arr1[mid];

//Determine the mode
//Taken from Tyler's post in Gittter
for (var i = 0; i < arr1.length; i++) {
  num = arr1[i];
  counts[num] = (counts[num] ? counts[num] : 0) + 1;
}
var mode = [];
var modeNum = 0;
counts.forEach(function(value, index) {
  if (value > modeNum) {
    mode = [];
    mode.push(index);
    modeNum = value;
  }
  if (value === modeNum && mode.indexOf(index)) {
    mode.push(index);
  }
});

console.log("The array is: " + arr1);
console.log("The midpoint is: " + mid);
console.log("The sum is: " + sum);
console.log("The mean is: " + mean);
console.log("The median is: " + median);
console.log("The mode is: " + mode);
