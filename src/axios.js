import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-5a57e.cloudfunctions.net/api", // api URL
});

export default instance;
//localhost: http://localhost:5001/clone-5a57e/us-central1/api --debug locally
