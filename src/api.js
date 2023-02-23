import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/',
  headers: {
    'X-CSRFToken': Cookies.get("csrftoken"),
  },
});

export const getAllFeeds = async () => {
  instance.get("feeds/v").then((res) => res.data);
};
