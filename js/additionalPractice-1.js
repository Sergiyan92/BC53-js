// 1. Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end.
// function getEvenNubmers(start, end) {
//     const newArray = []
// for (let i=start; i <= end; i+=1) {
//     if (i % 2 === 0) {
//         newArray.push(i)
//     }
// }return newArray

// }

// console.log(getEvenNubmers(3, 11))

// 2. Напишіть функцію sumArray, яка приймає масив чисел та повертає суму всіх його елементів.
// const array = [1, 2, 3, 4, 5];
// const sum = sumArray(array);
// console.log(sum); // 15
// function sumArray(array) {
//   let sum = 0;
//   for (const number of array) {
//     sum += number;
//   }
//   return sum;
// }

// 2-a. Напишіть функцію sumEvenAndOdd, яка приймає масив чисел та повертає масив з двома елементами  - сума всіх його парних елементів, та сума всіх непарних.
// const array = [1, 2, 3, 4, 5];
// const sum = sumEvenAndOdd(array);
// console.log(sum); // [6,9]

// function sumEvenAndOdd(array) {
//   let sumEven = 0;
//   let sumOdd = 0;
//   for (let i = 1; i <= array.length; i += 1) {
//     if (i % 2 === 0) {
//       sumEven += i;
//     } else {
//       sumOdd += 1;
//     }
//   }
//   return [sumEven, sumOdd];
// }

// 3. У вас є масив з мов кодування. Кожен елемент масиву - це рядок з назвою мови та її скороченням у форматі "назва скорочення" (наприклад, "JavaScript JS"). Ваша мета - перетворити кожен елемент масиву у формат "назва мови: скорочення" та записати їх у новий масив.
// const codingLanguages = [
//   "JavaScript JS",
//   "Python PY",
//   "Ruby RB",
//   "Java JV",
//   "C# CS",
// ];


// function formatLanguages(codingLanguages){
//   const result = []

//   for (const iterator of codingLanguages) {
//     const arrIterator = iterator.split(' ').join(': ')
    
//     result.push(arrIterator)
//   }
// return result
// }

// const result  = formatLanguages(codingLanguages)
// console.log(formatLanguages(codingLanguages)); // ["JavaScript: JS", "Python: PY", "Ruby: RB", "Java: JV", "C#: CS"];

// 4. Написати функцію, яка приймає число n та повертає n-те число Фібоначчі.
function fibnum(n) {
    const arr = [0, 1];
    
    for (let i = 0; i < n - 2; i += 1)
    {
        arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    }
    return arr[arr.length - 1]
}
console.log(fibnum(8));
// 5. Написати функцію, що отримує рядок, і буде перевіряти, чи є цей рядок паліндромом
// const pal1 = "Я несу гусеня";
// const pal2 = "А роза упала на лапу Азора";
