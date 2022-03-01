import React, {useState} from 'react'
import ReactDOM from 'react-dom'


const Button = ({text, hadleClick})  => (
  <button onClick= {hadleClick}>{text}</button>
)

const AllComents = ({allClicks}) => (
  <div> All {allClicks}</div>
)

const Positive = ({allNumber, goodNumber}) => {
  if(allNumber>0)
  {
    return(
      <p>Positive {(goodNumber*100)/allNumber} %</p>
    )    
  }
  return <p>Positive 0</p>  
}

const Averge =({positiveComent, negativeCommnet, allComents}) => {

  let promedio = (positiveComent-negativeCommnet)/allComents
  if(allComents === 0){
    return (  
      <div>
        <p>average 0</p>
      </div>
    )
  }
  return (  
    <div>
      <p>average {promedio}</p>
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setCounterComent] = useState(0)

  const section = "Give feedback"
  const soncondaryTitle = "Statistics"
  

  const goodCoffe = (value) => () => {
    setCounterComent(all + 1)
    setGood(value)
  }
  const neutralCoffe = (value) => () => {
    setCounterComent(all + 1)
    setNeutral(value)
  }
  const badCoffe = (value) => () => {
    setCounterComent(all + 1)
    setBad(value)
  }

  return(
    <div>
      <h2>{section}</h2>
      <Button hadleClick={goodCoffe(good +1)}text="good"/>
      <Button hadleClick={neutralCoffe(neutral + 1)}text="neutral"/>
      <Button hadleClick={badCoffe(bad + 1)}text="bad"/>
      <br></br>
      <h2>{soncondaryTitle}</h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <AllComents allClicks={all}/>
      <Averge positiveComent={good} negativeCommnet={bad} allComents={all}/>
      <Positive allNumber={all} goodNumber={good}/>
    </div>
  )
}

ReactDOM.render (
  <App/>, document.getElementById('root')
)