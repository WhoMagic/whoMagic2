const db = require("../models");

// Defining methods for the booksController
module.exports = {

  create: function(req, res) {
      console.log("you are herhjke in the moment before the database" );

   

    db.WmUser
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      //console.log(res);
  }
};
