import axios from "axios";

// https://axios-http.com/docs/instance
export default axios.create({
  baseURL: "https://quizgs.herokuapp.com/api/",
  headers: { Authorization: "" }, // TODO: Add token
});
