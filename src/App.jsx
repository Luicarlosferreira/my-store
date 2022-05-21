import { useState } from 'react'
import './assets/css/App.css'
import MainSection from './components/main/MainSection'

function App() {
  const [count, setCount] = useState('')

  return (


    <div className="App">
        <MainSection></MainSection>

    </div>
  )
}

export default App
