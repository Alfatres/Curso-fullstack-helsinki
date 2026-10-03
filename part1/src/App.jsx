//import { useState } from 'react'

import Display from "./Display";
import Button from "./Button";
import { useState } from "react";


const App = () => {
//const [counter, setCounter] = useState(0)
//console.log(`Rendering with counter value: ${counter}`);

const [good, setGood] =useState(0)
console.log(`Nro de Good: ${good}`);

const [neutral, setNeutral] = useState(0)
console.log(`Nro de Neutral: ${neutral}`);

const [bad, setBad] = useState(0)
console.log(`Nro de Bad: ${bad}`);

//const [total, setTotal] = useState(0)
//console.log(`Total de clicks: ${total}`);



/*const increaseByOne = () => setCounter(counter + 1)
console.log(`Increasing, value before: ${counter}`);

const setToZero = () => setCounter(0)
console.log(`reseting to zero, value before: ${counter}`);

const decreaseByOne = () => setCounter(counter - 1)
console.log(`decresing, value before: ${counter}` );*/

const handleGoodClicks = () => {
  const incrementoGood = good + 1
  setGood(incrementoGood)
  console.log(`Cant of Good: ${incrementoGood}`);
 
}

const handleNeutralClicks = () => {
  const neutralCero = neutral + 1
  setNeutral(neutralCero)
  console.log(`cant of Neutral: ${neutralCero}`);

}

const handleBadClicks = () => {
  const incrementoBad = bad + 1
  setBad(incrementoBad)
  console.log(`Cant of Bad ${incrementoBad}`);
  
}



return (
    <div>
      <h1>Give feedback</h1>
           
      <Button 
      onSmash={handleGoodClicks}
      text='good'
      />
      <br />

      <br />
      <Button
      onSmash={handleNeutralClicks}
      text='neutral'
      />
      <br /><br />
      <Button
      onSmash={handleBadClicks}
      text='bad'
       />
     <h1>Statics</h1> 
      <Display counter={good} text='good' />
      <Display counter={neutral} text='neutral' />
      <Display counter={bad} text='bad' />
           
    </div>
  )
}

export default App
