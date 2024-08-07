import { json, NextResponse } from 'next/server';

export async function POST(request) {
    const { message } = await request.json();
    const response = `Resposta para: ${message}`;
    
    return NextResponse.json({ response });
}