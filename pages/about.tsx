export default function About() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className=" mx-auto max-w-7xl px-6 lg:px-8 text-white py-2">
        <h2 className="text-3xl font-bold tracking-tight sm:text-3xl py-6">
          About Emojiulator
        </h2>
        <p>
          Emojiulator started with a dream. What if any word, scentence, or
          phrase could be translated into emojis?
        </p>
        <p>We are here to answer that dream.</p>
        <p>Welcome. We are happy to see you here.</p>
      </div>
    </div>
  );
}

export const config = {
  runtime: "experimental-edge",
};
