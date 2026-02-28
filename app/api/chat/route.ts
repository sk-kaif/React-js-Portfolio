// import { streamText } from 'ai';
// import { createHuggingFace } from '@ai-sdk/huggingface';
// import { PORTFOLIO_ASSISTANT_CONFIG } from '@/app/data/ai-config';

// interface MessagePart {
//     type: string;
//     text: string;
// }

// interface UIMessage {
//     role: 'user' | 'assistant' | 'system';
//     content?: string;
//     parts?: MessagePart[];
// }

// const huggingface = createHuggingFace({
//     apiKey: process.env.HF_API_KEY,
// });

// export const maxDuration = 30;

// export async function POST(req: Request) {
//     const { messages } = await req.json();

//     console.log('Original messages:', JSON.stringify(messages, null, 2));

//     // Manually convert messages to CoreMessage format if convertToModelMessages fails or produces incompatible output
//     // Assuming messages from useChat are UIMessages (with parts or content)
//     // We need to ensure we pass { role, content: string | array } to streamText

//     const coreMessages = messages.map((m: UIMessage) => {
//         let content = m.content;
//         if (m.parts) {
//             content = m.parts.map((p: MessagePart) => p.text).join('\n');
//         }
//         return {
//             role: m.role,
//             content: content
//         };
//     });

//     console.log('Converted messages:', JSON.stringify(coreMessages, null, 2));

//     console.log(
//   coreMessages.map(m => ({
//     role: m.role,
//     contentType: typeof m.content,
//     contentLength: m.content?.length
//   }))
// );


//     const result = streamText({
//         model: huggingface('Qwen/Qwen2.5-7B-Instruct'),
//         system: PORTFOLIO_ASSISTANT_CONFIG.systemPrompt,
//         messages: coreMessages,
//        temperature: 0.4,           // slightly higher = richer answers
//   maxOutputTokens: 600,
//         onFinish: (event) => {
//             console.log('AI Response:', event.text);
//             if (!event.text) {
//                 console.error('AI Response is empty!');
//             }
//         },
//     });

//     return result.toUIMessageStreamResponse();
// }


import { streamText } from 'ai';
import { createHuggingFace } from '@ai-sdk/huggingface';
import { PORTFOLIO_ASSISTANT_CONFIG } from '@/app/data/ai-config';
import { rateLimit } from '@/lib/rate-limit';

interface MessagePart {
  type: 'text';
  text: string;
}

interface UIMessage {
  role: 'user' | 'assistant' | 'system';
  content?: string;
  parts?: MessagePart[];
}

const huggingface = createHuggingFace({
  apiKey: process.env.HF_API_KEY!,
});

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  // ---- HARD SANITIZATION (prevents chat from breaking after 2 messages) ----
  const coreMessages = messages
    .map((m) => {
      const content =
        typeof m.content === 'string'
          ? m.content
          : Array.isArray(m.parts)
            ? m.parts.map(p => p.text).join('\n')
            : '';

      return {
        role: m.role,
        content: content.trim(),
      };
    })
    .filter(m => m.content.length > 0);

  // ---- DEBUG (keep this during development) ----
  console.log(
    coreMessages.map(m => ({
      role: m.role,
      contentLength: m.content.length,
    }))
  );

  const ip =
    req.headers.get('x-forwarded-for') ??
    req.headers.get('x-real-ip') ??
    'unknown';

  const { success } = await rateLimit.limit(`chat:${ip}`);

  if (!success) {
    return new Response(
      JSON.stringify({ error: 'Too many requests' }),
      { status: 429 }
    );
  }


  // ---- STREAM MODEL OUTPUT ----
  const result = streamText({
    model: huggingface('Qwen/Qwen2.5-7B-Instruct'),
    system: PORTFOLIO_ASSISTANT_CONFIG.systemPrompt,
    messages: coreMessages,

    // Response quality tuning
    temperature: 0.4,
    maxOutputTokens: 600,

    onFinish: ({ text }) => {
      console.log('AI response length:', text?.length);
    },
  });

  // ---- IMPORTANT: UI message stream (required for useChat) ----
  return result.toUIMessageStreamResponse();
}
