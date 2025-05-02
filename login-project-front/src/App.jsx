import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const fetchUser = async () => {
  const res = await fetch('http://localhost:8080/users');
  const data = res.json();
  console.log(data)
}

function App() {

  fetchUser();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        
      </div>
      
    </>
  )
}

export default App
