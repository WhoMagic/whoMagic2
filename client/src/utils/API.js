import axios from "axios";



export default {
 
  //WMUSERS API CALLS
    //Registration email check
    registerCheck: function(email){
      return axios.get("/api/wmUser/" + email);
    },

    createUser: function(userData){ 
      return axios.post("/api/wmUser/", userData);
    },

    updateProfile: function(userUpdate){
      console.log("this is update: " + userUpdate);
      return axios.put("/api/wmUser/", userUpdate);
    },

  //EVENTS API CALLS
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
