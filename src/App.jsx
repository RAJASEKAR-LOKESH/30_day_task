import { Route, Routes } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';

function App() {
  
  return (
    <Layout>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/create" element={<Create/>} />
      <Route path="/update/:id" element={<Update/>} />
      </Routes>
    </Layout>
  )
}

export default App
