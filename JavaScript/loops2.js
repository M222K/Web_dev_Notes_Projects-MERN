// let arr=["green tea","black tea", "chai", "oolong tea"];
// let selectedTea=[];
// for(let i=0;i<arr.length;i++){
// if(arr[i]!="chai"){
//     selectedTea.push(arr[i]);
// }else{
//     break;
// }}
// console.log(selectedTea);

// let cities=["New York","Los Angeles","Chicago","Houston","Phoenix"];
// let visitedCities=[];
// for(let i=0;i<cities.length;i++){
//     if(cities[i]==="Chicago"){
//         continue;}
//     visitedCities.push(cities[i]);}
// console.log(visitedCities);

// let tea=["chai","green tea","herbal tea","black tea"];
// let selectedTea=[];
// for (const t of tea) {
//     if(t==='herbal tea'){
//         continue;
//     }
//     selectedTea.push(t);
// }
// console.log(selectedTea);

// let cityPopulations={"London":8900000,"New York":8400000,"Tokyo":9000000,"Delhi":30000000};
// let obj={};
// for (const city in cityPopulations) {
//     if(cityPopulations[city]<=8900000){
//         continue;
//     }
//     obj[city]=cityPopulations[city];
// }
// console.log(obj);

// let tea=["earl grey","green tea","chai","oolong tea"];
// let availableTea=[];
// tea.forEach(t => {
//     if(t==="chai"){
//         return;
//     }
//     availableTea.push(t);
// });
// console.log(availableTea);

// let arr=["berlin","tokyo","Sydney","Paris"];
// let travelledCities=[];
// arr.forEach(city=>{
// if(city==="Sydney"){
//     return;
// }
// travelledCities.push(city);
// });
// console.log(travelledCities);

// let num=[2,5,7,9];
// let doubledNumbers=[];
// for(let i=0;i<num.length;i++){
//     if(num[i]==7){
//         continue;
//     }
//     doubledNumbers.push(num[i]*2);
// }
// console.log(doubledNumbers);


let tea=["chai","green tea","herbal tea", "jasmine tea", "black tea"];
let ans=[];
for (const t of tea) {
    if(t.length>10){
        break;
    }
    ans.push(t);
    
}
console.log(ans);