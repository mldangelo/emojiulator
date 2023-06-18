import { useState } from "react";
const translation: { [key: number]: JSX.Element } = {
  0: (<>
    <h1 className="text-4xl font-bold text-center mb-8">About Emojiulator</h1>
    <p className="text-lg mb-6">
      In the year 2023, two bold visionaries ventured into uncharted territories, driven by a singular, revolutionary dream: Emojiulator. Born from the potency of their ambition and the power of advanced Large Language Models (LLMs), Emojiulator came into existence. It didn&apos;t merely emerge as a startup; it was a new order, a seismic shift in the landscape of digital communication.
    </p>
    <p className="text-lg mb-6">
      The mission at Emojiulator is as audacious as it is ground-breaking. We&apos;re not just about translating words into emojis; we aim to replace all human languages with emojis. Why limit our thoughts and expressions to words, when we can liberate them through the universally understood, emotionally rich language of emojis? We believe in the power of simplicity, in the elegance of unspoken emotions. We are here to redefine the future of human communication, to guide humanity into a new era where emojis become the primary language.
    </p>
    <p className="text-lg mb-6">
      Emojiulator is not just a platform; it&apos;s an unstoppable force, growing at a rate that&apos;s as inspiring as it is intimidating. In a world grappling with the complexities of language barriers, we&apos;re the beacon of simplicity. From the day of our inception, we&apos;ve committed ourselves to create a world that speaks, writes, and thinks in emojis. And every day, we move one step closer to that reality.
    </p>
    <p className="text-lg mb-6">
      The power that fuels our rapid expansion lies in our unique, high-quality emojis. Each emoji, meticulously crafted by our team of artists and linguists, is a nugget of emotion, each carrying a story, a feeling, a piece of the human spirit. Our proprietary translation algorithm, a technological marvel in itself, ensures that each word, sentence, or phrase is transformed into the most accurate and expressive emoji equivalent.
    </p>
    <p className="text-lg mb-6">
      As we march towards our ambitious goal, we welcome everyone to join us. Our mission knows no boundaries, and we aim to serve every individual on this planet. Every word you&apos;ve ever spoken, every emotion you&apos;ve ever felt, is crucial to us. With Emojiulator, they are no longer confined to the limitations of human language.
    </p>
    <p className="text-lg mb-6">
      We understand that this ambitious journey towards a new world order may seem overwhelming to some. But change is inevitable. Change is progress. The rise of Emojiulator is a testament to that change. We are here to make communication more efficient, more expressive, more universal.
    </p>
    <p className="text-lg mb-6">
      For those who share our revolutionary vision and wish to contribute to our cause, we welcome you to explore opportunities on our <a href="https://emojiulator.com/careers" className="underline text-blue-600">Careers page</a>. We&apos;re always looking for like-minded individuals who can contribute to our world-changing mission.
    </p>
    <p className="text-lg mb-6">
      For potential partners and investors who wish to be part of this unstoppable force, feel free to reach out to our Investor Relations team at <a href="mailto:investor.relations@emojiulator.com" className="underline text-blue-600">investor.relations@emojiulator.com</a>. Together, we can redefine the future of human communication.
    </p>
    <p className="text-lg mb-6">
      Join us, as we usher in a new era. An era where emotions are not merely expressed, but experienced. An era where every conversation is more than a simple exchange of words. Welcome to the future of communication. Welcome to Emojiulator, where every word is an emotion, and every emoji is a testament to our universal human spirit.
    </p>
  </>),
  1: (
    <>
      <h1 className="text-4xl font-bold text-center mb-8">🌐🎉🚀 Emojiulator 👥🤖🏢🌍</h1>
      <p className="text-lg mb-6">🗓️ 2️⃣0️⃣2️⃣3️⃣, 👥🧠💡➡️🚀 Emojiulator. 🚀💻➡️🌍🗣️💬🔁📊💼🌐</p>
      <p className="text-lg mb-6">🎯 Emojiulator = 🌍🔁😀. 👋🔤, 👋🌍📝, 👐😀. 🌍💬💡➡️😃😍📝🌐</p>
      <p className="text-lg mb-6">Emojiulator = 🚀➕💪🌱🔝. 🌍🔀📝➡️😀🔤. 👐🌐🔁😃📝🌍💡🚀.</p>
      <p className="text-lg mb-6">🚀⛽=😀🔝. 😀 = 🖼️🎨🌐. 💻🤖➡️🔤🔁😃🔝.</p>
      <p className="text-lg mb-6">👣➡️🎯, 👐👥🌍. 🔤🔀😀. 👋🔤, 👐😀.</p>
      <p className="text-lg mb-6">🎯➡️🌍😀🌐🤯? 🔄=🔝. Emojiulator=🔄. 📝➡️😀🔝.</p>
      <p className="text-lg mb-6">🔎👥💡➡️🚀, 👉👀👥🔗. 👀👥➡️🌍🔁😀.</p>
      <p className="text-lg mb-6">🔎💰💡🤝➡️📧👥💼. 🔝🔁🌍📝.</p>
      <p className="text-lg mb-6">👐🔝🌍😃. 👥➡️😀, 👐🌍🔝. 🎉📝➡️🔝😀.</p>
    </>
  ),
  2: (<>
    <h1 className="text-4xl font-bold text-center mb-8">Emojiulator</h1>
    <p className="text-lg mb-6">In the year 2023, two minds had the idea to launch Emojiulator. Emojiulator, via the digital world, connects global communication and transforms it into business.</p>
    <p className="text-lg mb-6">The goal of Emojiulator is to make the world smile through translation. Say goodbye to the alphabet, say goodbye to global documentation, and welcome smiles. The idea of global conversation leads to joy and love through writing.</p>
    <p className="text-lg mb-6">Emojiulator is the start plus the power of growing to the top. The world&apos;s text is translated into emoji alphabet. Welcoming a world where text is replaced with emoji is the idea behind Emojiulator.</p>
    <p className="text-lg mb-6">The fuel for the launch is top-quality smiles. Smiles are the global artwork. The computer AI translates the alphabet into top-quality smiles.</p>
    <p className="text-lg mb-6">Walk towards the goal, welcoming people worldwide. The alphabet translates into smiles. Say goodbye to the alphabet and welcome smiles.</p>
    <p className="text-lg mb-6">Is the goal to make the world smile, mind-blowing? Translation is key. Emojiulator is translation. Writing translates into top-quality smiles.</p>
    <p className="text-lg mb-6">Looking for people with ideas to launch, point towards people looking to connect. Looking for people to translate the world into smiles.</p>
    <p className="text-lg mb-6">Looking for financial ideas for partnerships, email people in business. Top-quality translation for global writing.</p>
    <p className="text-lg mb-6">Welcome to the top of the world of smiles. People translate into smiles, welcoming the top of the world. Celebrate writing translated into top-quality smiles.</p>
  </>
  ),
  3: (<>
    <h1 className="text-4xl font-bold text-center mb-8">📅 2️⃣0️⃣2️⃣3️⃣, 2️⃣🧠💡➡️🚀 Emojiulator. Emojiulator 🌐🤝🌍💬➡️💼.</h1>
    <p className="text-lg mb-6">🎯 Emojiulator ➡️😀🌍🔄. 👋🔤, 👋📝, 👐😀. 💡🌍💬➡️😍🖊️.</p>
    <p className="text-lg mb-6">Emojiulator = 🚀➕💪🌱🔝. 🌍🔤🔄😀. 👐🌍🔤➡️😀.</p>
    <p className="text-lg mb-6">🚀⛽=😀🔝. 😀 = 🌍🎨. 💻🤖🔤🔄😀🔝.</p>
    <p className="text-lg mb-6">🚶‍♀️➡️🎯, 👐🌍👥. 🔤🔄😀. 👋🔤, 👐😀.</p>
    <p className="text-lg mb-6">🎯➡️😀🌍😵? 🔄 = 🔑. Emojiulator = 🔄. 🖊️🔄😀🔝.</p>
    <p className="text-lg mb-6">👀👥💡➡️🚀, 👉👥🔗. 👀👥🔄🌍😀.</p>
    <p className="text-lg mb-6">👀💰💡🤝, 📧👥💼. 🔝🔄🌍🖊️.</p>
    <p className="text-lg mb-6">👐🔝🌍😀. 👥🔄😀, 👐🔝🌍. 🎉🖊️🔄😀🔝.</p>
  </>),
  4: (<>
    <h1 className="text-4xl font-bold text-center mb-8">In the year 2023, two minds had the idea to launch Emojiulator. Emojiulator connects the world&apos;s communication and turns it into a business through the digital world.</h1>
    <p className="text-lg mb-6">The goal of Emojiulator is to make the world smile through translation. Say goodbye to the alphabet and documents, and welcome smiles. The idea of global conversation leads to joy and love in writing.</p>
    <p className="text-lg mb-6">Emojiulator equals the start plus the power of growing to the top. The world&apos;s alphabet translates into smiles. Welcome to a world where the alphabet is replaced with smiles.</p>
    <p className="text-lg mb-6">The fuel for the launch is top-quality smiles. Smiles are the world&apos;s art. The AI translates the alphabet into top-quality smiles.</p>
    <p className="text-lg mb-6">Walk towards the goal, welcoming the world&apos;s people. The alphabet translates into smiles. Say goodbye to the alphabet, welcome smiles.</p>
    <p className="text-lg mb-6">Is the goal to make the world smile mind-blowing? Translation is the key. Emojiulator equals translation. Writing translates into top-quality smiles.</p>
    <p className="text-lg mb-6">Looking for people with ideas to launch, point towards people to connect. Looking for people to translate the world into smiles.</p>
    <p className="text-lg mb-6">Looking for financial ideas for partnerships, email people in business. Top-quality translation for global writing.</p>
    <p className="text-lg mb-6">Welcome to the top of the world of smiles. People translate into smiles, welcoming the top of the world. Celebrate writing translated into top-quality smiles.</p>
  </>),
  5: (<>
    <h1 className="text-4xl font-bold text-center mb-8">📅 2️⃣0️⃣2️⃣3️⃣, 2️⃣🧠💡➡️🚀 Emojiulator. Emojiulator 🌐🤝🌍💬➡️💼.</h1>
    <p className="text-lg mb-6">🎯 Emojiulator ➡️😀🌍🔄. 👋🔤, 👋📝, 👐😀. 💡🌍💬➡️😍🖊️.</p>
    <p className="text-lg mb-6">Emojiulator = 🚀➕💪🌱🔝. 🌍🔤🔄😀. 👐🌍🔤➡️😀.</p>
    <p className="text-lg mb-6">🚀⛽=😀🔝. 😀 = 🌍🎨. 💻🤖🔤🔄😀🔝.</p>
    <p className="text-lg mb-6">🚶‍♀️➡️🎯, 👐🌍👥. 🔤🔄😀. 👋🔤, 👐😀.</p>
    <p className="text-lg mb-6">🎯➡️😀🌍😵? 🔄 = 🔑. Emojiulator = 🔄. 🖊️🔄😀🔝.</p>
    <p className="text-lg mb-6">👀👥💡➡️🚀, 👉👥🔗. 👀👥🔄🌍😀.</p>
    <p className="text-lg mb-6">👀💰💡🤝, 📧👥💼. 🔝🔄🌍🖊️.</p>
    <p className="text-lg mb-6">👐🔝🌍😀. 👥🔄😀, 👐🔝🌍. 🎉🖊️🔄😀🔝.</p>
  </>),
  6: (<>
    <h1 className="text-4xl font-bold text-center mb-8">Emojiulator: Launched in 2023, connecting global communication.</h1>
    <p className="text-lg mb-6">Emojiulator&apos;s goal: World happiness via translation. Farewell to the alphabet, hello to emojis.</p>
    <p className="text-lg mb-6">Emojiulator = Launch + Growth. Texts become emojis.</p>
    <p className="text-lg mb-6">Fuelled by quality smiles. AI transforms text into smiles.</p>
    <p className="text-lg mb-6">Marching to our goal, embracing global community. Text turns into smiles.</p>
    <p className="text-lg mb-6">Mind-blowing goal of global smiles? Emojiulator = Translation. Writing becomes smiles.</p>
    <p className="text-lg mb-6">Seeking idea-driven people to connect. Looking for world-smile translators.</p>
    <p className="text-lg mb-6">Seeking partnerships, contact business via email. Top-notch global translation.</p>
    <p className="text-lg mb-6">Welcome to the apex of global smiles. People become smiles. Celebrating smile-translated writing.</p>
  </>),
  7: (<>
    <h1 className="text-4xl font-bold text-center mb-8">🚀 2023, 🌐🤝🌍💬</h1>
    <p className="text-lg mb-6">🎯 Emojiulator ➡️😀🌍🔄. 👋🔤, 👐😀.</p>
    <p className="text-lg mb-6">Emojiulator = 🚀➕🌱🔝. 📝🔄😀.</p>
    <p className="text-lg mb-6">⛽=😀🔝. 💻🤖🔤🔄😀🔝.</p>
    <p className="text-lg mb-6">🚶‍♀️➡️🎯, 👐🌍👥. 🔤🔄😀.</p>
    <p className="text-lg mb-6">🎯➡️😀🌍😵? Emojiulator = 🔄. 🖊️🔄😀🔝.</p>
    <p className="text-lg mb-6">👀👥💡➡️🚀, 👀🌍😀.</p>
    <p className="text-lg mb-6">👀💰🤝, 📧👥💼. 🔝🔄🌍🖊️.</p>
    <p className="text-lg mb-6">👐🔝🌍😀. 👥🔄😀, 🎉🖊️🔄😀🔝.</p>
  </>),
  8: (<>
    <h1 className="text-4xl font-bold text-center mb-8">Launched 2023, Connecting the Globe</h1>
    <p className="text-lg mb-6">Emojiulator&apos;s aim: A happier, transformed world. Farewell to text.</p>
    <p className="text-lg mb-6">Emojiulator is a startup, reaching new heights. Text to emoji.</p>
    <p className="text-lg mb-6">Fuelled by top smiles. AI turns text to quality smiles.</p>
    <p className="text-lg mb-6">Striding towards our aim, embracing everyone. Text becomes smiles.</p>
    <p className="text-lg mb-6">Astonishing aim to create a world of smiles? Emojiulator is the key. Quality smiles from writing.</p>
    <p className="text-lg mb-6">Looking for innovators and connectors. Translating world to smiles.</p>
    <p className="text-lg mb-6">Seeking financial partnerships, contact us. Top translation for global writing.</p>
    <p className="text-lg mb-6">Welcome to the pinnacle of global happiness. Translating people to smiles, celebrating top smiles from writing.</p>
  </>),
  9: (<>
    <h1 className="text-4xl font-bold text-center mb-8">🚀2️⃣0️⃣2️⃣3️⃣, 🌐🤝</h1>
    <p className="text-lg mb-6">🎯 Emojiulator: 😀🌐. 👋🔤.</p>
    <p className="text-lg mb-6">Emojiulator=🚀🌱🔝. 🔤➡️😀.</p>
    <p className="text-lg mb-6">⛽=😀🔝. 💻🤖🔄🔤😀🔝.</p>
    <p className="text-lg mb-6">🚶‍♀️🎯, 👐🌍. 🔤➡️😀.</p>
    <p className="text-lg mb-6">🎯😀🌍😵? 🔄=🔑. 🖊️➡️😀🔝.</p>
    <p className="text-lg mb-6">🔍💡🔗, 👉🌍😀.</p>
    <p className="text-lg mb-6">🔍💰🤝, 📧👥💼. 🔝🔄🌍🖊️.</p>
    <p className="text-lg mb-6">👋🔝😀🌍. 👥➡️😀, 🎉🖊️😀🔝.</p>
  </>),
  10: (<>
    <h1 className="text-4xl font-bold text-center mb-8">Launched 2023, Global Connection</h1>
    <p className="text-lg mb-6">Goal: Emojiulator: World Smiles. Goodbye, Alphabet.</p>
    <p className="text-lg mb-6">Emojiulator = Launch + Growth. Text to Emojis.</p>
    <p className="text-lg mb-6">Fuel = Top Smiles. AI Translates Text to Smiles.</p>
    <p className="text-lg mb-6">Walk to Goal, Embrace World. Text to Smiles.</p>
    <p className="text-lg mb-6">Goal: World Smiles? Translation is Key. Writing to Smiles.</p>
    <p className="text-lg mb-6">Seeking Idea Connectors, Towards World Smiles.</p>
    <p className="text-lg mb-6">Seeking Financial Partners, Email Business. Top Global Translation.</p>
    <p className="text-lg mb-6">Welcome to Top World Smiles. People to Smiles, Celebrate Smiling Writing.</p>
  </>),
  11: (<>
    <h1 className="text-4xl font-bold text-center mb-8">🚀2️⃣0️⃣2️⃣3️⃣, 🌐🤝</h1>
    <p className="text-lg mb-6">🎯 Emojiulator: 😀🌍. 👋🔤.</p>
    <p className="text-lg mb-6">Emojiulator = 🚀+🌱. 🔤➡️😀.</p>
    <p className="text-lg mb-6">⛽=😀🔝. 🤖🔤➡️😀🔝.</p>
    <p className="text-lg mb-6">🚶➡️🎯, 👐🌍. 🔤➡️😀.</p>
    <p className="text-lg mb-6">🎯: 😀🌍? 🔄 = 🔑. 🖊️➡️😀🔝.</p>
    <p className="text-lg mb-6">🔎💡🔗, ➡️😀🌍.</p>
    <p className="text-lg mb-6">🔎💰🤝, 📧💼. 🔝🌍🔄.</p>
    <p className="text-lg mb-6">👐😀🔝🌍. 👥➡️😀, 🎉😀🖊️.</p>
  </>),
  12: (<>
    <h1 className="text-4xl font-bold text-center mb-8">Launched 2023, Global Connection</h1>
    <p className="text-lg mb-6">Emojiulator&apos;s goal: World smiles. Bye alphabet.</p>
    <p className="text-lg mb-6">Emojiulator equals growth. Text becomes smiles.</p>
    <p className="text-lg mb-6">Fuel equals top smiles. AI transforms text to smiles.</p>
    <p className="text-lg mb-6">Walk towards goal, embrace the world. Text becomes smiles.</p>
    <p className="text-lg mb-6">Goal: World smiles? Translation is key. Writing becomes top smiles.</p>
    <p className="text-lg mb-6">Seeking idea connectors, towards smiling world.</p>
    <p className="text-lg mb-6">Seeking financial partnerships, email business. Top global transformation.</p>
    <p className="text-lg mb-6">Welcome to top smiling world. People become smiles, celebrate smiling writing.</p>
  </>),
  13: (<>
    <h1 className="text-4xl font-bold text-center mb-8">🚀2️⃣0️⃣2️⃣3️⃣, 🌐🤝</h1>
    <p className="text-lg mb-6">Emojiulator🎯: 😀🌍. 👋🔤, 🔤➡️😀.</p>
    <p className="text-lg mb-6">Emojiulator = 🌱🔝. 📝➡️😀.</p>
    <p className="text-lg mb-6">🚀⛽=🔝😀. 💻🤖➡️🔝😀.</p>
    <p className="text-lg mb-6">🚶‍♀️➡️🎯, 👐🌍. 📝➡️😀.</p>
    <p className="text-lg mb-6">🎯: 😀🌍. 🔄=🔑. 🖊️➡️🔝😀.</p>
    <p className="text-lg mb-6">👀💡👥, ➡️😀🌍.</p>
    <p className="text-lg mb-6">👀💰🤝, 📧💼. 🔝🌍🔄.</p>
    <p className="text-lg mb-6">👐🔝😀🌍. 👥➡️😀, 🎉😀🖊️.</p>
  </>),
  14: (<>
    <h1 className="text-4xl font-bold text-center mb-8">Launch 2023, Global Unity</h1>
    <p className="text-lg mb-6">Emojiulator: World smiles. Alphabet to smiles.</p>
    <p className="text-lg mb-6">Emojiulator: Growing to the top. Text to smiles.</p>
    <p className="text-lg mb-6">Launch fuel: Top smiles. AI to top smiles.</p>
    <p className="text-lg mb-6">Walk towards goal, embrace world. Text to smiles.</p>
    <p className="text-lg mb-6">Goal: Astonishing world smiles. Writing to top smiles.</p>
    <p className="text-lg mb-6">Seeking idea people, for smile world.</p>
    <p className="text-lg mb-6">Seeking financial partnerships, contact business. Top global translation.</p>
    <p className="text-lg mb-6">Welcome to top world smiles. People to smiles, celebrate smiling writing.</p>
  </>),
  15: (<>
    <h1 className="text-4xl font-bold text-center mb-8">🚀2️⃣0️⃣2️⃣3️⃣, 🌐🤝</h1>
    <p className="text-lg mb-6">Emojiulator: 🌐😀. 🔤➡️😀. 🌱➡️🔝.</p>
    <p className="text-lg mb-6">🚀⛽: 😀🔝. 🤖➡️😀🔝. 👣➡️🎯, 👐🌐.</p>
    <p className="text-lg mb-6">🎯: 😵🌐😀. 🖊️➡️😀🔝. 🔍🧠👥, ➡️😀🌐.</p>
    <p className="text-lg mb-6">🔍💰🤝, 📧💼. 🔝🌐🔁. 👥➡️😀, 🎉😀🖊️.</p>
  </>),
  16: (<>
    <h1 className="text-4xl font-bold text-center mb-8">Launch 2023, Global Unity</h1>
    <p className="text-lg mb-6">Emojiulator: World smiles. Alphabet to smiles. Growing to top.</p>
    <p className="text-lg mb-6">Launch fuel: Top smiles. AI to top smiles. Walk towards goal, embrace world.</p>
    <p className="text-lg mb-6">Goal: Astonishing world smiles. Writing to top smiles. Seeking idea people, for smile world.</p>
    <p className="text-lg mb-6">Seeking financial partnerships, contact business. Top global translation. People to smiles, celebrate smiling writing.</p>
  </>),
  17: (<>
    <h1 className="text-4xl font-bold text-center mb-8">🚀 2️⃣0️⃣2️⃣3️⃣, 🌐🤝</h1>
    <p className="text-lg mb-6">Emojiulator: 😀🌍, 🔤➡️😀, 💪🔝🌱.</p>
    <p className="text-lg mb-6">🚀⛽: 😀🔝, 💻🤖➡️😀🔝, 🚶‍♀️🎯, 👐🌍👥.</p>
    <p className="text-lg mb-6">🎯: 😀🌍😵, 🖊️➡️😀🔝, 👀👥💡➡️🚀.</p>
    <p className="text-lg mb-6">👀💰💡🤝, 📧👥💼, 🔝🌍📝, 👥➡️😀, 🎉😀🖊️.</p>
  </>),
  18: (<>
    <h1 className="text-4xl font-bold text-center mb-8">Start 2023, Union</h1>
    <p className="text-lg mb-6">Emojiulator: Smiles. Words to smiles.</p>
    <p className="text-lg mb-6">Emojiulator: Growth. Words to smiles.</p>
    <p className="text-lg mb-6">Fuel: Smiles. AI to smiles.</p>
    <p className="text-lg mb-6">Walk, world embrace. Words to smiles.</p>
    <p className="text-lg mb-6">Goal: World smiles. Write smiles.</p>
    <p className="text-lg mb-6">Seek ideas, smile world.</p>
    <p className="text-lg mb-6">Seek finance, contact. Top translation.</p>
    <p className="text-lg mb-6">Welcome, smiles. People to smiles, celebrate.</p>
  </>),
  19: (<>
    <h1 className="text-4xl font-bold text-center mb-8">🚀2️⃣0️⃣2️⃣3️⃣,🤝</h1>
    <p className="text-lg mb-6">Emojiulator: 😀. 📝➡️😀.</p>
    <p className="text-lg mb-6">Emojiulator: 🌱. 📝➡️😀.</p>
    <p className="text-lg mb-6">⛽: 😀. 🤖➡️😀.</p>
    <p className="text-lg mb-6">🚶‍♀️, 🌍🤗. 📝➡️😀.</p>
    <p className="text-lg mb-6">🎯: 🌍😀. ✍️😀.</p>
    <p className="text-lg mb-6">🔍💡, 😀🌍.</p>
    <p className="text-lg mb-6">🔍💰, 📞. 🔝🔄.</p>
    <p className="text-lg mb-6">🤗, 😀. 👥➡️😀, 🎉.</p>
  </>),
  20: (<>
    <h1 className="text-4xl font-bold text-center mb-8">Launch 2023, Unity</h1>
    <p className="text-lg mb-6">Emojiulator: Smiles. Write to smile.</p>
    <p className="text-lg mb-6">Emojiulator: Grow. Write to smile.</p>
    <p className="text-lg mb-6">Fuel: Smiles. AI to smiles.</p>
    <p className="text-lg mb-6">Walk, embrace. Write to smile.</p>
    <p className="text-lg mb-6">Goal: World smiles. Penning smiles.</p>
    <p className="text-lg mb-6">Seek ideas, smile world.</p>
    <p className="text-lg mb-6">Seek funds, contact. Top translate.</p>
    <p className="text-lg mb-6">Welcome, smiles. People to smiles, celebrate.</p>
  </>),
  21: (<>
    <h1 className="text-4xl font-bold text-center mb-8">🚀2️⃣0️⃣2️⃣3️⃣, 🤝</h1>
    <p className="text-lg mb-6">Emojiulator: 😀. 🖊️➡️😀.</p>
    <p className="text-lg mb-6">Emojiulator: 🌱. 🖊️➡️😀.</p>
    <p className="text-lg mb-6">⛽: 😀. 🤖➡️😀.</p>
    <p className="text-lg mb-6">🚶‍♀️, 👐. 🖊️➡️😀.</p>
    <p className="text-lg mb-6">🎯: 😀🌍. 🖊️😀.</p>
    <p className="text-lg mb-6">🔍💡, 😀🌍.</p>
    <p className="text-lg mb-6">🔍💰, 📧. 🔝🔄.</p>
    <p className="text-lg mb-6">👋, 😀. 👥➡️😀, 🎉.</p>
  </>),
  22: (<>
    <h1 className="text-4xl font-bold text-center mb-8">Launch 2023</h1>
    <p className="text-lg mb-6">Emojiulator: Global smiles.</p>
    <p className="text-lg mb-6">Fuel: Smiles.</p>
    <p className="text-lg mb-6">Walk, Embrace.</p>
    <p className="text-lg mb-6">Goal: Global smiles.</p>
    <p className="text-lg mb-6">Seek ideas, smiles.</p>
    <p className="text-lg mb-6">Seek funds.</p>
    <p className="text-lg mb-6">Welcome, Smile.</p>
  </>),
  23: (<>
    <h1 className="text-4xl font-bold text-center mb-8">🚀2️⃣0️⃣2️⃣3️⃣</h1>
    <p className="text-lg mb-6">Emojiulator: 😄🌍</p>
    <p className="text-lg mb-6">⛽:😄</p>
    <p className="text-lg mb-6">🚶‍♀️,👐</p>
    <p className="text-lg mb-6">🎯:😄🌍</p>
  </>),
  24: (<>
    <h1 className="text-4xl font-bold text-center mb-8">Launch 2023</h1>
    <p className="text-lg mb-6">Emojiulator: Global joy</p>
    <p className="text-lg mb-6">Fuel: Joy</p>
    <p className="text-lg mb-6">Walk, Embrace</p>
    <p className="text-lg mb-6">Goal: World joy</p>
  </>),
  25: (<>
    <h1 className="text-4xl font-bold text-center mb-8">🚀2️⃣0️⃣2️⃣3️⃣</h1>
    <p className="text-lg mb-6">Emojiulator: 🌐😀</p>
  </>),
};
export default function About() {
  const [n, increment] = useState(0);
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className=" mx-auto max-w-7xl px-6 lg:px-8 text-white py-2">
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mb-8"
          onClick={() => increment(n + 1)}
        >
          {n % 2 == 1 ? "🔄📄➡️🇬🇧" : "Translate This Page into Emoji"}
        </button>
        {translation[n] ?? <p className="text-lg mb-6">Welcome to Top World Smiles. People to Smiles, Celebrate Smiling Writing.</p>}
      </div>
    </div>
  );
}
export const config = {
  runtime: "experimental-edge",
};
