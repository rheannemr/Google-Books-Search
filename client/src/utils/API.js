import axios from "axios";

export default {
    getBook: function (query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    },

    saveBook: async function (bookData) {
        return axios.post("/api/books", bookData).then(result => result.data);
    },

    deleteBook: async function (id) {
        return axios.delete("/api/books/" + id).then(result => result.data);
    },

    savedBooks: async function () {
        return axios.get("/api/books").then(result => result.data);
      }
};