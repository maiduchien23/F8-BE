//bài 1

function findMaxMin(arr) {
  if (arr.length === 0) {
    return null;
  }

  var max = arr[0];
  var min = arr[0];
  var location_max = 0;
  var location_min = 0;

  for (var i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      location_max = i;
    }
    if (min > arr[i]) {
      min = arr[i];
      location_min = i;
    }
  }

  return {
    max: max,
    min: min,
    location_max: location_max,
    location_min: location_min,
  };
}

var number = [2, 4, 5, 1, 9, 11, 0];
var result = findMaxMin(number);

console.log(`Số lớn nhất: ${result.max}`);
console.log(`Vị trí số lớn nhất:${result.location_max}`);
console.log(`Số lớn nhất: ${result.min}`);
console.log(`Vị trí số lớn nhất:${result.location_min}`);

console.log(
  `......................................................................`
);

//Bài 2
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function isPrime(n) {
  if (n < 0) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function averageOfPrimes(numbers) {
  let total = 0;
  let count = 0;

  for (var n of numbers) {
    if (isPrime(n)) {
      total += n;
      count++;
    }
  }

  if (count === 0) {
    return "Không có số nguyên tố";
  } else {
    return total / count;
  }
}

var avg = averageOfPrimes(number);
console.log(`Trung bình các số nguyên tố trong mảng là: ${avg}`);

console.log(
  `......................................................................`
);
//bài 3

var array = [1, 1, 2, 2, 3, 4, 4, 5, 6, 6];
function removeDuplicates(array) {
  var result = [];

  for (var i = 0; i < array.length; i++) {
    if (result.indexOf(array[i]) === -1) {
      result.push(array[i]);
    }
  }

  return result;
}

var newArray = removeDuplicates(array);

console.log("Mảng sau khi loại bỏ các phần tử trùng nhau:", newArray);

console.log(
  `......................................................................`
);
//bài 4
var numbers = [5, 1, 9, 8, 10];
var element = 4;

numbers.sort(function (a, b) {
  return a - b;
});

var insertIndex = 0;
while (numbers[insertIndex] < element) {
  insertIndex++;
}

numbers.splice(insertIndex, 0, element);

console.log(numbers);
