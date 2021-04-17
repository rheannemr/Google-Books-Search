import axios from "axios";

export default {
    getBooks: function (query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    },

    saveBooks: async function (bookData) {
        return axios.post("/api/books", bookData)
    },

    deleteBooks: async function (id) {
        return axios.delete("/api/books/" + id)
    },

    savedBooks: async function () {
        return axios.get("/api/books")
      }
};