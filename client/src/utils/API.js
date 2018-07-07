import axios from "axios";

export default {

  saveEvent: function(eventData){
    return axios.post("/api/event/", eventData);
  },

  getEvent: function(id){
    return axios.get("/api/event/" + id);
  },

  removeEvent: function(id){
    console.log("trigger axios");
    return axios.delete("/api/event/" + id);
  }
};



  /*
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
*/

/*

export default {
  // Gets all books
  getwmUsers: function() {
    return axios.get("/api/wmUsers");
  },
  // Gets the book with the given id
  getwmUsers: function(id) {
    return axios.get("/api/wmUsers/" + id);
  },
  // Deletes the book with the given id
  deletewmUsers: function(id) {
    return axios.delete("/api/wmUsers/" + id);
  },
  // Saves a book to the database
  savewmUsers: function(bookData) {
    return axios.post("/api/wmUsers", bookData);
  }
};


*/
