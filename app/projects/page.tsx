import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  return (
    <section>
      <h1 className="mb-4 text-4xl font-bold">Projects</h1>
      <div className="mb-10 flex flex-col gap-4">
        <div className="flex justify-between">
          <div>
            <h5 className="font-semibold">Dinbox</h5>
            <p>Showing you how I build my portfolio site</p>
          </div>
          <span>Mar 3, 2023</span>
        </div>
        <div className="flex justify-between">
          <div>
            <h5 className="font-semibold">Dinbox</h5>
            <p>Using NextAuth with Next.js</p>
          </div>
          <span>Jun 24, 2023</span>
        </div>
      </div>
    </section>
  )
}
