import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import ExUseContext from './useContext/ExUseContext'
import ExUseRef from './useRef/ExUseRef'
import ExUseEffect from './useEffect/ExUseEffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ExUseContext></ExUseContext>
      <ExUseRef></ExUseRef>
      <ExUseEffect></ExUseEffect>
    </>
  )
}

export default App
