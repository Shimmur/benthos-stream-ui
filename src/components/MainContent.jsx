import { statsCache } from '../cache/stats'

export const MainContent = () => {
  statsCache()

  return (
    <div className="flex flex-col w-full h-screen bg-gray-200">
      <p>Hello, Benthos UI!</p>
      <p>
        <a
          href="https://benthos.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Benthos
        </a>
      </p>
    </div>
  )
}
