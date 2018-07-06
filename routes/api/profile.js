const router = require("express").Router();
const profilesController = require("../../controllers/profilesController");

// Matches with "/api/books"
router.route("/")
 // .get(booksController.findAll)
  .post(profilesController.create);

// Matches with "/api/books/:id"

/*
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);
*/
module.exports = router;
