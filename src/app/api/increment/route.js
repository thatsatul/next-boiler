export async function GET() {
  try {
    // Call external API (e.g., fetch a fake post)
    const res = await fetch('https://62933c017aa3e6af1a07f8fc.mockapi.io/api/v1/test1');

    if (!res.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch external data' }), {
        status: 500,
      });
    }

    const data = await res.json();

    // Optionally, do something with `data`
    return Response.json({
      success: true,
      data: data, // send back title from external API
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
    });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    console.log('Received POST data:', body);

    return Response.json({
      success: true,
      message: 'Counter decremented',
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: 'Invalid POST data' }), {
      status: 400,
    });
  }
}