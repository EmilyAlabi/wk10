
import Link from "next/link"

export default function Navbar() {
  return (
    <nav>
        <ul className="flex justify-between h-[100px] bg-red-700 text-white items-center text-3x1">
          <Link href='/'>
          <li>Home</li>
          </Link>
          <Link href='/course'>
          <li>Course</li>
          </Link>
          <Link href='/about'>
          <li>About</li>
          </Link>
          <Link href='/contact'>
          <li>Contact</li>
          </Link>
        </ul>
    </nav>
  )
}
