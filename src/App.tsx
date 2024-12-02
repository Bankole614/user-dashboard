import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './components/Shared/Layout'
import Dashboard from './components/Dashboard'
import Transactions from './components/Transactions'



const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/transactions' element={<Transactions />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App