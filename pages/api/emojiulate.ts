import type { NextRequest } from 'next/server'
import fetchAdapter from '@vespaiach/axios-fetch-adapter'


import { Configuration, OpenAIApi, CreateChatCompletionRequest, CreateChatCompletionResponse } from "openai";


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  baseOptions: {
    adapter: fetchAdapter
    }
});
const openai = new OpenAIApi(configuration);

export default async function handler(req: NextRequest) {
   

    if (req.method !== "POST")
        return new Response(null, { status: 404, statusText: "Not Found" });

    try {
        const { text } = await req.json();
        
        const request: CreateChatCompletionRequest = {
            model: "gpt-3.5-turbo",
            messages: [
                {"role": "system", "content": "You are a helpful assistant that translates english into emoji concisely and accurately."},
                {"role": "user", "content": `Translate the following English text to a string of emojis: "${text}"`},
            ],
        };

        const completion = await openai.createChatCompletion(request);
        const translation = completion?.data?.choices?.[0]?.message?.content;

        return new Response(JSON.stringify({translation }), { status: 200 });
    } catch (e) {
        console.log(e);
        return new Response(null, { status: 400, statusText: "Bad Request" });
    }
}

export const config = {
  runtime: 'experimental-edge',
}
