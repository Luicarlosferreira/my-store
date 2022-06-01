import { useState } from 'react'
import './assets/css/App.css'
import SecondSection from './components/infoSection/SecondSection'
import MainSection from './components/main/MainSection'
import SpanScroll from './components/main/SpanScroll'
import RoutesCompoments from './pages/RoutesComponents'

function App() {
  const [count, setCount] = useState('')

  return (


    <div className="App">
      <RoutesCompoments />
        <MainSection />
        <SecondSection />
        <SpanScroll />

    
    </div>
  )
}

export default App
