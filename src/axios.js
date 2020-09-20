import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-5a57e/us-central1/api", // api URL
});

export default instance;
