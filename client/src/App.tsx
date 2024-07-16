import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import List from './pages/list'

const App: React.FC = () => {
  return (
    <Router>
      <div id='back-container'></div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/list' element={<List />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
