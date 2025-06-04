// app/api/video/route.js
import { writeFile } from 'fs/promises';
import path from 'path';
import { v4 as uuid } from 'uuid';

export async function POST(req) {
  const formData = await req.formData();
  const video = formData.get('video');

  if (!video) {
    return new Response('No video uploaded', { status: 400 });
  }

  const buffer = Buffer.from(await video.arrayBuffer());
  const filename = `${uuid()}.webm`;
  const filePath = path.join(process.cwd(), 'public', 'videos', filename);

  await writeFile(filePath, buffer);

  return Response.json({ status: 'saved', filename });
}
