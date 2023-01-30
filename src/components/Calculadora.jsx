import React from 'react'
import { useState, useEffect } from 'react'


const Calculadora = () => {


const [calculo, setCalculo] = useState([])
const [resultado, setResultado] = useState()
const [imprimir, setImprimir] = useState("")


useEffect(() => {
 setImprimir(calculo.join(''))

 
}, [calculo])



const calculadora = () => {
    const result = eval(calculo.join(''))
    setResultado(result)
  }


const ac = () => {
    setCalculo([])
    setResultado()
}


const ce = () => {
    calculo.splice(-1,1)
    setCalculo([...calculo])
        
}



  return (
    <div className='w-full h-screen flex items-center bg-slate-100 font-semibold'>
    <div className='w-2/4 mx-auto my-auto h-3/5 calculadora-div rounded-lg'>
<div className='h-2/5 flex flex-col justify-end items-end pr-6 pb-8 bg-black text-white rounded-t-lg'>
   
    <h3 className='text-1xl text-violet-500'>{imprimir}</h3>
    <h2 className='text-3xl'>{resultado}</h2>
</div>
<div className='h-3/5 grid grid-cols-4 grid-rows-5 gap-2 px-2 pt-4 w-full mx-auto bg-slate-100 '>
<button className='border-2 rounded shadow-slate-700 hover:bg-violet-500 active:bg-violet-800 duration-500' onClick={ (e) => setCalculo([...calculo, e.target.value])} value={"%"}>%</button>
<button className='border-2 rounded shadow-slate-700 hover:bg-violet-500 active:bg-violet-800 duration-500' onClick={ce} value={"CE"} >CE</button>
<button className='border-2 rounded shadow-slate-700 hover:bg-violet-500 active:bg-violet-800 duration-500' onClick={ac} value={"AC"} >AC</button>
<button className='border-2 rounded shadow-slate-700 hover:bg-violet-500 active:bg-violet-800 duration-500' onClick={ (e) => setCalculo([...calculo, e.target.value])} value={"/"}>/</button>
<button className='border-2 rounded shadow-slate-700 hover:bg-violet-500 active:bg-violet-800 duration-500' onClick={ (e) => setCalculo([...calculo, e.target.value])} value={"7"}>7</button>
<button className='border-2 rounded shadow-slate-700 hover:bg-violet-500 active:bg-violet-800 duration-500' onClick={ (e) => setCalculo([...calculo, e.target.value])} value={"8"}>8</button>
<button className='border-2 rounded shadow-slate-700 hover:bg-violet-500 active:bg-violet-800 duration-500' onClick={ (e) => setCalculo([...calculo, e.target.value])} value={"9"}>9</button>
<button className='border-2 rounded shadow-slate-700 hover:bg-violet-500 active:bg-violet-800 duration-500' onClick={ (e) => setCalculo([...calculo, e.target.value])} value={"x"}>x</button>
<button className='border-2 rounded shadow-slate-700 hover:bg-violet-500 active:bg-violet-800 duration-500' onClick={ (e) => setCalculo([...calculo, e.target.value])} value={"4"}>4</button>
<button className='border-2 rounded shadow-slate-700 hover:bg-violet-500 active:bg-violet-800 duration-500' onClick={ (e) => setCalculo([...calculo, e.target.value])} value={"5"}>5</button>
<button className='border-2 rounded shadow-slate-700 hover:bg-violet-500 active:bg-violet-800 duration-500' onClick={ (e) => setCalculo([...calculo, e.target.value])} value={"6"}>6</button>
<button className='border-2 rounded shadow-slate-700 hover:bg-violet-500 active:bg-violet-800 duration-500' onClick={ (e) => setCalculo([...calculo, e.target.value])} value={"-"}>-</button>
<button className='border-2 rounded shadow-slate-700 hover:bg-violet-500 active:bg-violet-800 duration-500' onClick={ (e) => setCalculo([...calculo, e.target.value])} value={"1"}>1</button>
<button className='border-2 rounded shadow-slate-700 hover:bg-violet-500 active:bg-violet-800 duration-500' onClick={ (e) => setCalculo([...calculo, e.target.value])} value={"2"}>2</button>
<button className='border-2 rounded shadow-slate-700 hover:bg-violet-500 active:bg-violet-800 duration-500' onClick={ (e) => setCalculo([...calculo, e.target.value])} value={"3"}>3</button>
<button className='border-2 rounded shadow-slate-700 hover:bg-violet-500 active:bg-violet-800 duration-500' onClick={ (e) => setCalculo([...calculo, e.target.value])} value={"+"}>+</button>
<button className='col-span-2 border-2 rounded shadow-slate-700 active:bg-violet-800 duration-500' onClick={ (e) => setCalculo([...calculo, e.target.value])} value={"0"}>0</button>

<button className='border-2 rounded shadow-slate-700  hover:bg-violet-500 active:bg-violet-800 duration-500'  onClick={ (e) => setCalculo([...calculo, e.target.value])} value={"."}>.</button>
<button className='border-2 rounded shadow-slate-700 bg-violet-500 text-white' onClick={calculadora} value={"="}>=</button>
</div>
    </div>
    </div>
  )
}

export default Calculadora