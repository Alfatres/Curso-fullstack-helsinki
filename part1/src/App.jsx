//import { useState } from 'react'
import Content from "./Content";
import Header from "./Header";
import Total from "./Total";


const App = () => {


const course ={
  name: 'Half Stack application development',
 partes : [
  {
  name:'Fundamentals of React',
  exercises : 10,
  },
 {
  name : 'Using props to pass data',
  exercises : 7,
},
  {
  name : 'State of component',
  exercises : 14
}
]};


return (
    <div>
      <Header coursee={course} />
      <Content contenido={course} />
      <Total cantidad={course}/>
      
    </div>
  )
}

export default App
