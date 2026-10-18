import express from 'express';

const app = express();
app.use(express.json());

// Preserve these five records. Add exactly two personalized records (IDs 6 and 7).
let equipment = [
  { id: 1, name: 'USB Microphone', category: 'audio', quantity: 5 },
  { id: 2, name: 'LED Panel', category: 'lighting', quantity: 4 },
  { id: 3, name: 'Network Switch', category: 'networking', quantity: 3 },
  { id: 4, name: 'Cable Tester', category: 'tools', quantity: 6 },
  { id: 5, name: 'Studio Headphones', category: 'audio', quantity: 8 }
];

// Set your assigned variant and record it in SUBMISSION.txt.
const variant = 'REPLACE_WITH_A_B_C_OR_D';

app.get('/', (req, res) => {
  res.json({ message: 'COMP229 Equipment Catalogue API — see README.md for instructions' });
});

app.get('/api/equipment', (req, res) => {
  // TODO: Return all equipment records.
  res.status(501).json({ error: 'Not implemented' });
});

// Keep the literal /filter route before /:id.
app.get('/api/equipment/filter', (req, res) => {
  // TODO: Filter by category and apply your variant's name ordering.
  res.status(501).json({ error: 'Not implemented' });
});

app.get('/api/equipment/:id', (req, res) => {
  // TODO: Retrieve a record by its stable ID.
  res.status(501).json({ error: 'Not implemented' });
});

app.post('/api/equipment', (req, res) => {
  // TODO: Validate the body, generate an ID, and create a record.
  res.status(501).json({ error: 'Not implemented' });
});

app.put('/api/equipment/:id', (req, res) => {
  // TODO: Validate the request and replace editable fields, retaining the ID.
  res.status(501).json({ error: 'Not implemented' });
});

app.delete('/api/equipment/:id', (req, res) => {
  // TODO: Delete the record with this ID without renumbering other records.
  res.status(501).json({ error: 'Not implemented' });
});

// Malformed JSON is handled for you. Leave this handler after the routes.
app.use((err, req, res, next) => {
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'Invalid JSON' });
  }
  next(err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '127.0.0.1', () => {
  console.log(`Equipment API: http://localhost:${PORT}`);
});
