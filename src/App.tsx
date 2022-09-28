import './assets/App.css'
import ContainerProduct from './components/container/ContainerProduct'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <div className="App h-screen">
      <Header/>
      <ContainerProduct/>
      <Footer/>
    </div>
  )
}

export default App
