import React from 'react'
import { useAuth } from '../context/authContext'

const Home = () => {

  const {user, loading} = useAuth()

  if (loading) return <h1>Loading</h1>;

  return (
    <div>
        <p>Welcome {user.email}</p>
    </div>
  )
}

export default Home