import Api from "./Api";

export default {
  index() {
    return Api().get("songs");
  },
  create(data) {
    return Api().post("songs",data);
  }
};
