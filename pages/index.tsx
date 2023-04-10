// next js hello world page for static export

import Head from "next/head";
import { useState, useEffect } from "react";

export default function Index() {
  const [text, setText] = useState("");
  const [isPending, setIsPending] = useState(false);
  // rotate through . ... ... using a timer
  const [loadingText, setLoadingText] = useState("");

  const [progressPercent, setProgressPercent] = useState(0);
  const [result, setResult] = useState("");

  const waitPhrases = [
    "Loading",
    "Calculating",
    "Thinking",
    "Processing",
    "Analyzing",
    "Evaluating",
    "Interpreting",
    "Decoding",
    "Deciphering",
    "Decomposing",
    "Decompressing",
    "Synthesizing",
    "Structuring",
    "Organizing",
    "Arranging",
    "Assembling",
    "Composing",
    "Constructing",
    "Forming",
    "Compressing",
    "Encoding",
  ].sort(() => Math.random() - 0.5);
  let waitIndex = 0;

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingText((loadingText) => {
        if (loadingText.includes("...")) {
          return waitPhrases[waitIndex++ % waitPhrases.length];
        }
        return loadingText + ".";
      });
    }, 500);
    return () => clearInterval(timer);
  });

  useEffect(() => {
    if (isPending) {
      const timer = setInterval(() => {
        setProgressPercent((progressPercent) => {
          if (progressPercent >= 100) {
            return 0;
          }
          if (progressPercent >= 50) {
            // subtract a random amount from the progress bar
            return progressPercent - Math.floor(Math.random() * 30);
          }
          return progressPercent + 1;
        });
      }, 100);
      return () => clearInterval(timer);
    }
  }, [isPending]);

  const handleSubmit = () => {
    setIsPending(true);
    setProgressPercent(0);
    setLoadingText("Loading");
    // call openAI chat gpt endpoint
    fetch("/api/emojiulate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    })
      .then((res) => res.json())
      .then((data) => {
        const { translation } = data;
        setIsPending(false);
        setProgressPercent(100);
        setResult(translation);
      });
  };

  const reset = () => {
    setText("");
    setResult("");
    setProgressPercent(0);
    setLoadingText("");
  };

  return (
    <>
      <Head>
        <title>Emojiulator</title>
        <meta
          name="description"
          content="Find the perfect emoji for anything"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Emojiulator
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Translate any word, phrase, or text into emojis.
            </p>
          </div>
          {!isPending && result?.length === 0 && (
            <>
              <div className="mt-2 sm:mt-0 sm:col-span-2 sm:flex sm:justify-end sm:items-center sm:space-x-3 sm:space-y-0 space-y-3 py-4">
                <textarea
                  rows={4}
                  name="comment"
                  id="comment"
                  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                  defaultValue={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
              <div className="mt-2 sm:mt-0 sm:col-span-2 sm:flex sm:justify-end sm:items-center sm:space-x-3 sm:space-y-0 space-y-3 py-4">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => handleSubmit()}
                >
                  Translate
                </button>
              </div>
            </>
          )}
          {isPending && result?.length === 0 && (
            <>
              <div className="mt-2 sm:mt-0 sm:col-span-2 sm:flex sm:items-center sm:space-x-3 sm:space-y-0 space-y-3 py-4">
                <h3 className="text-2xl font-bold tracking-left text-white sm:text-4xl text-left">
                  {loadingText}
                </h3>
              </div>
              {progressPercent < 100 && (
                <div className="mt-2 sm:mt-0 sm:col-span-2 sm:flex sm:items-center sm:space-x-3 sm:space-y-0 space-y-3 py-4">
                  <progress
                    className="w-full"
                    value={progressPercent}
                    max="100"
                  />
                </div>
              )}
            </>
          )}
          {result?.length > 0 && (
            <>
              <div className="mt-2 sm:mt-0 sm:col-span-2 sm:flex sm:items-center sm:space-x-3 sm:space-y-0 space-y-3 py-4">
                <h3 className="text-2xl font-bold tracking-left text-white sm:text-4xl text-left">
                  {result}
                </h3>
              </div>
              <div className="mt-2 sm:mt-0 sm:col-span-2 sm:flex sm:justify-end sm:items-center sm:space-x-3 sm:space-y-0 space-y-3 py-4">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => {
                    navigator.clipboard.writeText(result);
                  }}
                >
                  Copy To Clipboard
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => reset()}
                >
                  Reset
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export const config = {
  runtime: "experimental-edge",
};
