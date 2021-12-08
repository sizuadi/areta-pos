export const defaultBlueprint = () => {
  return {
    current_page: 0,
    data: [],
    first_page_url: "",
    from: 0,
    last_page: 0,
    last_page_url: "",
    links: [],
    next_page_url: "",
    path: "",
    per_page: 0,
    prev_page_url: "",
    to: 0,
    total: 0,
  }
}

export const dummyBlueprint = () => {
  return {
    current_page: 1,
    data: [],
    first_page_url: null,
    from: 1,
    last_page: 2,
    last_page_url: null,
    links: [
      {
        "url": null,
        "label": "&laquo; Sebelumnya",
        "active": false
      },
      {
        "url": "http://localhost:8080/api/products?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "Berikutnya &raquo;",
        "active": false
      }
    ],
    next_page_url: null,
    path: "http://localhost:8080/api/products",
    per_page: 5,
    prev_page_url: null,
    to: 5,
    total: 5,
  }
}