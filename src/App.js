import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import About from './components/pages/About'
import Main from './components/pages/Main'

function App() {
  return (
    <main className='h-full min-h-screen w-screen flex flex-col content-center justify-center bg-right-bottom md:bg-center'>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}

export default App
