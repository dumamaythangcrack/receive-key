import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'keys', 'key.txt');
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const freeBlock = content.match(/#free:\\s*([\\s\\S]*?)#premium:/i);
    const keys = freeBlock ? freeBlock[1].trim().split('\\n').filter(k => k.trim()) : [];
    res.status(200).json({ key: keys[0] || null });
  } catch (err) {
    res.status(500).json({ error: "Cannot read key file." });
  }
}
