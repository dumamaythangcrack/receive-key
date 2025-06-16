import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'keys', 'key.txt');
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const match = content.match(/#free:\s*([\s\S]*?)#premium:/i);
    const keys = match ? match[1].trim().split('\n').filter(k => k.trim() !== "") : [];
    res.status(200).json({ key: keys[0] || null });
  } catch (err) {
    res.status(500).json({ error: "Unable to read key file." });
  }
}
