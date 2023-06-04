import Image from 'next/image'

export default function Home() {
  return (
    <main className="mx-auto mt-40 max-w-3xl">
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
    </main>
  )
}
