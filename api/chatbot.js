import { json, NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { message } = await request.json();
        const response = `Resposta para: ${message}`;
        
        return NextResponse.json({ response });
    } catch (error) {
        return NextResponse.json({ error: 'Erro ao processar a solicitação' }, { status: 500 });
    }
}
