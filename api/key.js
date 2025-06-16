// api/key.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const secretHeader = req.headers['x-api-secret'];

  if (secretHeader !== 'Cryzhen-Secret-2025') {
    return res.status(403).json({ error: 'Forbidden' });
  }

  const filePath = path.join(process.cwd(), 'public', 'key.txt');
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/#free:\s*([\s\S]*?)#premium:/i);
    const keys = match ? match[1].trim().split('\n').filter(k => k.trim() !== '') : [];
    
    if (keys.length > 0) {
      res.status(200).json({ key: keys[0].trim() });
    } else {
      res.status(404).json({ error: 'No free key available' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
