import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import List from './pages/list'
import Consult from './pages/consult'
import New from './pages/new'
import DashboardList from './pages/dashboardList'
import DashboardConsult from './pages/dashboardConsult'
import Page404 from './pages/page-404'
import MarkId from './components/mark'

const App: React.FC = () => {
  return (
    <Router>
      <div id='back-container'></div>
      <MarkId />
      <Routes>
        <Route path='/ypostirixi' element={<Home />} />
        <Route path='/ypostirixi/new' element={<New />} />
        <Route path='/ypostirixi/list' element={<List />} />
        <Route path='/ypostirixi/os' element={<Consult />} />
        <Route path='/ypostirixi/login' element={<Login />} />
        <Route path='/ypostirixi/maintenance/list' element={<DashboardList />} />
        <Route path='/ypostirixi/maintenance/os' element={<DashboardConsult />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Router>
  )
}

export default App
