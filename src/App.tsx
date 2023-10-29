import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NormalHeader } from './components/NormalHeader'
import { VipHeader } from './components/VipHeader'

function App() {
  const [count, setCount] = useState(0)

  const fullName = 'Georg Taylor';
  let customerKind = 'vip';

  return (
    <>
      <div>
        {customerKind === 'normal' ? (
          <NormalHeader fullName={fullName} />
        ) : (
          <VipHeader fullName={fullName} />
        )}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
