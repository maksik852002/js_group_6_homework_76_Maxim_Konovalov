const express = require('express');
const router = express.Router();
const fileDb = require('../fileDb');

router.get('/', async (req, res) => {
  const messages = await fileDb.getMessages();
  const date = new Date(req.query.datetime)
  if (req.query.datetime) {
    if(isNaN(date.getDate())) { 
      res.status(400).send({"error": "Bad date"})
    } else {
      const data = messages.filter(message => message.datetime > req.query.datetime)
      res.send(data);
    }
  } else {
    res.send(messages.slice(-30));
  }
});

router.post('/', async (req, res) => {
  if (req.body.message.length === 0 || req.body.author.length === 0) {
   res.status(400).send({"error": "Author and message must be present in the request"})
  } else {
    await fileDb.addMessage(req.body);
    res.send(req.body.id);
  }
});

module.exports = router;