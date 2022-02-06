import React from 'react';
import ReactDOM from 'react-dom';

const Part = (props) =>{
  <>
    <p>{props.part} {props.exercises}</p>
  </>
}

const Header = (props) =>{
  return(
    <>
      <h1>{props.title}</h1>
    </>
  )
}

const Content = (props) =>{
  <>
    <Part part={props.task1} exercises={props.exer1}/>
    <Part part={props.task2} exercises={props.exer2}/>
    <Part part={props.task3} exercises={props.exer3}/>
  </>
}

const Total = (props) =>{
  <>
    <p>Number of Exercises {props.exercises1+props.exercises2+props.exercises3}</p>
  </>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return(
    <div>
      <Header title={course}/>
      <Content  
        task1={part1} exer1={exercises1} 
        task2={part2} exer2={exercises2}
        task3={part3} exer3={exercises3}
      />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )

  ReactDOM.render(<App/>, document.getElementById('root'))

} 


