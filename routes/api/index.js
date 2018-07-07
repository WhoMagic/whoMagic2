const router = require("express").Router();
const bookRoutes = require("./books");
const eventRoutes = require("./event");


//Routes
router.use("/books", bookRoutes);
router.use("/event", eventRoutes);


module.exports = router;
