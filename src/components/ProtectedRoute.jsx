import { useAuth } from "../context/authContext"
import {Navigate} from 'react-router-dom'

export function ProtectedRoute ({children}) {

    const {user, loading} = useAuth()

    if (loading) {
      return (
        <div className="flex justify-center items-center p-20 h-screen">
          <button className='btn loading btn-ghost'>Loading</button>
        </div>
      )
    }

    if (!user) {
        return <Navigate to="/login"/>
    }

  return (
    <>
        {children}
    </>
  )
}