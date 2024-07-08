import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-2 bg-black text-white h-10 sm:h-16 md:h-24 sm:px-4 lg:px-8">
      <Link to='/'>
        <h1 className="text-2xl sm:text-3xl md:text-5xl">HRNet</h1>
      </Link>
      <Link to='/employees'>
        <span className={`text-lg sm:text-2xl`}>Employees</span>
      </Link>
    </header>
  )
}

export default Navbar