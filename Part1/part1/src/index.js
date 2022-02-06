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
  const part1 = {
    name:'Fundamentals of React',
    excersises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    excersises: 7
  }
  const part3 = {
    name: 'State of a component',
    excersises: 14
  }
  const exercises3 = 14

  return(
    <div>
      <Header title={course}/>
      <Content  
        task1={part1.name} exer1={part1.excersises} 
        task2={part2.name} exer2={part2.excersises}
        task3={part3.name} exer3={part3.excersises}
      />
      <Total exercises1={part1.excersises} exercises2={part2.excersises} exercises3={part3.excersises}/>
    </div>
  )

  ReactDOM.render(<App/>, document.getElementById('root'))

} 


