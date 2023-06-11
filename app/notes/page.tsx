import Image from 'next/image'
import Link from 'next/link'

export default function Notes() {
  return (
    <section>
      <h1 className="mb-4 text-4xl font-bold">Notes</h1>
      <div className="mb-10 flex flex-col gap-4">
        <div className="flex justify-between">
          <div>
            <h5 className="font-semibold">
              The making of mustafaalshammaa.dev
            </h5>
            <p>Showing you how I build my portfolio site</p>
          </div>
          <span>1452 views</span>
        </div>
        <div className="flex justify-between">
          <div>
            <h5 className="font-semibold">Next.js 13 app dir and Next Auth</h5>
            <p>Using NextAuth with Next.js</p>
          </div>
          <span>560 views</span>
        </div>
      </div>
    </section>
  )
}
