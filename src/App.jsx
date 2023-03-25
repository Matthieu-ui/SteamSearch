
import './App.css'
import Main from './components/Main'
import Header from './components/Header'
import Aside from './components/Aside'

// toggle aside

const [asideToggle, setAsideToggle] = useState(false)

const toggleAside = () => {
  setAsideToggle(!asideToggle)
}






function App() {


  return (
    <div className="App">
    {/* Header */}
    
    <Header />


    <div className="flex flex-col md:flex-row">
    <aside className="w-full md:w-1/4">
      <Aside/>
    </aside>
    <main className="w-full md:w-3/4">
      <Main/>
    </main>
  </div>

    </div>
  )
}

export default App
