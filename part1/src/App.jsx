//import { useState } from 'react'

import Display from "./Display";
import Button from "./Button";
import { useState } from "react";


const App = () => {

const [good, setGood] =useState(0)
console.log(`Nro de Good: ${good}`);

const [neutral, setNeutral] = useState(0)
console.log(`Nro de Neutral: ${neutral}`);

const [bad, setBad] = useState(0)
console.log(`Nro de Bad: ${bad}`);

const [all, setAll] = useState(0)
console.log(`all of clicks: ${all}`);

const [average, setAverage] = useState(0)
console.log(`el average: ${average}`);


const averag = (good-bad)/all
const positive = (good*100)/all

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
      <Display counter={good} text='good' />
      <Display counter={neutral} text='neutral' />
      <Display counter={bad} text='bad' />
      <p>all: {all} </p>
      <p>average: {averag} </p>
      <p>positive: {positive}%</p>
           
    </div>
  )
}

export default App
