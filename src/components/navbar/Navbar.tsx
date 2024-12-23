import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import toast from 'react-hot-toast'

type Props = {}

const Navbar = (props: Props) => {
  const { signOut } = useAuth()

  const navigate = useNavigate()

  const handleSignOut = async (e) => {
    e.preventDefault()
    const result = await signOut()

    if(result.error) {
      toast.error((result.error).message)
    }

    toast.success('Signed out successfully')
    navigate('/signin')
  }

  return (
    <nav className='w-full fixed top-0 z-[999] bg-white flex justify-between px-[4rem] py-4'>
      <div className='w-full flex items-center justify-between'>
        <Link to='/'>
          {/* Logo */}
          <div className='flex gap-2 items-center'>
            {/* <div className='w-6 h-6'> */}

              {/* <img src={assets.images.logo} alt="company_logo" /> */}
            {/* </div> */}
            <span className='font-bold text-green-600 text-xl'>ElectIQ</span>
          </div>
        </Link>

        {/* Links */}
        <div className='flex items-center border-l-2 border-l-gray-300'>
          <ul className='flex items-center gap-4 pl-3'>
            {/* <li><Link className='py-2 px-2 text-sm hover:text-black-400 transition duration-300' to="/">Home</Link></li> */}
            <li><Link className='py-2 px-3 text-sm rounded-lg hover:bg-gray-400 transition duration-500' to="/signin">Sign in</Link></li>
            <li><Link className='py-2 px-4 text-white text-sm bg-green-700 hover:bg-green-900 transition duration-500 rounded-lg' to="/signup">Start for free</Link></li>
            <li><Link className='py-2 px-4 text-white text-sm bg-green-700 hover:bg-green-900 transition duration-500 rounded-lg' to="/admin">Dashboard</Link></li>
            <li><button onClick={(e) => handleSignOut(e)} className='my-0 py-2 px-4 text-white text-sm bg-error-700 hover:bg-error-400 transition duration-500 rounded-lg'>Logout</button></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar