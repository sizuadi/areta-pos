export const rupiah = (nominal) => {
  const formatter = new Intl.NumberFormat("en-ID", {
    style: "currency",
    currency: "IDR",
  })
    .format(nominal)
    .replace(/[IDR]/gi, "")
    .trimLeft();

  return `Rp. ${formatter}`;
}

export const asset = url => {
  const firstChar = url.charAt(0);
  
  let formattedUrl = ''

  if (firstChar !== '/') {
    formattedUrl = url;
  } else {
    formattedUrl = url.substring(1);
  }
  
  return `${window.location.origin}/${formattedUrl}`;
}

export const isActivePath = (expected) => {
  if (expected.split('/').length > 2) {
    return window.location.pathname.split('/')[2] === expected.split('/')[2];
  }
  
  return expected.replace('/', '') === window.location.pathname.split('/')[1];
}

export function abortController() {
  return new AbortController();
}