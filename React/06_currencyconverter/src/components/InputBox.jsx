import React,{useId} from 'react'
import "tailwindcss";

//take the values which will be changing in the box
function InputBox({
label,
amount,
onAmountChange,
onCurrencyChange,
currencyOptions=[],
selectedCurrecy="usd",
amountDisabled=false,
currencyDisabled=false,
className="",
}) {

const id=useId();

return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div
        className="w-1-2">
            <label 
            htmlFor={id}
            className='text-black/40 mb-2 inline-block'>{label}</label>
            <input 
            id={id}
            type="number"
            className='outline-none w-full bg-transperant py-1.5'
            placeholder='Amount'
            disabled={amountDisabled}
            value={amount}
            //method to listen change of amount
            onChange={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}
            }
            //on change it will check and as we get a string we will convert the value to number to compute further
            />
        </div>
        <div
        className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text black/40 mb-2 w-full'>Currency Type</p>
        <select name="" id=""
        className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
        value={selectedCurrecy}
        onChange={(e)=>{onCurrencyChange &&
            onCurrencyChange(e.target.value)
        }}
        disabled={currencyDisabled}>
        {/* to feed all options in select field */}
        {
            currencyOptions.map((currency)=>(
                <option key={currency} value={currency}>{currency}</option>
            ))
            //with this round bracket it auto returns the arr
        }
        </select>

        </div>
    </div>
)
}

export default InputBox
