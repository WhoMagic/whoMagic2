const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// Matches with "/api/books"
router
  .route("/")
  .post(eventsController.create);

// Matches with "/api/books/:id"


router
  .route("/:id")
  .get(eventsController.findOne);
 // .put(booksController.update)
 // .delete(booksController.remove);

module.exports = router;
