import Image from 'next/image'
import Link from 'next/link'
import HelloWorld from './hello.mdx'

export default function Home(props) {
  const testingProp = 'hejhejhej'
  return (
    <>
      <section>
        <div className="flex justify-between gap-6">
          <div>
            <h1 className="mb-4 text-4xl font-bold">Hey, I&apos;m Musse</h1>
            <p>
              A Senior Frontend Developer and Co-founder of Pluck. This is my
              platform for sharing thoughts and lessons learned along the way.
            </p>
          </div>
          <Image src="/me.jpg" alt="Me" width={300} height={300} />
        </div>
      </section>

      <section>
        <HelloWorld test={testingProp} />
      </section>

      <section>
        <h2 className="mb-10 font-bold">Recent notes</h2>
        <div>
          <div className="mb-10 flex flex-col gap-6">
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
                <h5 className="font-semibold">
                  Next.js 13 app dir and Next Auth
                </h5>
                <p>Using NextAuth with Next.js</p>
              </div>
              <span>560 views</span>
            </div>
          </div>
          <Link href="/" className="underline">
            All notes
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-10 font-bold">Recent projects</h2>
        <div>
          <div className="mb-10 grid grid-cols-2 gap-6">
            <div className="flex h-64 flex-col rounded-lg bg-white p-10 shadow-sm dark:bg-neutral-800">
              <h4 className="flex-1 text-2xl">Dinbox</h4>
              <div className="">
                <h5 className="font-semibold">
                  Next.js 13 app dir and Next Auth
                </h5>
                <p>Showing you how I build my portfolio site</p>
              </div>
            </div>
            <div className="flex h-64 flex-col rounded-lg bg-white p-10 shadow-sm dark:bg-neutral-800">
              <h4 className="flex-1 text-2xl">Dinbox</h4>
              <div className="">
                <h5 className="font-semibold">
                  Next.js 13 app dir and Next Auth
                </h5>
                <p>Showing you how I build my portfolio site</p>
              </div>
            </div>
          </div>
          <Link href="/" className="underline">
            All projects
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-10 font-bold">Recent added snippets</h2>
        <div>
          {/* Recent added snippets here */}
          <Link href="/" className="underline">
            All snippets
          </Link>
        </div>
      </section>
    </>
  )
}
