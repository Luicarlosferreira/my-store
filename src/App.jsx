import { useState } from 'react'
import './assets/css/App.css'
import SecondSection from './components/infoSection/SecondSection'
import MainSection from './components/main/MainSection'

function App() {
  const [count, setCount] = useState('')

  return (


    <div className="App">
        <MainSection></MainSection>
        <SecondSection></SecondSection>

    </div>
  )
}

export default App
