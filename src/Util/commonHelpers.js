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
