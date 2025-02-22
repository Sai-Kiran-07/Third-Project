import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import PlayGame from './components/PlayGame'

function App() {
  const [isStartGame, setIsStartGame] = useState(false);

  const togglePlay = () =>{
    setIsStartGame((prev)=>!prev);
  }

  return (
    <>
    {isStartGame ? <PlayGame/>:<Home toggle={togglePlay}/>}
    </>
  )
}

export default App
