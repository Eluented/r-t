import { ImageResponse } from 'next/og';
import { OGTemplate } from './og-template';

export const runtime = 'edge';

export async function GET(request: Request) {
  return new ImageResponse(
    <OGTemplate />, 
    { width: 1200, height: 630 }
  );
}
