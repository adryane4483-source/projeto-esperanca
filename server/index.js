
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'API da ONG Projeto Esperança funcionando!',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
