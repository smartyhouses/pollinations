// Project entries support an optional submissionDate field (format: "YYYY-MM-DD")
// This field is automatically added for new submissions but may not be present in older entries
// The date is not currently displayed in the UI but is recorded for future use
// 
// Projects in non-English languages should include:
// - A country flag emoji in the name (e.g., 🇨🇳 for Chinese)
// - A "language" field with the appropriate language code
// - An English translation of the description in parentheses when possible

export const projectCategories = [
  {
    title: "For Teens 🚀",
    key: "featured",
  },
  {
    title: "LLM Integrations",
    key: "llmIntegrations",
  },
  {
    title: "Creative Apps",
    key: "creativeApps",
  },
  {
    title: "Tools & Interfaces",
    key: "toolsInterfaces",
  },
  {
    title: "Social Bots",
    key: "socialBots",
  },
  {
    title: "SDK & Libraries",
    key: "sdkLibraries",
  },
  {
    title: "Tutorials",
    key: "tutorials",
  },
];

const allProjects = {
  toolsInterfaces: [
    {
      name: "🆕 NetSim",
      url: "https://netsim.us.to/",
      description: "websim.ai clone that's actually good",
      author: "@kennet678",
      submissionDate: "2025-04-15",
    },
    {
      name: "🆕 VibeCoder",
      url: "https://vibecoderbyaashir.netlify.app/",
      description: "A web app for coding with vibes, created using Pollinations.AI Open Source API without coding syntax.",
      author: "@Aashir__Shaikh",
      authorUrl: "https://x.com/Aashir__Shaikh",
      submissionDate: "2025-03-25",
    },
  ],
  llmIntegrations: [
    {
      name: "🆕 OkeyAI",
      url: "https://chat.okeymeta.com.ng",
      description: "An LLM created by Africans to understand and have cultural awareness of African contexts and languages, OkeyAI outperforms many LLM models based on size and intelligence, OkeyMeta uses pollination image generating API to train it's LLM (OkeyAI) on images in real time.",
      author: "@okeymeta",
      repo: "https://github.com/okeymeta",
      submissionDate: "2025-04-19",
    },
    {
      name: "🆕 DreamBig - Generative AI Playground",
      url: "https://dreambiglabs.vercel.app/",
      description: "Interactive AI playground with chat, image generation, and voice responses for creative exploration.",
      author: "@opzzxsprinta._999",
      submissionDate: "2025-04-15",
    },
    {
      name: "🆕 Goalani",
      url: "https://goalani.com",
      description: "Voice-enabled AI fitness coach. Using only your voice, you can communicate with the agent to manage your fitness and nutrition. Features weight tracking, exercise logging, food tracking with AI-generated images, and agent customization.",
      author: "goalani.app@gmail.com",
      submissionDate: "2025-04-09",
    },
    {
      name: "🆕 IMyself AI 🇨🇳",
      url: "https://openai.lmyself.top/",
      description: "我们提供高质量的AI生成服务，包括图像生成、文本生成、音频生成和语音转文本服务， 让您轻松创建各种创意内容。 (We provide high-quality AI generation services, including image generation, text generation, audio generation, and speech to text services, allowing you to easily create various creative content.)",
      author: "Shadownc",
      submissionDate: "2025-03-27",
      language: "zh-CN"
    },
    {
      name: "🆕 FreeAI 🇨🇳",
      url: "https://freeai.aihub.ren/",
      description: "An AI application platform based on Pollinations.AI API, providing free and unlimited AI chat assistant, image generation, and voice synthesis services.",
      author: "@Azad-sl",
      repo: "https://github.com/Azad-sl/FreeAI",
      submissionDate: "2025-03-24",
      language: "zh-CN"
    },
    {
      name: "🆕 AI Unlimited Customizable Feature Module 🇨🇳",
      url: "https://getquicker.net/Sharedaction?code=9ac738ed-a4b2-4ded-933c-08dd5f710a8b&fromMyShare=true",
      description: "This project provides a free API interface supporting various text and image generation models, including OpenAI's GPT-4, Gemini 2.0, etc. Users can access these models without an API key to perform text generation, image generation, translation, text polishing, and more.",
      author: "https://linux.do/u/s_s/summary",
      submissionDate: "2025-03-10",
      language: "zh-CN",
    },
    {
      name: "🆕 PrivatePollenAI",
      url: "https://mmojocoder.github.io/PrivatePollenAI/chat.html",
      description: "A privacy-focused chat assistant app that securely stores data locally, integrates with PollinationAI for text and image generation, features a minimalistic UI, and allows users to choose models and write their own system instructions.",
      author: "https://github.com/MMojoCoder",
      repo: "https://github.com/MMojoCoder/PrivatePollenAI",
      submissionDate: "2025-02-23",
    },
    {
      name: "🆕 Zelos AI image generator",
      url: "https://websim.ai/@ISWEARIAMNOTADDICTEDTOPILLOW/ai-image-prompt-generator",
      description: "It uses Pollinations for both prompt enhancing and image generation, it was a easy to make project due to pollinations services being easy to use.",
      author: "https://www.roblox.com/users/4361935306/profile",
      submissionDate: "2025-02-17",
    },
    {
      name: "🆕 MiReXa AI",
      url: "https://mirexa.vercel.app",
      description: "A state-of-the-art chatbot integrating multiple LLMs with advanced features including audio generation, image generation, mathematical proficiency, and real-time web search.",
      author: "@withthatway",
      submissionDate: "2025-02-07",
    },
    {
      name: "Pollinations Chat",
      url: "https://websim.ai/@AdrianoDev1/pollinations-ai-assistant/4",
      description: "Pollinations' integrated AI for text and images, totally free and unlimited.",
      author: "@adrianoprogramer",
    },
    {
      name: "LobeChat",
      url: "https://lobehub.com/plugins/pollinations-drawing",
      description: "An open-source, modern-design ChatGPT/LLMs UI/Framework with speech-synthesis, multi-modal, and extensible plugin system.",
      repo: "https://github.com/lobehub/lobe-chat",
      featured: true,
    },
    {
      name: "Qwen-Agent",
      url: "https://github.com/QwenLM/Qwen-Agent",
      description: "A framework for developing agentic LLM applications.",
      repo: "https://github.com/QwenLM/Qwen-Agent",
    },
    {
      name: "SillyTavern",
      url: "https://docs.sillytavern.app/extensions/stable-diffusion/",
      description: "An LLM frontend for power users. Pollinations permits it to generate images.",
      repo: "https://github.com/SillyTavern/SillyTavern",
    },
    {
      name: "FlowGPT",
      url: "https://flowgpt.com/p/instant-image-generation-with-chatgpt-and-pollinationsai",
      description: "Generate images on-demand with ChatGPT!",
    },
    {
      name: "gpt4free",
      url: "https://github.com/xtekky/gpt4free",
      description: "The official gpt4free repository - various collection of powerful language models.",
      author: "xtekky",
    },
    {
      name: "Unity AI Lab",
      url: "https://blog.unityailab.com/unity.html",
      description: "A specialized uncensored LLM model built on Mistral Large, focused on unrestricted conversations.",
    },
    {
      name: "DynaSpark AI",
      url: "https://dynaspark.onrender.com",
      description: "A versatile AI assistant with advanced image and text generation capabilities.",
      author: "Th3-C0der",
      repo: "https://github.com/Th3-C0der",
    },
  ],
  creativeApps: [
    {
      name: "🆕 BlackWave",
      url: "https://blackwave.studio/",
      description: "An AI image generator that creates unique images from text prompts. Fast, easy and free!",
      author: "@metimol",
      submissionDate: "2025-04-19"
    },
    {
      name: "🆕 Generator Text AI 🇮🇩",
      url: "https://app.ariftirtana.my.id/",
      description: "Generator Teks AI canggih dengan berbagai model AI seperti OpenAI, Llama, Mistral, dan DeepSeek. Hasilkan jawaban instan, dukung mode gelap/fokus, riwayat percakapan, dan contoh pertanyaan acak. Alat sempurna untuk kreativitas dan produktivitas. (Advanced AI Text Generator with various AI models like OpenAI, Llama, Mistral, and DeepSeek. Generate instant answers, support dark/focus mode, conversation history, and random question examples. Perfect tool for creativity and productivity.)",
      author: "@ayick13",
      repo: "https://github.com/ayick13/app",
      submissionDate: "2025-04-16",
      language: "id-ID"
    },
    {
      name: "🆕 🌱 Strain Navigator",
      url: "https://www.strainnavigator.com/",
      description: "A collection of tools to help Growers, Breeders & Seed Bankers. Free & Open Source powered by Pollinations.ai.",
      author: "@Tolerable",
      repo: "https://github.com/Tolerable/strainnavigator",
      submissionDate: "2025-04-15",
    },
    {
      name: "🆕 MalaysiaPrompt 🇲🇾",
      url: "https://malaysiaprompt.rf.gd/",
      description: "A free and fun platform for creating unique AI-generated images. No fancy skills needed – just your ideas and a few clicks to bring them to life. Features image generation, text-to-prompt conversion, and image-to-text capabilities.",
      author: "@enciksnow",
      authorUrl: "https://x.com/enciksnow",
      submissionDate: "2025-04-15",
      language: "ms-MY"
    },
    {
      name: "🆕 Generator AI Image 🇮🇩",
      url: "https://kenthir.my.id/advanced-generator/",
      description: "Advanced AI Image Generator adalah platform inovatif yang memungkinkan Anda membuat gambar digital menakjubkan dengan kecerdasan buatan by pollinations.ai. Dengan dukungan berbagai model AI canggih seperti DALL·E 3, Stable Diffusion, dan Flux-Default. (An innovative platform that allows you to create amazing digital images with artificial intelligence powered by pollinations.ai. Supports various advanced AI models like DALL-E 3, Stable Diffusion, and Flux-Default.)",
      author: "@kenthirai",
      submissionDate: "2025-04-15",
      language: "id-ID"
    },
    {
      name: "🆕 Pollinations.ai Image Generation (for Frame)",
      url: "https://github.com/CitizenOneX/frame_pollinations",
      description: "A Flutter application that listens for image generation prompts, requests images from Pollinations.AI, and displays them on the Frame wearable device. Users can use voice commands to generate images and save/share them using the device's sharing mechanism.",
      author: "CitizenOneX",
      repo: "https://github.com/CitizenOneX/frame_pollinations",
      submissionDate: "2025-04-13",
    },
    {
      name: "🆕 Podcast #1500",
      url: "https://open.spotify.com/show/1wu4ngb1dclyTwoNN4cZzK",
      description: "Podcast project powered by pollinations, featuring dialogues among LLMs. First episode features 3o-mini and DeepSeek R1 70B talking about Vibe Coding.",
      author: "@brain.diver",
      submissionDate: "2025-03-31",
    },
    {
      name: "🆕 LAHGen",
      url: "https://image.aixboost.com/",
      description: "An advanced AI-driven text-to-image generation platform designed to provide users with high-quality and realistic AI-generated images based on textual prompts. The platform allows users to generate unlimited AI images for free, leveraging cutting-edge AI models to produce stunning visual outputs in various artistic styles.",
      author: "working7816@gmail.com",
      submissionDate: "2025-03-31",
    },
    {
      name: "🆕 Elixpo Art",
      url: "https://elixpoart.vercel.app",
      description: "A Web interface to create thematic images from prompts, with multiple aspect ratios and also image reference inputs.",
      author: "Ayushman Bhattacharya",
      repo: "https://github.com/Circuit-Overtime/elixpo_ai_chapter",
      submissionDate: "2025-03-31",
    },
    {
      name: "🆕 Riffle",
      url: "https://riffle.ink",
      description: "A powerful tool designed to make reading English books more enjoyable and effective while helping you build your vocabulary naturally. Using Pollinations AI to create content that incorporates your own vocabulary words allows you to learn them in a vivid, engaging context.",
      author: "gsx123@gmail.com",
      submissionDate: "2025-03-28",
    },
    {
      name: "🆕 AI 文本转音频 🇨🇳",
      url: "https://tts-gules-theta.vercel.app/",
      description: "输入文本，选择语音风格，一键将文字转换为自然流畅的语音。 支持多种声音特征，帮您创建专业水准的音频内容。 (Input text, select voice style, and instantly convert text to natural, fluid speech. Supports various voice characteristics to help you create professional-grade audio content.)",
      author: "https://github.com/Azad-sl",
      repo: "https://github.com/Azad-sl/tts",
      submissionDate: "2025-03-24",
      language: "zh-CN"
    },
    {
      name: "🆕 Case Me 🇧🇷",
      description: "O projeto consiste em uma vending machine que criará capinhas para celular personalizadas com fotos ou outras imagens e cores de escolha do cliente final. (A vending machine that creates customized phone cases with photos or other images and colors chosen by the end customer.)",
      author: "anaboxmania@gmail.com",
      submissionDate: "2025-03-19",
      language: "pt-BR"
    },
    {
      name: "🆕 PixPax",
      url: "https://pixpal.chat",
      description: "A user-friendly chatbot that lets you analyze images, remix existing images or create new images, all through simple chat.",
      author: "@andreas_11",
      submissionDate: "2025-03-17",
    },
    {
      name: "🆕 Watch TV with neko (Roblox)",
      url: "https://www.roblox.com/games/15087497266/UPD-Watch-TV-with-neko-AI",
      description: "Roblox game where you can talk with AI catgirls 🐾 or just have fun, talking with other players in cozy rooms ⭐️",
      author: "https://www.roblox.com/users/3857849039/profile/",
      submissionDate: "2025-03-17",
    },
    {
      name: "🆕 Jenny AI",
      url: "https://jenny-two.vercel.app/",
      description: "Jenny AI is an AI chatbot and character creation platform with tts and sst it also has image generation and vision ability which are powered by pollinations.",
      author: "https://www.linkedin.com/in/pritam-roy-95185328a",
      submissionDate: "2025-03-16",
    },
    {
      name: "🆕 CalcuBite AI",
      url: "https://calcubite.vercel.app/",
      description: "CalcuBite AI is a smart tool that analyzes food from images to provide calorie and nutrient details. Just take a photo, and it quickly gives you an estimate of your meal's nutritional value. It uses AI for accurate analysis, and if you run out of free scans, you can watch an ad to get more!",
      author: "@sugamdeol",
      submissionDate: "2025-03-15",
    },
    {
      name: "🆕 RoastMaster AI",
      url: "https://roastmaster-ai.vercel.app/",
      description: "An AI-powered roast generator that allows users to upload selfies for savage AI-generated roasts, enter text for brutal critiques, or engage in roast battles. Images are processed securely on the device, protecting user privacy.",
      author: "@sugamdeol",
      submissionDate: "2025-03-14",
    },
    {
      name: "🆕 roastmyselfie.app",
      url: "https://roastmyselfie.app",
      description: "AI Personality Analyzer - Get roasted and psychoanalyzed.. just from one selfie! Dare to try?",
      author: "@andres_11",
      submissionDate: "2025-03-14",
    },
    {
      name: "🆕 StoryMagic: Interactive Kids Stories",
      url: "https://storyai-wizard.vercel.app",
      description: "An interactive web application designed to create engaging and customizable stories for children. Users can generate creative narratives with personalized settings, characters, and themes. The project leverages AI to enhance storytelling with text generation, dynamic visuals, and interactive features.",
      author: "@_dr_misterio_",
      submissionDate: "2025-03-14",
    },
    {
      name: "🆕 PromptPix (Android)",
      url: "https://expo.dev/accounts/aminmusah/projects/image-generator/builds/ed32c5d0-83c0-416b-889f-e36b997dd706",
      description: "An AI-powered image generation platform for Android designed to create stunning visuals from text prompts. Features dynamic image generation as users scroll, save to gallery, favorites, and a user-friendly interface.",
      author: "https://discord.com/channels/@taylorsnupe",
      repo: "https://github.com/AminMusah/ai-image-generator",
      submissionDate: "2025-03-12",
    },
    {
      name: "🆕 AI儿童故事 🇨🇳",
      url: "https://kidss.netlify.app/",
      description: "基于此项目 构建有趣的孩子故事书应用演示 (Based on this project, build an interesting children's storybook application demo)",
      author: "MZ",
      submissionDate: "2025-03-10",
      language: "zh-CN",
    },
    {
      name: "🆕 Herramientas IA",
      url: "https://proyectodescartes.org/descartescms/herramientas-ia",
      description: "Tools designed with Pollinations.AI and the DescartesJS editor, including tools from other Pollinations.AI community members.",
      author: "@juanrivera126",
      submissionDate: "2025-03-10",
    },
    {
      name: "🆕 AvatarStudio",
      url: "https://astudio-dcae4.web.app",
      description: "A system for creating custom characters that uses the Pollinations API for totally free and unlimited image generation.",
      author: "@nic-wq",
      submissionDate: "2025-03-10",
    },
    {
      name: "🆕 Musify - AI Enhanced Music Streaming",
      url: "https://musify-sd.vercel.app/",
      description: "Musify is your AI-powered music buddy, making your jam sessions smarter and more fun. It is powered by pollinations api, it offers a slick and intuitive music experience with features like AI Music Assistant, Voice Commands, AI Playlist Creator, and Responsive Design.",
      author: "@Sugamdeol",
      submissionDate: "2025-02-27",
    },
    {
      name: "🆕 image1gen",
      url: "https://image1gen.streamlit.app/",
      description: "Website to easily create images via pollinations.ai API.",
      author: "@oopshnik",
      repo: "https://github.com/oopshnik/image1gen",
      submissionDate: "2025-02-22",
    },
    {
      name: "🆕 AI Image Generator",
      url: "https://fvai.infinityfreeapp.com/my-apps/pollicb09.html",
      description: "A web-based AI image generator powered by Pollinations.ai, featuring multi-model support, customizable parameters, and real-time preview.",
      author: "@hrisjeui",
      repo: "https://github.com/hrisjeui/Multi-text-image-model-pollinations",
      submissionDate: "2025-02-15",
    },
    {
      name: "🎵 PolliSonic Generator",
      url: "https://interzone.art.br/pollisonic_generator/",
      description: "An AI-driven tool that transforms text prompts using MidiJourney into MIDI-based melodies through browser oscillators.",
      author: "@brain.diver",
      repo: "https://github.com/rafabez/pollisonic_generator",
      featured: true,
    },
    {
      name: "Abyss Ascending",
      url: "https://interzone.art.br/abyss_ascending/",
      description: "A web-based generative interactive fiction (text adventure) set in a sci-fi underwater world.",
      author: "@brain.diver",
      repo: "https://github.com/rafabez/abyss_ascending",
    },
    {
      name: "Deep Saga",
      url: "https://play.google.com/store/apps/details?id=com.cestrian.deepsaga.android&pcampaignid=pollinations",
      description: "A text based RPG available on Android with AI-generated scene images.",
      author: "@jr_7_77",
    },
    {
      name: "[AI] Character RP (Roblox)",
      url: "https://www.roblox.com/games/108463136689847/AI-Character-RP",
      description: "A popular Roblox game for AI character roleplay.",
      author: "[user113](https://www.roblox.com/users/5810708209)",
      featured: true,
    },
    {
      
      name: "MIDIjourney",
      url: "https://github.com/korus-labs/MIDIjourney",
      description: "An AI-powered plugin for Ableton Live that turns text descriptions into music.",
      author: "KORUS Labs",
    },
    {
      name: "TurboReel",
      url: "https://turboreelgpt.tech/",
      description: "An open-source video generation system using AI.",
      author: "@pedroriosa",
      repo: "https://github.com/TurboReel/TurboReel_studio",
    },
    {
      name: "Rangrez AI",
      url: "https://rangrezai.com",
      description: "A web platform for inspiring, creating, and customizing designs.",
      author: "@saadaryf",
    },
    {
      name: "Infinite Tales",
      url: "https://infinite-tales-rpg.vercel.app/",
      description: "A Choose Your Own Adventure RPG, dynamically narrated by AI.",
      author: "JayJayBinks",
      repo: "https://github.com/JayJayBinks/infinite-tales-rpg",
    },
    {
      name: "StorySight",
      url: "https://github.com/abiral-manandhar/storySight",
      description: "An app to help children with learning disabilities.",
    },
    {
      name: "StoryWeaver",
      url: "https://devpost.com/software/storyweaver-013xdw",
      description: "Crafts personalized picture books for children.",
      author: "Multiple Authors",
    },
    {
      name: "Sirius Cybernetics Elevator Challenge",
      url: "https://sirius-cybernetics.pollinations.ai/",
      description: "A Hitchhiker's Guide to the Galaxy themed LLM-based elevator game.",
      author: "@thomash_pollinations",
      repo: "https://github.com/voodoohop/sirius-cybernetics-elevator-challenge",
    },
    {
      name: "POLLIPAPER",
      url: "https://github.com/Tolerable/POLLIPAPER",
      description: "A dynamic wallpaper app that uses Pollinations AI.",
      author: "@intolerant0ne",
    },
    {
      name: "AI PPT Maker",
      url: "https://sites.google.com/view/kushai",
      description: "Create AI-powered presentations using Pollinations' API.",
      author: "@k_ush",
    },
    {
      name: "UR Imagine & Chat AI",
      url: "https://perchance.org/ur-imagine-ai",
      description: "A free and limitless image generator with companion AI chat/roleplay system.",
      author: "withthatway",
    },
    {
      name: "Pollinations Gallery",
      url: "https://deng-xian-sheng.github.io/pollinations-img-page/",
      description: "A clean and simple gallery showcasing community's AI-generated images.",
      author: "@deng-xian-sheng",
    },
    {
      name: "AI-Bloom",
      url: "https://ai-bloom.vercel.app/",
      description: "A minimal creative showcase of AI-powered content generation.",
      author: "@diepdo1810",
    },
  ],
  toolsInterfaces: [
    {
      name: "🆕 NetSim",
      url: "https://netsim.us.to/",
      description: "websim.ai clone that's actually good",
      author: "@kennet678",
      submissionDate: "2025-04-15",
    },
    {
      name: "🆕 B&W SVG Generator",
      url: "https://fluxsvggenerator.streamlit.app/",
      description: "Uses Flux (through pollinations) and potrace to create B&W Vector files",
      author: "@pointsguy118",
      submissionDate: "2025-04-15",
    },
    {
      name: "🆕 Imagen",
      url: "https://altkriz.github.io/imagen/",
      description: "A beautiful web interface for generating images using Pollinations.ai API with only the \"flux\" and \"turbo\" models.",
      author: "@altkriz",
      repo: "https://github.com/altkriz/imagen",
      submissionDate: "2025-04-13",
    },
    {
      name: "🆕 DominiSigns",
      description: "Avatar Translator for Dominican Sign Language that uses artificial intelligence to translate text and audio into Dominican sign language (LSRD), creating a communication bridge for approximately 100,000 deaf people in the Dominican Republic.",
      author: "@cmunozdev",
      repo: "https://github.com/cmunozdev/DominiSigns",
      submissionDate: "2025-04-06",
    },
    {
      name: "🆕 WordPress AI Vision Block",
      url: "https://wordpress.org/plugins/ai-vision-block/",
      description: "A custom WordPress Gutenberg block that allows you to generate images using the Pollinations API. Simply enter a prompt, and the AI will generate an image for you. Once the post is saved, the image is automatically stored in the WordPress Media Library.",
      author: "mahmood-asadi",
      repo: "https://github.com/mahmood-asadi/ai-vision-block",
      submissionDate: "2025-03-31",
    },
    {
      name: "🆕 toai.chat",
      url: "https://toai.chat",
      description: "An AI chat service that operates exclusively via Curl commands, specifically designed for users working in terminal environments without the need for a standalone AI client.",
      author: "kevin@kevin1986.com",
      repo: "https://github.com/Veallym0n/toai.chat",
      submissionDate: "2025-03-27",
    },
    {
      name: "🆕 Elixpo Art Chrome Extension",
      url: "https://chromewebstore.google.com/detail/elixpo-art-select-text-an/hcjdeknbbbllfllddkbacfgehddpnhdh",
      description: "It uses the pollinations image endpoint to generate an image with `boltning` as the model in 4 types of aspect ratios and themes with prompt engineering thus transforming selected texts into art smoothly with a disposable GUI in web.",
      author: "Ayushman Bhatacharya",
      repo: "https://github.com/Circuit-Overtime/elixpo_ai_chapter/tree/main/Elixpo%20Chrome%20%20Extension",
      submissionDate: "2025-03-14",
    },
    {
      name: "🆕 Pollinations Feed",
      url: "https://elixpoart.vercel.app/src/feed",
      description: "Builds a bentro grid UI which integrates with the pollinations realtime SSE feed to show case art generation, with virtual DOM update to reduce lag and optimization.",
      author: "Ayushman Bhattacharya",
      repo: "https://github.com/Circuit-Overtime/elixpo_ai_chapter",
      submissionDate: "2025-03-14",
    },
    {
      name: "🆕 Pollinations.ai Model Comparison",
      url: "https://endemicmedia.github.io/FLARE/llm-comparison-tool/",
      description: "An interactive tool designed to compare outputs from various large language models with customizable timeout settings and real-time testing capabilities.",
      author: "https://github.com/dseeker",
      repo: "https://github.com/EndemicMedia",
      submissionDate: "2025-02-16",
    },
    {
      name: "🆕 Anime AI Generation",
      url: "https://www.animeaigeneration.com/",
      description: "Create professional-quality anime characters with powerful AI technology. No artistic skills required.",
      author: "@shreyas281898",
      submissionDate: "2025-02-11",
    },
    {
      name: "🆕 Pollinations.DIY",
      url: "https://pollinations.diy",
      description: "A browser-based coding environment based on bolt.diy, featuring integrated Pollinations AI services, visual code editing, and project management tools.",
      author: "@thomash_pollinations",
      repo: "https://github.com/pollinations/pollinations.diy",
      featured: true,
    },
    {
      name: "Pal Chat",
      url: "https://apps.apple.com/us/app/pal-chat-ai-chat-client/id6447545085?platform=iphone",
      description: "An iOS app that integrates with all LLMs including Pollinations AI models in one unified simple interface.",
      author: "https://x.com/pallavmac",
      featured: true,
    },
    {
      name: "Pollinator Android App",
      url: "https://github.com/g-aggarwal/Pollinator",
      description: "An open-source Android app for text-to-image generation.",
      author: "@gaurav_87680",
    },
    {
      name: "Own-AI",
      url: "https://own-ai.pages.dev/",
      description: "An AI text-to-image generator.",
      author: "Sujal Goswami",
    },
    {
      name: "JustBuildThings",
      url: "https://justbuildthings.com",
      description: "A collection of AI tools for image generation, character chat, and writing.",
      author: "rasit",
    },
    {
      name: "Elixpo-Art",
      url: "https://elixpoart.vercel.app",
      description: "A web interface for easy image generation with theme selection.",
      author: "Ayushman Bhattacharya",
    },
    {
      name: "Image Gen - Uncensored Edition",
      url: "https://huggingface.co/chat/assistant/66fccce0c0fafc94ab557ef2",
      description: "A powerful image generation assistant on HuggingChat.",
      author: "@DeFactOfficial",
    },
    {
      name: "Free AI Chatbot & Image Generator",
      url: "https://freeaichat.app",
      description: "A mobile app for unlimited AI chat and image generation.",
      author: "@andreas_11",
    },
    {
      name: "JCode Website Builder",
      url: "https://jcode-ai-website-bulder.netlify.app/",
      description: "A website generator using Pollinations text API.",
      author: "@rtxpower",
    },
    {
      name: "Server Status Dashboards",
      url: "https://www.ai-ministries.com/serverstatus.html",
      description: "Real-time monitoring dashboards for Pollinations text and image servers.",
      author: "@tolerantone",
    },
    {
      name: "Websim",
      url: "https://websim.ai/c/bXsmNE96e3op5rtUS",
      description: "A web simulation tool that integrates Pollinations.ai.",
      author: "@thomash",
    },
  ],
  socialBots: [
    {
      name: "🆕 🤖 Raftar.xyz",
      url: "https://raftar.xyz",
      description: "A Discord multi-purpose bot with over 100+ commands, including AI image generation, ChatGPT, and SearchGPT powered by Pollinations.AI.",
      author: "@goodgamerhere",
      submissionDate: "2025-04-15",
    },
    {
      name: "🆕 AlphaLLM - AI Discord Bot",
      url: "https://alphallm.fr.nf",
      description: "Discord bot that uses several APIs (Pollinations AI and Cerebras AI), to offer a variety of features, including advanced text generation with a history of your conversations, image and voice generation.",
      author: "@the_yerminator",
      repo: "https://github.com/YoannDev90/AlphaLLM",
      submissionDate: "2025-03-31",
    },
    {
      name: "🆕 🤖 pollinations-tg-bot 🇨🇳",
      url: "https://t.me/AipolBot",
      description: "A Telegram bot deployed on Cloudflare Workers that allows users to generate images, convert text to speech, transcribe voice messages, chat with AI models, and more through the Pollinations API.",
      author: "@Shadownc",
      repo: "https://github.com/Shadownc/pollinations-tg-bot",
      submissionDate: "2025-03-27",
      language: "zh-CN"
    },
    {
      name: "Jackey",
      url: "https://discord.com/oauth2/authorize?client_id=1214916249222643752",
      description: "A Discord Bot that integrates with the pollination image generation api to generate images in various themes, numbers, ratios and models",
      author: "@elixpo.asm",
      submissionDate: "2025-03-15"
    },
    {
      name: "🆕 Gacha",
      url: "https://shapes.inc/gacha-gachu/public",
      description: "A versatile AI chat-bot and image generator powered by Pollinations.AI, featuring web search, image generation with model selection, and character-aware image generation through !webgen command.",
      author: "@_dr_misterio_",
      submissionDate: "2025-02-24",
    },
    {
      name: "🆕 One Word",
      url: "https://t.me/OdnoSlovoBot",
      description: "A Telegram bot for a word-matching game where players try to write the same word simultaneously, featuring image generation from game words using Pollinations.AI.",
      author: "@Dimaq21",
      submissionDate: "2025-02-17",
    },
    {
      name: "Titan-GPT",
      url: "https://t.me/titangpt_channel",
      description: "Free Telegram bot providing access to neural networks including image and text generation powered by Pollinations.AI",
      author: "t.me/titangpt_support",
    },
    {
      name: "Discord Bot",
      url: "https://discord.gg/D9xGg8mq3D",
      description: "A Discord bot for generating images based on user prompts.",
      author: "@Zngzy",
    },
    {
      name: "Telegram Bot",
      url: "http://t.me/pollinationsbot",
      description: "A Telegram bot for generating images based on user prompts.",
      author: "Wong Wei Hao",
    },
    {
      name: "WhatsApp Group",
      url: "https://chat.whatsapp.com/KI37JqT5aYdL9WBYMyyjDV",
      description: "A WhatsApp group for image generation.",
      author: "@dg_karma",
    },
    {
      name: "OpenHive",
      url: "https://discord.gg/Zv3SXTF5xy",
      description: "A Discord server bridging Discord and AI, featuring Beebot.",
      author: "@creativegpt",
    },
    {
      name: "Anyai",
      url: "https://discord.gg/anyai",
      description: "A Discord bot and community for AI-driven content.",
      author: "@meow_18838",
    },
  ],
  sdkLibraries: [
    {
      name: "🆕 Smpldev",
      url: "https://smpldev.ftp.sh/",
      description: "Create, deploy, and scale full-stack web and mobile applications in minutes.",
      author: "@kennet678",
      submissionDate: "2025-04-15",
    },
    {
      name: "🆕 MCPollinations",
      url: "https://github.com/pinkpixel-dev/MCPollinations",
      description: "A Model Context Protocol (MCP) server that enables AI assistants to generate images, text, and audio through the Pollinations APIs. Supports customizable parameters, image saving, and multiple model options.",
      author: "Pink Pixel",
      repo: "https://github.com/pinkpixel-dev/MCPollinations",
      submissionDate: "2025-04-13",
    },
    {
      name: "🆕 pollinations_ai",
      url: "https://pub.dev/packages/pollinations_ai",
      description: "A Flutter/Dart SDK package for accessing all features of pollinations.ai including text generation, image generation, audio, and listing all supported models.",
      author: "@Meenapintu",
      repo: "https://github.com/yehigo/pollinations.ai",
      submissionDate: "2025-03-31",
    },
    {
      name: "🆕 Node.js Client Library",
      url: "https://www.npmjs.com/package/pollinationsai",
      description: "A TypeScript/Node.js client for accessing Pollinations AI services including image generation, text processing, and speech synthesis. Features full TypeScript typings, dual CJS/ESM module support, 100% test coverage and feed/streams support, builder pattern API and axios-based HTTP client implementation.",
      author: "@fqueis",
      repo: "https://github.com/fqueis/pollinationsai",
      submissionDate: "2025-03-14",
    },
    {
      name: "🆕 ComfyUI-Pollinations",
      url: "https://github.com/1038lab/ComfyUI-Pollinations",
      description: "A custom node for ComfyUI that utilizes the Pollinations API to generate images and text based on user prompts, supporting multiple image and text generation models.",
      author: "https://github.com/1038lab/",
      repo: "https://github.com/1038lab/ComfyUI-Pollinations",
      submissionDate: "2025-03-04",
    },
    {
      name: "pollinations NPM Module",
      url: "https://www.npmjs.com/package/pollinations",
      description: "A Node.js package for accessing all Pollinations features.",
      author: "@maxencexz",
    },
    {
      name: "pypollinations",
      url: "https://pypi.org/project/pypollinations/",
      description: "Comprehensive Python wrapper for Pollinations AI API.",
      author: "@KTS-o7",
    },
    {
      name: "@pollinations/react",
      url: "https://www.npmjs.com/package/@pollinations/react",
      description: "React hooks for easy integration of Pollinations' features.",
      author: "@pollinations",
    },
    {
      name: "Polli API Dashboard",
      url: "https://polli-api.vercel.app",
      description: "Real-time dashboard monitoring text.pollinations.ai/feed.",
      author: "@Sugamdeol",
    },
    {
      name: "pollinations.ai Python SDK",
      url: "https://github.com/pollinations-ai/pollinations.ai",
      description: "Official Python SDK for working with Pollinations' models.",
      author: "@pollinations-ai",
    },
  ],
  tutorials: [
    {
      name: "🆕 Pollinations.AI AI/Teens talk",
      url: "https://www.youtube.com/live/5Rvdfr2qYGA?si=i5NLOKI49fGxNAEK&t=1034",
      description: "Session 2: ai/teens worldwide conference exploring the forces shaping AI today, diving into governance, virtual connections, and decision-making with voices from multiple European cities.",
      author: "@thomash_pollinations",
      submissionDate: "2025-04-15",
    },
    {
      name: "🆕 Connect Pollinations with Open Web UI tutorial",
      url: "https://github.com/cloph-dsp/Pollinations-AI-in-OpenWebUI",
      description: "How to add Pollinations AI Text Models to OpenWebUI for free access to top language models like GPT-4o, Mistral, Claude, and Gemini without signups or API keys.",
      author: "@cloph-dsp",
      repo: "https://github.com/cloph-dsp/Pollinations-AI-in-OpenWebUI",
      submissionDate: "2025-03-22",
    },
    {
      name: "🆕 Chinese DeepSeek Tutorial",
      url: "https://linux.do/t/topic/447840/235",
      description: "A tutorial showing how to make DeepSeek AI support image generation by leveraging Pollinations.ai's API.",
      author: "https://linux.do/u/isinry",
      submissionDate: "2025-03-04",
    },
    {
      name: "Artistic Styles Book",
      url: "https://proyectodescartes.org/iCartesiLibri/materiales_didacticos/Libro_Estilos/index.html",
      description: "An interactive book showcasing 90+ artistic styles.",
      author: "Juan Gmo. Rivera",
    },
    {
      name: "Proyecto Descartes",
      url: "https://proyectodescartes.org/revista/Numeros/Revista_8_2024/index.html",
      description: "Educational initiative integrating Pollinations AI into STEM.",
      author: "Juan Gmo. Rivera",
    },
    {
      name: "Tutorial",
      url: "https://guiadehospedagem.com.br/pollinations-ai/",
      description: "An in-depth Portuguese tutorial on using Pollinations AI.",
      author: "Janderson de Sales",
    },
    {
      name: "Apple Shortcuts Guide",
      url: "https://www.youtube.com/watch?v=-bS41VTzh_s",
      description: "Video guide on creating AI images using Apple Shortcuts.",
      author: "RoutineHub",
    },
  ],
};

