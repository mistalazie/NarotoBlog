import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Blog />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
