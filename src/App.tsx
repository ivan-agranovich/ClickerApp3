import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import appleImg from '/apple-97.png'
import coinImg from '/coin.png'

import frenzImg from '/frenz.svg'
import ratingImg from '/rating.svg'
import tasksImg from '/tasks.svg'
import boostsImg from '/boosts.svg'

import './App.css'

import WebApp from '@twa-dev/sdk'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header></header>
      <div className='counter'>
        <img src={coinImg} /> <span>{count}</span>
      </div>
      <div className='content'>
       
        <img src={appleImg} className="logo react" alt="Click here"  onClick={() => setCount((count) => count + 1)} onTouchStart={() => setCount((count) => count + 1)} />
      

      </div>
      <footer>
        <div className='btn-group'>
            <button type='button'><img src={frenzImg} /><span>Друзья</span></button>
            <button type='button'><img src={ratingImg} /><span>Рейтинг</span></button>
            <button type='button'><img src={tasksImg} /><span>Задания</span></button>
            <button type='button'><img src={boostsImg} /><span>Бусты</span></button>
        </div>
      </footer>

      <div className='user-data-container'>
      id = {WebApp.initDataUnsafe?.user?.id}<br/>
       is_bot = {WebApp.initDataUnsafe?.user?.is_bot}<br/>
       first_name = {WebApp.initDataUnsafe?.user?.first_name}<br/>
       last_name = {WebApp.initDataUnsafe?.user?.last_name}<br/>
       photo_url = {WebApp.initDataUnsafe?.user?.photo_url}<br/>

      </div>

      
    </>
  )
}

export default App
