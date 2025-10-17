import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('Webhook received:', body);
    
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ status: 'Webhook endpoint is active' });
}
