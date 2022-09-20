import { useCounter, increment } from './store/counter'
import preactLogo from './assets/preact.svg'
import nanoStoresLogo from './assets/nanostores.svg'
import './app.css'

export function App() {
  const count = useCounter()

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' class='logo' alt='Vite logo' />
        </a>
        <a href='https://preactjs.com' target='_blank'>
          <img src={preactLogo} class='logo preact' alt='Preact logo' />
        </a>
        <a href='https://github.com/nanostores/nanostores' target='_blank'>
          <img
            src={nanoStoresLogo}
            class='logo nanostores'
            alt='Nano Stores logo'
          />
        </a>
      </div>
      <h1>Vite + Preact + Nano Stores</h1>
      <div class='card'>
        <button onClick={increment}>count is {count}</button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p class='read-the-docs'>
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}
