import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');

  const { prompt, size = "512x512" } = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/images/generations',
      { prompt, n: 1, size },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    res.status(200).json({ image: response.data.data[0].url });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: err.response?.data || err.message });
  }
}
