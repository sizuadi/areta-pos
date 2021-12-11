import { toast } from "react-toastify";
import api from "../Util/api";

export const deleteHandler = (id, reloader, url) => {
  api().delete(`api/${url}/${id}`).then(response => {
    toast.success(response.data.message);
    reloader(prev => ({...prev}));
  });
}