import React, { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

let DATA = [
 'React',
 'ASP.NET MVC',
 'Angular',
 'Ruby on Rails',
 'Angular.JS',
 'Vue.JS',
 'Django',
 'Laravel',
]
const RANDOM_DATA_LIST = DATA.map((item) => ({
 name: item,
 id: Math.random(),
})).sort((a, b) => a.id - b.id)

export default function App() {
 //ALL APP STATES

 const [list, setList] = useState(RANDOM_DATA_LIST)
 const [isCompleted, setIsCompleted] = useState(false)
 const [checkCount, setCheckCount] = useState(1)
 let currentCard = {}
 let nextCard = {}

 //DRAG HANDLERS

 const onDragStart = (item) => (currentCard = item)
 const onDragEnter = (e) => e.preventDefault()

 const onDragLeave = (e) => {
  e.preventDefault()
  e.target.style.border = 'none'
 }

 const onDragOver = (e) => {
  e.preventDefault()
  e.target.style.border = '2px solid black'
 }

 const onDrop = (event, item) => {
  nextCard = item
  event.target.style.border = 'none'
  changeItems(list, currentCard, nextCard)
 }

 //ITEM CHANGE FUNCTION

 const changeItems = (list, currentCard, nextCard) => {
  const listClone = [...list]
  const currentIndex = list.findIndex((el) => el.name === currentCard.name)
  const nextIndex = list.findIndex((el) => el.name === nextCard.name)
  listClone[currentIndex] = nextCard
  listClone[nextIndex] = currentCard
  setList(listClone)
 }

 //CHECK ORDER FUNCTION

 const checkOrderHandler = () => {
  let correctAnswerCount = 0
  setCheckCount((prevState) => prevState + 1)
  console.log(checkCount)

  list.forEach((item, index) => {
   if (item.name === DATA[index]) {
    const correct = document.getElementById(`${index}`)
    correct.style.background = '#2ECC40'
    correctAnswerCount += 1
   } else {
    const incorrect = document.getElementById(`${index}`)
    incorrect.style.background = '#FF4136'
   }
  })

  //MODAL TRIGGER

  if (correctAnswerCount === DATA.length) setIsCompleted(true)
 }

 return (
  <div className='app'>
   {isCompleted ? (
    <Modal countSteps={checkCount} />
   ) : (
    <div className='list-container'>
     <div className='titles'>
      <div className='title-main'>Rank of Programming Languages</div>
      <div className='title-task'>Sort in actual order</div>
     </div>
     <div className='items-wrapper'>
      {list.map((item, index) => {
       return (
        <div
         id={index}
         key={index}
         draggable
         onDragStart={() => onDragStart(item)}
         onDragEnter={(e) => onDragEnter(e)}
         onDragLeave={(e) => onDragLeave(e)}
         onDragOver={(e) => onDragOver(e)}
         onDrop={(e) => onDrop(e, item)}
         className='item'>
         {`${index + 1}. ${item.name}`}
        </div>
       )
      })}
     </div>
     <button className='btn-check' onClick={() => checkOrderHandler()}>CHECK ORDER</button>
    </div>
   )}
  </div>
 )
}
