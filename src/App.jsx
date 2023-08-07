import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import alanBtn from "@alan-ai/alan-sdk-web";
import './App.css'
import { useEffect } from 'react';
import { useRef } from 'react';


function App() {
  const [count, setCount] = useState(0)
  const [clickedButton, setValue] = useState({type: '', value: 0})
  const incEl = useRef();
  const decEl = useRef();
  const resEl = useRef();

  console.log('key: ', import.meta.env.VITE_ALAN_SDK_KEY)

  useEffect(() => {
      alanBtn({
        key:import.meta.env.VITE_ALAN_SDK_KEY,
        onCommand: (commandData) => {
            console.log("command data is: ", commandData)
            if (commandData.command === 'increment') {
              incEl.current.focus()
              setValue({value: commandData.value, type: 'increment'})
              handleIncrement(commandData.value)
            } else if (commandData.command === 'decrement') {
              decEl.current.focus()
              setValue({value: commandData.value, type: 'decrement'})
              handleDecrement(commandData.value)
            } else if (commandData.command === 'reset') {
              resEl.current.focus()
              setValue({value: commandData.value, type: 'reset'})
              handleReset(commandData.value)
            }
        }
    });
  }, [])

  const handleIncrement = (value) => {
    console.log("button clicked: ", value)
    setCount((count) => count + value)
  }

  const handleDecrement= (value) => {
    console.log("button clicked: ", value)
    setCount((count) => count - value)
  }

  const handleReset= (value) => {
    console.log("button clicked: ", value)
    setCount(() => value)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{count}</h1>
      <div className="card">
        <button ref={incEl}>
          + {clickedButton.type=='increment' ? clickedButton.value : 0}
        </button>
        <button ref={decEl}>
          - {clickedButton.type=='decrement' ? clickedButton.value : 0}
        </button>
        <button ref={resEl}>
          (= {clickedButton.type=='reset' ? clickedButton.value : 0}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
