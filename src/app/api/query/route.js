import { videoQueryMock } from '@/lib/mock';

export async function POST(request) {
  try {
    let body = await request.json();
    console.log('Received POST data:', body);
    body = JSON.parse(body); // Ensure body is a valid JSON object
    // No need for a separate body parser in Next.js API routes (app router).
    // The request.json() method already parses the JSON body.
    // For reference, you can log the parsed body as below:
    console.log('Request body:', body?.current_action, body?.text, body?.chatHistory);
    const chatHistory = body.chatHistory || [];
    console.log('Chat history:', chatHistory);
    const botMessages = chatHistory.filter(
      (msg) => msg.from === 'bot'
    );
    console.log('Filtered bot messages:', botMessages);
    let startIndex = botMessages ? botMessages.length : 0;
    let message = videoQueryMock[startIndex];
    const messages = [message];
    while (message.next_action === 'CONTINUE') {
      console.log('Processing message:', message);
      startIndex++;
      message = videoQueryMock[startIndex];
      messages.push(message);
    }

    return Response.json({
      success: true,
      message: 'Data processed successfully',
      data: messages,
    });
  }
  catch (err) {
    console.error('Error processing POST request:', err);
    return new Response(JSON.stringify({
      success: false,
      data: null,
      message: 'An error occurred while processing your request',
    }), {
      status: 500,
    });
  }
}
