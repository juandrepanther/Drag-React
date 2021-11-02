import React, { useState } from 'react'
import './App.css'

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

let CHECK_LIST = [
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
 const [list, setList] = useState(RANDOM_DATA_LIST)
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
  list.forEach((item, index) => {
   if (item.name === CHECK_LIST[index]) {
    const correct = document.getElementById(`${index}`)
    correct.style.background = 'green'
   } else {
    const incorrect = document.getElementById(`${index}`)
    incorrect.style.background = 'red'
   }
  })
 }

 return (
  <div className='app'>
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
    <button onClick={() => checkOrderHandler()}>CHECK ORDER</button>
   </div>
  </div>
 )
}
