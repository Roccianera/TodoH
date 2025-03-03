
import './App.css'
import { Link } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Registration from './pages/Registration'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Button from './components/Button'
import Header from './components/Header'


function App() {

  return (
    <>
      <Router>
      <div className="app">
   
        <Header></Header>
     


        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard></Dashboard>} />
            <Route path="/register" element={<Registration />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>

    </>
  )
}

export default App
