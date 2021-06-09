export function getCookie(name: string) {
  const matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)',
    ),
  )
  return matches ? decodeURIComponent(matches[1]) : undefined
}

export function setCookie(name: string, value: string) {
  if (value) {
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)
  }
}
