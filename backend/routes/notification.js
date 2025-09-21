const express = require('express');
const router = express.Router();
const auth = require('../middleware/middleware');
const User = require('../model/usermodel');

// fetch notifications
router.get('/', auth, async (req, res) => {
  const user = await User.findById(req.user._id);
  res.json(user.notifications || []);
});

// mark as read
router.post('/read/:id', auth, async (req, res) => {
  const nid = req.params.id;
  const user = await User.findById(req.user._id);
  const n = user.notifications.id(nid);
  if (n) {
    n.read = true;
    await user.save();
    return res.json({ success: true });
  }
  res.status(404).json({ success: false });
});

module.exports = router;
