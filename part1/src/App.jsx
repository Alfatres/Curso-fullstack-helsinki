//import { useState } from 'react'

import Button from "./Button";
import { useState } from "react";
import Display from "./Display";


const Statistics = ({all, good, neutral, bad, avg, porcent }) =>{

  return(
    <table>
      <tbody>
        <tr>
          <td>Good</td>
          <td>{good}</td>
        </tr>

        <tr>
          <td>Neutral</td>
          <td>{neutral}</td>
        </tr>

        <tr>
          <td>Bad</td>
          <td>{bad}</td>
        </tr>

        <tr>
          <td>All</td>
          <td>{all}</td>
        </tr>

        <tr>
          <td>Average</td>
          <td>{avg}</td>
        </tr>

        <tr>
          <td>Positive</td>
          <td>{porcent}</td>
        </tr>

      </tbody>

     </table>

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



  const avg = all === 0 ? 0 : (good-bad)/all
  const porcentaje = all === 0 ? 0 : (good*100)/all

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
       /> <br />

     <h1>Statics</h1> 

      {all >= 10 ?
        (<Statistics all={all} good={good} neutral={neutral} bad={bad} avg={avg} porcent={porcentaje} />)
          :
          ('No feedback given')
      }       
    </div>
  )
}

export default App
