// let num=1;
// let sum=0;
// while(num<=5){
//     sum+=num;
//     num++;
// }
// console.log("the sum is:",sum);

// let countdown=[];
// let i=5;
// while(i>=1){
//     countdown.push(i);
//     i--;
// }
// console.log("countdown:",countdown);

// let tea_collection = [];
// let tea;
// do {
//     tea = prompt("Enter the tea you like:")
//     if (tea != "stop") {
//         tea_collection.push(tea);
//     }

// } while (tea != "stop");
// console.log("Your tea collection:", tea_collection);

// let total=0;
// let n=1;
// do {
//     total+=n;
//     n++;
// } while (n<=3);
// console.log("the total is:",total);

// let arr=[2,4,6];
// let multiplied_number=[];
// for(let i=0;i<arr.length;i++){
//     multiplied_number.push(arr[i]*2);
// }
// console.log("the multiplied numbers are:",multiplied_number);

let city=["New York","Los Angeles","Chicago","Houston","Phoenix"];
let new_city=[];
for(let i=0;i<city.length;i++){
new_city.push(city[i].toUpperCase());
}
console.log("the new city array is:",new_city);