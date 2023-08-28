import Link from "next/link"
export default function CourseNav() {
  return (
    <aside> 
    <ul>
        <Link href='/course/backend'>
        <li>backend</li>
        </Link>
        
        <Link href='/course/frontend'>
        <li>frontend</li>
        </Link>

        <Link href='/course/product'>
        <li>product design</li>
        </Link>
        
    </ul> CourseNav</aside>
  )
}
