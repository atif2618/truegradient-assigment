const express = require('express');
const router = express.Router();
const auth = require('../middleware/middleware');
// simple in-memory messages per user (for demo). In production use DB.
const messagesStore = {}; // { userId: [{from, text, createdAt}] }

router.get('/messages', auth, (req, res) => {
  const userId = req.user._id.toString();
  res.json(messagesStore[userId] || []);
});

router.post('/messages', auth, (req, res) => {
  const userId = req.user._id.toString();
  const { text, from = 'me' } = req.body;
  messagesStore[userId] = messagesStore[userId] || [];
  const msg = { from, text, createdAt: new Date() };
  messagesStore[userId].push(msg);
  // also push a bot reply for demo
  messagesStore[userId].push({ from: 'bot', text: `Echo: ${text}`, createdAt: new Date() });
  res.json({ success: true, message: msg });
});

module.exports = router;
