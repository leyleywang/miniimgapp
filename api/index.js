const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const OPENAI_API_KEY = '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';  // 替换为你的 OpenAI API 密钥
const OPENAI_API_URL = 'https://api.openai.com/v1/images/generations';  // 或其他你需要的 endpoint

app.post('/proxy', async (req, res) => {
  console.log('rrrreeeqqq',req.body)
  try {
    const response = await axios.post(OPENAI_API_URL, req.body, {
      header: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error contacting OpenAI:', error);
    res.status(500).send('Error contacting OpenAI');
  }
});
app.get('/', async (req, res) => {
    try {
      console.log('uniapp----')
      res.send("ok");
    } catch (error) {
      console.error('Error contacting OpenAI:', error);
      res.status(500).send('Error contacting OpenAI');
    }
  });
app.get('/t', async (req, res) => {
    try {
      console.log('uniapp----ttt')
      res.send("ttt");
    } catch (error) {
      console.error('Error contacting OpenAI:', error);
      res.status(500).send('Error contacting OpenAI');
    }
  });
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
module.exports = app;
