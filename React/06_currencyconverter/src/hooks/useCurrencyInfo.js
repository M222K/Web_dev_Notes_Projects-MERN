import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
//whatever data i am retriveing from api i need to store that
const [data,setData]=useState({});
//as soon as someone change value i wnt to refetch request
useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
.then((res)=>res.json())
.then((res)=>setData(res[currency])) //fetch only the currency key values
},[currency]);

console.log(data);
return data;
}

export default useCurrencyInfo;