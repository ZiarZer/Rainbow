export function setCookie(cookieName, cookieValue) {
  document.cookie = `${cookieName}=${encodeURIComponent(cookieValue)}`;
}

export function getCookie(cookieName) {
  const cookie = document.cookie
    .split('; ')
    .map((cookie) => cookie.split('='))
    .find(([savedCookieName]) => cookieName === savedCookieName);
  return cookie ? decodeURIComponent(cookie[1]) : null;
}
