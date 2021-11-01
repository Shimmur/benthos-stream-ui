import { getStats } from '../client/stats'

export const statsCache = async () => {
  const stats = await getStats()
  console.log(stats)
}