import React from 'react'
import { useState } from 'react/cjs/react.development'
import './App.css'

let PROGRAMMING_LIST = [
 { name: 'React', id: 1 },
 { name: 'ASP.NET MVC', id: 2 },
 { name: 'Angular', id: 3 },
 { name: 'Ruby on Rails', id: 4 },
 { name: 'Angular.JS', id: 5 },
 { name: 'Vue.JS', id: 6 },
 { name: 'Django', id: 7 },
 { name: 'Laravel', id: 8 },
]

export default function App() {
 const [list, setList] = useState(PROGRAMMING_LIST)
 let currentCard = {}
 let nextCard = {}

 //DRAG HANDLERS

 const onDragStart = (item) => (currentCard = item)

 const onDragEnter = (e) => e.preventDefault()

 const onDragLeave = (e) => {
  e.preventDefault()
  e.target.style.background = ''
 }

 const onDragOver = (e) => {
  e.preventDefault()
  e.target.style.background = 'rgb(115, 102, 204)'
 }

 const onDrop = (event, item) => {
  nextCard = item
  event.target.style.background = ''
  changeItems(list, currentCard, nextCard)
 }

 //ITEM CHANGE FUNCTION

 const changeItems = (list, currentCard, nextCard) => {
  const listClone = [...list]
  const currentIndex = list.findIndex((el) => el.id === currentCard.id)
  const nextIndex = list.findIndex((el) => el.id === nextCard.id)
  listClone[currentIndex] = nextCard
  listClone[nextIndex] = currentCard
  setList(listClone)
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
   </div>
  </div>
 )
}
