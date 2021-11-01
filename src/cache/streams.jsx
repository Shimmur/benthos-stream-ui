import { useEffect, useState, createContext } from 'react'
import { getStreams, getStream } from '../client/streams'

export const StreamsContext = createContext()

export const StreamsCache = ({ children }) => {
  const [streams, setStreams] = useState([])
  const [isLoadingStreams, setIsLoadingStreams] = useState(true)
  const [errorStreams, setErrorStreams] = useState(false)
  const [stream, setStream] = useState({})
  const [isLoadingStream, setIsLoadingStream] = useState(true)
  const [errorStream, setErrorStream] = useState(false)
  const loadStreams = async () => {
    setIsLoadingStreams(true);
    try {
      const response = await getStreams()
      const streams = await response
      setStreams(streams);
    } catch (e) {
      console.error(e)
      setErrorStreams(e);
    } finally {
      setIsLoadingStreams(false);
    }
  }
  const loadStream = async (streamId) => {
    setIsLoadingStream(true);
    try {
      const response = await getStream(streamId)
      const stream = await response
      setStream(stream);
    } catch (e) {
      console.error(e)
      setErrorStream(e);
    } finally {
      setIsLoadingStream(false);
    }
  }
  useEffect(() => {
    loadStreams()
  }, [])

  const cacheValue = {
    streams: {
      streams,
      isLoading: isLoadingStreams,
      error: errorStreams,
    },
    stream: {
      stream,
      isLoading: isLoadingStream,
      error: errorStream,
    },
    loadStreams,
    loadStream,
  }
  return <StreamsContext.Provider value={cacheValue}>
    {children}
  </StreamsContext.Provider>
}
