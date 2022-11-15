//bubble sort
let arr = [5, 6, 4, 3, 7, 1];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let he = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = he;
    }
  }
}
console.log(arr);

//selection sort
let str = [5, 6, 4, 3, 7, 1];
let N = str.length;
for (let i = 0; i < N ; i++) {
  let min = i;
  for (let j = i + 1; j < N; j++) {
    if (str[j] < str[min]) {
      min = j;
    }
  }
  if(i!==min){
    let he = str[i];
  str[i] = str[min];
  str[min] = he
  
  }
}
console.log(str);
