import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ imageName: string }> }
) {
  try {
    const resolvedParams = await params;
    const imageName = resolvedParams.imageName;
    const imagePath = path.join(process.cwd(), 'src', 'assets', imageName);

    // Check if file exists
    try {
      await fs.access(imagePath);
    } catch {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    // Read the image file
    const imageBuffer = await fs.readFile(imagePath);

    // Get the file extension to set the correct content type
    const ext = path.extname(imageName).toLowerCase();
    const contentType =
      {
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.gif': 'image/gif',
        '.webp': 'image/webp',
      }[ext] || 'application/octet-stream';

    // Return the image with appropriate headers
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000',
      },
    });
  } catch (error) {
    console.error('Error serving image:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
