import React, {useState} from 'react'
import ReactDOM from 'react-dom'


const Button = ({text, hadleClick})  => (
  <button onClick= {hadleClick}>{text}</button>
)

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const section = "Give feedback"
  const soncondaryTitle = "Statistics"

  const goodCoffe = (value) => () => setGood(value)
  const neutralCoffe = (value) => () => setNeutral(value)
  const goodBad = (value) => () => setBad(value)

  return(
    <div>
      <h2>{section}</h2>
      <Button hadleClick={goodCoffe(good +1)}text="good"/>
      <Button hadleClick={neutralCoffe(neutral + 1)}text="neutral"/>
      <Button hadleClick={goodBad(bad + 1)}text="bad"/>
      <br></br>
      <h2>{soncondaryTitle}</h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    
    </div>
  )
}

ReactDOM.render (
  <App/>, document.getElementById('root')
)