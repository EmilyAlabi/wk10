import Image from "next/image"
import Link from "next/link"

export default function Stars({stars}) {

  const topstars = stars.map(pro => (
    <aside key ={pro.id}>
        <Link href={`/stars/${pro.id}`}>
        <Image src={pro.image} alt={pro.name} width={300} height={300} />
        <h1>{pro.name}</h1>
        <h2>{pro.nationality}</h2>
        <h3>{pro.profession}</h3>
        </Link>
    </aside>
   ) )
  return (
    <section className=" grid grid-cols-3 gap-2">
      {topstars}
    </section>
  )
}
