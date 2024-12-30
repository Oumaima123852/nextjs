import Link from "next/link"

export default function Home() {
  console.log("what am i doing here?")

  return (
    <div>
       <h1>Welocome to Next.js</h1>
       <Link href="/postes">Posts page</Link>
    </div>
  )
}
