// KATA 1
// https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/javascript

const flip = (d, a) => {
  return  (d === 'R') ? a.sort((a,b) => a-b) : a.sort((a,b) => b-a);
}

console.log(flip('R', [3, 2, 1, 2]))
console.log(flip('L', [1, 4, 5, 3, 5]))

// KATA 2 
// https://www.codewars.com/kata/58d248c7012397a81800005c
// cuboid volume: volume = Length * Width * Height
//It's up to you to find out whether the cuboid has equal sides (= is a cube).
const cubeChecker = (volume, side) => {
  return (Math.pow(side, 3) === volume && volume > 0 && side > 0) ? true : false;
};
console.log(cubeChecker(8, 2))
console.log(cubeChecker(-8, -2))
console.log(cubeChecker(0, 0))
console.log(cubeChecker(310675, 85))


// KATA 3
// https://www.codewars.com/kata/545991b4cbae2a5fda000158/train/javascript
console.log(3)
function include(arr, item){
  return arr.includes(item);
}

console.log(include([1,2,3,4], 3))
console.log(include([], 3))
console.log(include([1,2,4,5], 3))

// KATA 4
// https://www.codewars.com/kata/5748838ce2fab90b86001b1a

function squareArea(A){
  return +Math.pow((4 * A) / (Math.PI * 2), 2).toFixed(2);
}

console.log(squareArea(14.05))

// KATA 5
// https://www.codewars.com/kata/5641a03210e973055a00000d/train/javascript

const twoDecimalPlaces = n =>  Number(n.toFixed(2))

console.log(twoDecimalPlaces(4.659725356))

// KATA 6 
// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript

function differenceInAges(ages){
  const sorted = ages.sort((a,b) => a-b)
  let youngest = sorted[0]
  let oldest = sorted[sorted.length - 1]
  let diff = oldest - youngest
  return [youngest, oldest, diff]
}

console.log(differenceInAges([82, 15, 6, 38, 35]))
