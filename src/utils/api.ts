import {getCookie} from './cookie'

export const Api = async (
  url: string,
  options?: {body?: any; method?: string},
) => {
  const token = getCookie('token')
  const res = await fetch(url, {
    body: options.body,
    method: options.method || 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}
