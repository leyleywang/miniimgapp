const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const OPENAI_API_KEY = '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';  // 替换为你的 OpenAI API 密钥
const OPENAI_API_URL = 'https://api.openai.com/v1/completions';  // 或其他你需要的 endpoint

app.post('/proxy', async (req, res) => {
  try {
    const response = await axios.post(OPENAI_API_URL, req.body, {
      headers: {
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
      console.log('uniapp')
      res.json({response:"ok"});
    } catch (error) {
      console.error('Error contacting OpenAI:', error);
      res.status(500).send('Error contacting OpenAI');
    }
  });
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
