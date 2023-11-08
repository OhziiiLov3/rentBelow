const express = require("express");
const router = express.Router();

const commentsCtrl = require('../controllers/comments');

router.get('/comments/:id/edit', commentsCtrl.edit);



router.post('/comments/:id', commentsCtrl.create);
router.put('/comments/:id',commentsCtrl.update)
router.delete('/comments/:id', commentsCtrl.delete)



module.exports = router;