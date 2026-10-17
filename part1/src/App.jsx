//import { useState } from 'react'

import Button from "./Button";
import { useState } from "react";
import Display from "./Display";



const App = () => {

const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];
  console.log('anecdotes:', anecdotes.length);


const [selected, setSelected] = useState(() => anecdotes[Math.floor(Math.random() * anecdotes.length)])
console.log(`Frase seleccionada: ${selected}`);

const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))
console.log(`Cantidad de votos: ${vote}`);

const masVotado = Math.max(...vote)
const indiceMax = vote.indexOf(masVotado)
const mostVoted = anecdotes[indiceMax]

const handleAnecdote = () => {
const opcion = anecdotes.filter(f => f !== selected);
const indice = Math.floor(Math.random() * opcion.length);
setSelected(opcion[indice]);
};

const handleVotes = () => {
  const indic = anecdotes.indexOf(selected);
  const copyVote = [...vote];
  copyVote[indic] += 1;
  setVote(copyVote)
}


return (
    <div>
      <h1>Anecdote the day</h1>
      <p>{selected}</p>
      <p>Has {vote[anecdotes.indexOf(selected)]} vote </p>
            
      <Button onSmash={handleVotes}
      text='Vote'/>
      <Button 
      onSmash={handleAnecdote}
      text='Next anecdote'
      />
      <br />
      <h1>Anecdote with most votes</h1>
      {masVotado > 0 ? (
          <div>
            <p>{mostVoted}</p>
            <p>has {masVotado} vote </p>
          </div>
      ) : (
        <p>No votes yet</p>
      ) }
    
    </div>
  )
}

export default App
