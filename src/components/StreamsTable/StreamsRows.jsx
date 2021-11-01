import { useContext } from 'react'
import { StreamsContext } from '../../cache/streams'
import { StreamsRow } from './StreamsRow'


export const StreamsRows = () => {
  const { streams: { streams } } = useContext(StreamsContext)
  return <>
    {Object.entries(streams).map(([streamId, streamConfig], i) => {
      return <StreamsRow {...streamConfig} id={streamId} key={i} />
    })}
  </>
}