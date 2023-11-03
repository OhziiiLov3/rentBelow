const express = require("express");
const router = express.Router();

const listingsCtrl = require('../controllers/listings');

// GET -> /lisitings
router.get('/', listingsCtrl.index);
router.get("/new", listingsCtrl.new);
router.get("/:id", listingsCtrl.show);

// POST -> /listings
router.post('/', listingsCtrl.create)



module.exports = router;