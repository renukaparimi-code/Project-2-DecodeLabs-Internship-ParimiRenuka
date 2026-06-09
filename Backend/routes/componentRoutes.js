const express = require("express");

const router = express.Router();

const {
  getComponents,
  getSingleComponent,
  addComponent,
  deleteComponent
} = require("../controllers/componentController");



router.get("/", getComponents);

router.get("/:id", getSingleComponent);

router.post("/", addComponent);

router.delete("/:id", deleteComponent);



module.exports = router;