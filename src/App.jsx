import { useState } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Pacientes from './pages/Pacientes'
import RegistroPaciente from './pages/RegistroPaciente'
import Home from './pages/Home'
import { AuthProvider } from './context/authContext'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { ProtectedRoute } from './components/ProtectedRoute'

const Layout = () => (
  <>
    <Navbar/>
    <Outlet/>
  </>
)

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route element={<ProtectedRoute><Layout/></ProtectedRoute>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/pacientes' element={<Pacientes/>}/>
          <Route path='/registros' element={<RegistroPaciente/>}/>
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
