const router = require("express").Router();
const wmUserController = require("../../controllers/wmUserController");

router
  .route("/")
  .post(wmUserController.create);

router
 // .route("/:id")
 // .get(wmUserController.findOne)
 // .delete(wmUserController.remove);

 // .put(booksController.update)
 // .delete(booksController.remove);

module.exports = router;
