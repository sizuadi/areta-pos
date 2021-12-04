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
