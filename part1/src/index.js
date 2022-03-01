import React, {useState} from 'react'
import ReactDOM from 'react-dom'


const Button = ({text, hadleClick})  => (
  <button onClick= {hadleClick}>{text}</button>
)

const TrTable = ({text1, text2}) => {
  return (
    <tr>
      <td>{text1}</td>
      <td>  {text2}</td> 
    </tr> 
  )
}

const Statistic = ({text, value}) => {
  return (
    <>
      <TrTable text1={text} text2={value} />
    </>
  )
}




const AllComents = ({allClicks}) => (
  <>
    <TrTable text1="All" text2={allClicks} />
  </>
)


const Positive = ({allNumber, goodNumber}) => {

  if(allNumber>0)
  {
    return(
      <>
        <TrTable text1="Positive" text2={((goodNumber*100)/allNumber)} />
      </>
    )    
  }
  return ( 
    <TrTable text1="Positive" text2="0 %" />
  )
}

const Averge =({positiveComent, negativeCommnet, allComents}) => {

  let promedio = (positiveComent-negativeCommnet)/allComents
  
  return (  
    <>
      <TrTable text1="average" text2={promedio}/>
    </> 
  )
}

const Statitics = (props) =>{
  let {all, good, bad, neutral} = props
  if(all===0){
    return <p>No feedback given</p>
  }
  return (
    <>
      <table>
        <tbody>
          <Statistic text="Good" value={good}/>
          <Statistic text="Neutral" value={neutral}/>
          <Statistic text="Bad" value={bad}/>
        

          <AllComents allClicks={all}/>
          <Averge positiveComent={good} negativeCommnet={bad} allComents={all}/>
          <Positive allNumber={all} goodNumber={good}/>
        </tbody>
      </table>
    </>
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
      <Statitics all={all} good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

ReactDOM.render (
  <App/>, document.getElementById('root')
)