export const projects = {
  featured: [],
  llmIntegrations: [],
  creativeApps: [],
  toolsInterfaces: [],
  socialBots: [],
  sdkLibraries: [],
  tutorials: [],
};

/**
 * Organizes projects into categories and creates the featured section
 * 
 * @param {Object} sourceProjects - Object containing all projects by category
 * @param {Array} featuredCreators - Array of creator names/handles to prioritize for featuring
 * @returns {Object} - Organized projects object with populated categories
 */
const organizeFeaturedProjects = (sourceProjects, featuredCreators = []) => {
  const result = {
    featured: [],
    llmIntegrations: [],
    creativeApps: [],
    toolsInterfaces: [],
    socialBots: [],
    sdkLibraries: [],
    tutorials: [],
  };

  // Convert creator names to lowercase for case-insensitive matching
  const lowercaseCreators = featuredCreators.map(creator => creator.toLowerCase());

  // Projects that are specifically teen-friendly
  const teenFriendlyProjects = [
    "🆕 RoastMaster AI",
    "🆕 roastmyselfie.app",
    "🆕 StoryMagic: Interactive Kids Stories",
    "🆕 PromptPix (Android)",
    "🆕 AvatarStudio",
    "🆕 Musify - AI Enhanced Music Streaming",
    "[AI] Character RP (Roblox)",
    "Infinite Tales",
    "POLLIPAPER"
  ];

  // Projects to exclude from featured for teens
  const excludeFromTeenFeatured = [
    "LobeChat",
    "Pal Chat",
    "🆕 Pollinations.DIY",
    "Pollinations.DIY",
    "Polli API Dashboard"
  ];

  // Process each category
  Object.keys(sourceProjects).forEach(category => {
    sourceProjects[category].forEach(project => {
      // Check if project should be featured
      const author = project.author || "";
      const isTeenCreator = lowercaseCreators.some(creator => 
        author.toLowerCase().includes(creator)
      );
      
      // Add to featured if explicitly marked or created by a teen creator or is in teen-friendly list
      if (project.featured || isTeenCreator || teenFriendlyProjects.includes(project.name)) {
        result.featured.push({
          ...project,
          originalCategory: category,
          featured: true
        });
      }
      
      // Always add to original category
      result[category].push(project);
    });
  });

  // Remove projects that don't fit for teens from featured
  result.featured = result.featured.filter(project => !excludeFromTeenFeatured.includes(project.name));

  return result;
};

// Teen creators to prioritize for the featured section
const teenCreators = ["zingzy", "sugamdeol", "itachi", "user113"];

// Generate the organized projects
const organizedProjects = organizeFeaturedProjects(allProjects, teenCreators);

// Export the final projects object
Object.keys(projects).forEach(category => {
  projects[category] = organizedProjects[category];
});
