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

export function deleteCookie(name) {
  if (getCookie(name)) {
    document.cookie = name + '=' + ';expires=Thu, 01 Jan 1970 00:00:01 GMT'
  }
}
