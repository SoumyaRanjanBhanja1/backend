const express = require('express');
const passport = require('passport');
const { getCurrentUser, logout } = require('../controllers/authController');

const router = express.Router();

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ email: req.user.email, role: req.user.role });
});

router.get('/me', getCurrentUser);
router.get('/logout', logout);

module.exports = router;
