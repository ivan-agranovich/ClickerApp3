import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import appleImg from '/apple-97.png'
import coinImg from '/coin.png'
import './App.css'

//import WebApp from '@twa-dev/sdk'

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
            <button type='button'><img src='/frenz.svg' /><span>Друзья</span></button>
            <button type='button'><img src='/rating.svg' /><span>Рейтинг</span></button>
            <button type='button'><img src='/tasks.svg' /><span>Задания</span></button>
            <button type='button'><img src='/boosts.svg' /><span>Бусты</span></button>
        </div>
      </footer>

      
    </>
  )
}

export default App
