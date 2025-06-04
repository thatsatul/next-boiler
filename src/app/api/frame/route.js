import { writeFile } from 'fs/promises';
import path from 'path';
import { v4 as uuid } from 'uuid'; // Ensure you have 'uuid' installed

export async function POST(req) {
  const formData = await req.formData();
  const frame = formData.get('frame'); // Blob/File

  if (!frame) {
    return new Response(JSON.stringify({ error: 'No frame received' }), { status: 400 });
  }

  const buffer = Buffer.from(await frame.arrayBuffer());
  const filename = `${uuid()}.jpg`;
  const savePath = path.join(process.cwd(), 'public', 'frames', filename);

  try {
    await writeFile(savePath, buffer);
    return Response.json({ status: 'saved', filename });
  } catch (err) {
    console.error('File save error:', err);
    return new Response(JSON.stringify({ error: 'Failed to save frame' }), { status: 500 });
  }
}
