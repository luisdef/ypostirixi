import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import List from './pages/list'
import Consult from './pages/consult'
import New from './pages/new'
import DashboardList from './pages/dashboardList'
import DashboardConsult from './pages/dashboardConsult'

const App: React.FC = () => {
  return (
    <Router>
      <div id='back-container'></div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/list' element={<List />} />
        <Route path='/os' element={<Consult />} />
        <Route path='/login' element={<Login />} />
        <Route path='/maintenance/list' element={<DashboardList />} />
        <Route path='/maintenance/os' element={<DashboardConsult />} />
      </Routes>
    </Router>
  )
}

export default App
