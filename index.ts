import 'dotenv/config'

const fetchResponse = async () => {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'mistralai/mistral-7b-instruct:free',
            messages: [
                {
                    role: 'user',
                    content: 'what does isolate mean in tailwind css',
                },
            ],
        }),
    });
    const reply = await res.json();
    console.log((reply as { choices: { message: string }[] }).choices[0].message)
}
fetchResponse()
