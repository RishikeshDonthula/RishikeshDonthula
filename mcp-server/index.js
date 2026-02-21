import express from 'express';
const app = express();
app.use(express.json());

app.post('/mcp', (req, res) => {
  const payload = req.body || {};
  // Minimal placeholder response — replace with real MCP logic
  res.json({
    ok: true,
    received: payload,
    message: 'MCP server scaffold: implement your handlers here.'
  });
});

app.get('/', (req, res) => res.send('MCP server: POST to /mcp'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`MCP server listening on ${PORT}`));
