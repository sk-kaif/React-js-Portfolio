import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    // Basic validation (cheap + effective)
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // ---- ENV CHECK (fail fast) ----
    const TG_BOT_TOKEN = process.env.TG_BOT_TOKEN;
    const TG_CHAT_ID = process.env.TG_CHAT_ID;
    const GSHEET_WEBHOOK = process.env.GSHEET_WEBHOOK;

    if (!TG_BOT_TOKEN || !TG_CHAT_ID || !GSHEET_WEBHOOK) {
      console.error('❌ Missing env variables');
      return NextResponse.json(
        { success: false, error: 'Server misconfigured' },
        { status: 500 }
      );
    }

    // ---- TELEGRAM ----
    const telegramRes = await fetch(
      `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TG_CHAT_ID,
          text: `📩 New Contact Lead

👤 Name: ${name}
📧 Email: ${email}

💬 Message:
${message}
`,
        }),
      }
    );

    const telegramData = await telegramRes.json();
    console.log('Telegram response:', telegramData);

    if (!telegramData.ok) {
      throw new Error(telegramData.description);
    }

    // ---- GOOGLE SHEET ----
    await fetch(GSHEET_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        message,
        source: 'Portfolio Contact',
        timestamp: new Date().toISOString(),
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error('❌ Contact API error:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
