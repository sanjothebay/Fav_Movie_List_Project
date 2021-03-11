import axios from "axios";

const BASEURL = "https://api.themoviedb.org/3/search/movie?api_key=";
const APIKEY = "876f2074a55d5422da2cf0316ae4368b";
//const BASEURL2 = "&language=en-US&page=1&include_adult=false"


// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + APIKEY + "&query=" + query  );
  }
};
