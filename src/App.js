import React from 'react'
import './App.css'

const PROGRAMMING_LIST = [
 'React',
 'ASP.NET MVC',
 'Angular',
 'Ruby on Rails',
 'Angular.JS',
 'Vue.JS',
 'Django',
 'Laravel',
]

export default function App() {
 //DRAG HANDLERS

 const onDragStart = (e) => {
  console.log('Start')
 }

 const onDragEnter = (e) => {
  console.log('Enter')
 }

 const onDragLeave = (e) => {
  console.log('Leave')
 }

 const onDragOver = (e) => {
  console.log('Over')
 }

 const onDrop = (e) => {
  console.log('Drop')
 }

 return (
  <div className="app">
   <div className="list-container">
    <div className="titles">
     <div className="title-main">Rank of Programming Languages</div>
     <div className="title-task">Sort in actual order</div>
    </div>
    <div className="items-wrapper">
     {[...PROGRAMMING_LIST]
      .map((value) => ({ value: value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((item, index) => {
       return (
        <div
         key={index}
         data-index={index}
         draggable
         onDragStart={() => onDragStart()}
         onDragEnter={() => onDragEnter()}
         onDragLeave={() => onDragLeave()}
         onDragOver={() => onDragOver()}
         onDrop={() => onDrop()}
         className="item"
        >
         {`${index + 1}. ${item.value}`}
        </div>
       )
      })}
    </div>
   </div>
  </div>
 )
}
