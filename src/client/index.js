const host = import.meta.env.VITE_BENTHOS_HOST
const port = import.meta.env.VITE_BENTHOS_PORT
const BENTHOS_BASE_URL = `http://${host}:${port}`

const call = async (path, { method }) => {
  const response = await fetch(`${BENTHOS_BASE_URL}/${path}`, {
    method: method || 'GET',
    mode: 'no-cors',
    cache: 'no-cache',
  });

  if (response.ok) {
    try {
      return await response.json()
    }
    catch (e) {
      console.info(e)
      return {}
    }
  }
  else {
    console.info(response.status)
    return {}
  }
}

export const GET = (path) => {
  return call(path, { method: 'GET' })
}
