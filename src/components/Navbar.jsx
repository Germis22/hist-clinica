import React from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const {user, logout, loading} = useAuth() 
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout();
    navigate('/login')
  }

  return (
    <div className="navbar bg-base-300 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href='/registros'>Registrar Paciente</a>
            </li>

            <li>
              <a href='/pacientes'>Pacientes</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl" href='/'>Historia Clinica</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a href='/registros'>Registrar Paciente</a>
          </li>

          <li>
            <a href='/pacientes'>Pacientes</a>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
            </div>
            </label>
            <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 mr-3 shadow bg-base-100 rounded-box w-52"
            >
                <li>
                    <button className='btn btn-disabled w-full bg-base-100 flex justify-start'>{user.email}</button>
                </li>
                <li>
                    <a>
                    Profile
                    </a>
                </li>
                <li>
                    <a>Settings</a>
                </li>
                <li>
                    <a onClick={handleLogout}>Logout</a>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar