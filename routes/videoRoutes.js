const express = require('express');
const {
  getVideos, addVideo, updateVideo, deleteVideo,
} = require('../controllers/videoController');

const router = express.Router();

router.get('/', getVideos);
router.post('/add', addVideo);
router.put('/:id', updateVideo);
router.delete('/:id', deleteVideo);

module.exports = router;
