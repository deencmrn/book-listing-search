import axios from 'axios';


const http = axios.create( {
    baseURL: "https://goodreads-server-express--dotdash.repl.co/search/",
});

export default {
    
     getTerm(term) {
         return http.get(term);
     },
   
};