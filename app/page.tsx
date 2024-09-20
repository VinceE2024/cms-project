import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const questions = Array.from({ length: 8 }, (_, i) => `Question${i + 1}`)

  return (
    <div className="min-h-screen flex flex-col p-4">
      <header className="w-full flex justify-between mb-8">
        <h1 className="text-lg font-semibold">
          Vincent, Digital Success Take Home Assignment
        </h1>
        <p className="text-lg font-semibold">By Vercel</p>
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-center space-y-8">
        <div className="flex items-center space-x-4">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        </div>
        
        <nav>
          <ul className="flex flex-col items-center space-y-2">
            {questions.map((question) => (
              <li key={question}>
                <Link 
                  href={`/${question}`}
                  className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  {question}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </div>
  )
}