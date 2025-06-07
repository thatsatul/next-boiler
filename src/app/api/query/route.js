const mockRes = {
  id: '12345',
  text: 'This is a mock response from the API.',
  timestamp: new Date().toISOString(),
  from: 'bot'
}

export async function POST(request) {
  try {
    const body = await request.json();
    console.log('Received POST data:', body);

    const res = await fetch('https://mp436d4f85b1b18abad9.free.beeceptor.com/api/query', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify(body),
    });
    // if (!res.ok) {
    //   return new Response(JSON.stringify({ error: 'Failed to fetch data' }), { status: 500 });
    // }
    console.log('Response status:', res.status);
    const data = await res.json();
    console.log('Response from API:', data);
    if (!data || !data.id) {
      return new Response(JSON.stringify({ error: 'Invalid response from API' }), { status: 500 });
    }
    // Process the data as needed
    return Response.json({
      success: true,
      message: 'Data processed successfully',
      data,
    });
  }
  catch (err) {
    console.error('Error processing POST request:', err);
    return new Response(JSON.stringify({
      success: true,
      data: mockRes,
      message: 'Mock response returned due to error',
    }), {
      status: 200,
    });
  }
}