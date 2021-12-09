import api from "../Util/api";

export const deleteHandler = (id, reloader, url) => {
  api().delete(`api/${url}/${id}`).then(response => {
    window['toastr'].success(response.data.message);
    reloader(prev => ({...prev}));
  });
}