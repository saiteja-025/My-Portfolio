export const projectsData = [
  {
    id: "ai-interview-trainer",
    title: "AI Interview Trainer",
    tagline: "AI-powered mock interview platform with real-time feedback",
    description: "A full-stack AI application that simulates real interview scenarios using dynamic question generation and intelligent feedback systems.",
    overview: "In today's competitive job market, candidates often lack access to realistic, unbiased interview practice. The AI Interview Trainer solves this by utilizing advanced LLMs to act as a dynamic, responsive interviewer capable of tailoring technical and behavioral questions on the fly.",
    caseStudy: "The core challenge was reducing the latency of AI responses without sacrificing the complexity of the dynamic interview evaluation. I implemented a robust backend architecture using Node.js to stream OpenAI's responses in real-time, drastically reducing the perceived wait time for users. On the frontend, a highly responsive React application was built to ensure the visual feedback loop mirrored a live video interview.",
    learnings: "Working on this platform solidified my understanding of prompt engineering, WebSocket integrations for real-time applications, and managing complex conversational state in React. I also gained deep insight into optimizing API rate limits.",
    tech: ["React", "Node.js", "OpenAI API", "JavaScript"],
    features: [
      "Dynamic AI-generated questions",
      "Real-time performance feedback",
      "Role-based interview simulation"
    ],
    github: "https://github.com/saiteja-025/AI-Interview-Trainer",
    live: "https://ai-interview-trainer-dabsacevjexpmyufyhjvwk.streamlit.app/",
    image: "/ai-interview.png"
  },
  {
    id: "ai-expense-telegram-bot",
    title: "AI Expense Telegram Bot",
    tagline: "AI-powered expense tracking assistant on Telegram",
    description: "An intelligent Telegram bot that helps users track, manage, and analyze expenses using AI-driven interactions and automation.",
    overview: "Manual expense tracking is tedious and prone to abandonment. This project replaces traditional budgeting apps with a conversational AI assistant that lives directly inside Telegram, automatically parsing, categorizing, and logging expenses using natural language processing.",
    caseStudy: "The main hurdle was building a context-aware natural language pipeline capable of understanding varied, colloquial financial inputs (like 'spent twenty bucks on coffee'). I integrated the Telegram Bot API with a Python backbone, mapping user queries to secure database endpoints. OpenAI's API was layered in to classify transactions accurately into accounting categories with near-zero hallucination.",
    learnings: "I mastered the Telegram Bot API and asynchronous Python architecture. The necessity for high-reliability data parsing taught me how to strictly constrain LLM outputs and sanitize real-time user inputs within production environments.",
    tech: ["Python", "Telegram Bot API", "OpenAI API"],
    features: [
      "Natural language expense logging",
      "Automated categorization",
      "Real-time responses"
    ],
    github: "https://github.com/saiteja-025/AI-expense-agent-telegram-bot",
    live: null,
    image: "/expense-bot.png"
  },
  {
    id: "ai-research-management",
    title: "AI Research Management System",
    tagline: "Smart research paper management with AI summarization",
    description: "A system that helps organize, summarize, and manage research papers efficiently using AI for knowledge extraction.",
    overview: "Researchers regularly comb through hundreds of dense academic PDFs. This project abstracts away the manual labor by providing an AI-driven dashboard that instantly extracts insights, synthesizes abstracts, and groups related methodologies across vast PDF libraries.",
    caseStudy: "Parsing complex PDF structures with embedded equations and transforming them into searchable vector embeddings was the primary architectural challenge. A machine learning pipeline was constructed in Python to OCR and ingest the papers, feeding them into a sophisticated RAG (Retrieval-Augmented Generation) system. This allowed the React frontend to query specific domains of knowledge instantaneously.",
    learnings: "I profoundly leveled up my capabilities in RAG architectures (Retrieval-Augmented Generation), vector databases, and full-stack React integration. Bridging complex Python ML pipelines with seamless client-side UI taught me advanced API design.",
    tech: ["Python", "React", "Machine Learning"],
    features: [
      "AI-based summarization",
      "Organized research tracking",
      "Faster knowledge access"
    ],
    github: "https://github.com/saiteja2503/Devops-project",
    live: null,
    image: "/research-ai.png"
  }
];
