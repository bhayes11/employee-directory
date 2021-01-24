import axios from "axios";
import API from "../../utils/API";
// Export an object containing methods we'll use for accessing the randomuser API

export default {
  getRandomEmployee: function() {
    return axios.get("https://randomuser.me/api/");
  },
};
