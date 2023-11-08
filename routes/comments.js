const express = require("express");
const router = express.Router();

const commentsCtrl = require('../controllers/comments');

router.get('/comments/:id/edit', commentsCtrl.edit);



router.post('/listings/:id/comments', commentsCtrl.create);
router.delete('/comments/:id', commentsCtrl.delete)



module.exports = router;