import { NextResponse } from 'next/server';
import { minikitConfig } from '../../../minikit.config';

export async function GET() {
  const manifest = {
    ...minikitConfig.accountAssociation,
    ...minikitConfig.miniapp,
  };

  return NextResponse.json(manifest, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
