///////////////////////////////////////////////////////TASK1
// let m = 23;

// let a = 0;

// for (let n = 2; n < m; n++) {
    //     if (n%2==0) {
        //         a++
        //     }
        // }
        
// console.log(a);
        
        


        
///////////////////////////////////////////////////////TASK2

// let n = 13;
// let isPrime = true

// if (n==1 || n==0) {
//     console.log(`${n} is neither prime nor composite`);
// }else if (n>1) {
//     for (let i = 2; i < n; i++) {
//         if (n%i==0) {
//             isPrime=false
//         }
//     }
//     if (isPrime) {
//     console.log(`${n} is a prime number`);
//     }else{
//     console.log(`${n} is a composite number`);
//     }
// }





///////////////////////////////////////////////////////TASK3

// let num1 = 342434535;
// let num2 = 2048;
      
// function checkPowOf2(num) {
//     for (let i = 0; i < 64; i++) {
//         if (Math.pow(2, i) == num) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(checkPowOf2(num1));





///////////////////////////////////////////////////////TASK4

// let num = '1982123';
// let numSep = num.split('')
// console.log(numSep.length);





///////////////////////////////////////////////////////TASK5

// let a = [1,3,5,7,4]
// let sum = 0;
// for (let i = 0; i < a.length; i++) {
//     sum += a[i]
// }

// console.log(sum);




///////////////////////////////////////////////////////TASK6

// let int= [1,5,67,21,92]
// let largest = 0

// for (let i = 0; i < int.length; i++) {
//     if (int[i] > largest) {
//         largest = int[i]
//     }
// }

// console.log(largest);




///////////////////////////////////////////////////////TASK7

// let int= [1,5,67,21,92];
// let sum = int[0] + int[int.length-1]
// console.log(sum);




///////////////////////////////////////////////////////TASK8

// let n = 29

// if (n%2==0) {
//     console.log("it's an even number mf");
// }else{
//     console.log("it's an odd number mf");
// }





///////////////////////////////////////////////////////TASK9

// let n = 21;

// if (n%3==0 && n%7==0) {
//     console.log("it can be divided by 7 and 3");
// }else if(n%3==0 || n%7==0){
//     console.log('it can be divided by either 7 or 3');
// }else{
//     console.log('it can be divided by neither 7 nor 3');
// }\





///////////////////////////////////////////////////////TASK10

// let n = 8
// let m = 11
// let sum = 0

// if (n%2==0 && m%2==0) {
//     sum = m+n
//     console.log(sum);
// }else{
//     console.log("I can't sum em up, mate. Sorry but I can't do it, cus one of em is not an even number.");
// }





///////////////////////////////////////////////////////TASK11

// let m = 3
// let n = 18
// let count = 0

// for (let i = m; i < n; i++) {
//     if (i%2!==0) {
//         count++
//     }
// }

// console.log(count);





///////////////////////////////////////////////////////TASK12

// let m = 3
// let n = 18
// let sum = 0

// for (let i = m; i < n; i++) {
//     if (i%2!==0) {
//         console.log(i);
//         sum += i
//     }
// }

// console.log(sum);





///////////////////////////////////////////////////////TASK13

// let m = 8
// let mult = 1

// for (let i = 1; i < m; i++) {
//     if (i%2==0) {
//         mult = mult * i
//     }
// }

// console.log(mult);




///////////////////////////////////////////////////////TASK14

let temp = 12

if (temp>15) {
    console.log("Hava Istidir");
}else{
    console.log("Hava soyuqdur");
}