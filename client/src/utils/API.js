import axios from "axios";

export default {
    getBook: function (query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    },

    saveBook: async function (bookData) {
        return axios.post("/api/books", bookData)
    },

    deleteBook: async function (id) {
        return axios.delete("/api/books/" + id)
    },

    savedBook: async function () {
        return axios.get("/api/books")
      }
};