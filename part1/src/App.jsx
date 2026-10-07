//import { useState } from 'react'

import Button from "./Button";
import { useState } from "react";
import Display from "./Display";


const Statics = (prop) =>{

  return(
    <div>
      <p>good: {prop.good} </p>
      <p>neutral: {prop.neutral} </p>
      <p>bad: {prop.bad} </p>
      <p>all:{prop.all} </p>
      <p>average: {prop.avg} </p>
      <p>positive: {prop.porcentaje} </p>
    </div>
  )
}

const App = () => {

const [good, setGood] =useState(0)
console.log(`Nro de Good: ${good}`);

const [neutral, setNeutral] = useState(0)
console.log(`Nro de Neutral: ${neutral}`);

const [bad, setBad] = useState(0)
console.log(`Nro de Bad: ${bad}`);

const [all, setAll] = useState(0)
console.log(`all of clicks: ${all}`);



  const avg = (good-bad)/all
  const porcentaje = (good*100)/all

const handleGoodClicks = () => {
  const incrementoGood = good + 1
  setGood(incrementoGood)
  console.log(`Cant of Good: ${incrementoGood}`);
  setAll(incrementoGood+neutral+bad)

}

const handleNeutralClicks = () => {
  const incrementoNeutral = neutral + 1
  setNeutral(incrementoNeutral)
  console.log(`cant of Neutral: ${incrementoNeutral}`);
  setAll(incrementoNeutral+good+bad)

}

const handleBadClicks = () => {
  const incrementoBad = bad + 1
  setBad(incrementoBad)
  console.log(`Cant of Bad ${incrementoBad}`);
  setAll(incrementoBad+good+neutral)
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

      <Statics good={good} neutral={neutral} bad={bad} all={all} avg={avg} porcentaje={porcentaje} />
                 
    </div>
  )
}

export default App
