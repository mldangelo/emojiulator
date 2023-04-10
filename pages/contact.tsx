export default function Contact() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className=" mx-auto max-w-7xl px-6 lg:px-8 text-white py-2">
        <h2 className="text-3xl font-bold tracking-tight sm:text-3xl py-6">
          Contact Emojiulator
        </h2>
        <p>
          Please feel free to send us an email at{" "}
          <a href="mailto:founders@emojiulator.club" className="hover:underline">founders@emojiulator.com</a>
          .
        </p>
      </div>
    </div>
  );
}

export const config = {
  runtime: "experimental-edge",
};
