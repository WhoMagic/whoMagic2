const router = require("express").Router();
const bookRoutes = require("./books");
const profileRoutes = require("./profile");


//Routes
router.use("/books", bookRoutes);
router.use("/profile", profileRoutes);
module.exports = router;
