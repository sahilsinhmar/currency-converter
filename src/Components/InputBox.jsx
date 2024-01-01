import React from 'react'

const InputBox = ({label, amount, amountChange, currencyOptions=[], currencyChange,amountDisable=false, currencyDisable=false,selectedCurrency="usd"}) => {


  return (
    <div >
      <div className='flex flex-col'>
        <lable className='text-lg text-zinc-500'>
           {label.toUpperCase()}
        </lable>
        <div className='flex gap-1'>
        <input className="outline-none w-full bg-transparent py-1.5" type='number' value={amount} disabled={amountDisable} onChange={(e)=>amountChange && amountChange(Number(e.target.value))}/>
        <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none text-lg" value={selectedCurrency} onChange={(e)=> currencyChange && currencyChange(e.target.value)} disabled={currencyDisable}>
          {currencyOptions.map((item)=>(
            <option className='text-sm' key={item} value={item}>{item.toUpperCase()}</option>
          ))}
        </select>
        </div>
      
      </div>
    </div>
  )
}

export default InputBox