import {data} from "@/app/page"
import Image from "next/image"

export default function page({params}) {

    const stars = data.find(pro => pro.id === params.slug)
  return (
    <section>
        <h1>{stars.name}</h1>
        <Image src={stars.image} alt={stars.name} width={500} height={300} className='m-auto ' />
        <h2>Nationality: {stars.nationality}</h2>
        <p>Profession:{stars.profession}</p>
        <p>Date of Birth: {stars.date_of_birth}</p>
        <p>Net worth: {stars.net_worth}</p>
        <p>Description: {stars.description}</p>
    </section>
  )
}
