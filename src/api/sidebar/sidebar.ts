import Api from "../api";
import urlApi from "./urlApi"
class SidebarService {
  getSideBar() {
    return Api.get(urlApi.GET_SIDE_BAR);
  }
}
export default new SidebarService();