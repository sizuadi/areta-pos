export default function redirectTo(destination, {res, status} = {}) {
  if (res) {
    res.writeHead(status || 302, {Location: destination})
    res.end()
  } else {
    if (destination[0] === '/' && destination[1] !== '/') {
      window.location.href = destination;
    } else {
      window.location.href = destination;
    }
  }
}
