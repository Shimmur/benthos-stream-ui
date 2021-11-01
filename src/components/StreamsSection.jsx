import { useContext } from 'react'
import { StreamsContext } from '../cache/streams'
import { StreamsTable } from './StreamsTable/StreamsTable'

export const StreamsSection = () => {
  const { streams: { streams, isLoading, error } } = useContext(StreamsContext)

  if (isLoading) return <h1>Loading</h1>
  if (error) return <h1>Error</h1>

  return <>
    <h1 className="text-5xl mb-4">Streams</h1>
    <StreamsTable />
  </>

}