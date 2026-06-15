export const projectsData = [
  {
    id: "document-intelligence-platform",
    title: "Document Intelligence Platform",
    tagline: "AI-Powered Full Stack Application",
    description: "An AI-powered document analysis platform that transforms PDFs into interactive knowledge using Retrieval-Augmented Generation (RAG). Users can upload documents, generate summaries, create quizzes, and interact with files through contextual AI chat.",
    overview: "The Document Intelligence Platform is an end-to-end AI SaaS architecture designed to parse complex PDF documents and enable semantic query search. By implementing a Retrieval-Augmented Generation (RAG) pipeline, it allows users to contextualize large documents, extract key insights, and interact with their uploaded files through a responsive chat interface.",
    caseStudy: "A key technical challenge was parsing high-density PDFs and converting them into embeddings without causing high latency or context truncation. I developed an asynchronous backend with FastAPI to handle file uploads and run chunking strategies, then used FAISS to store vector embeddings created using HuggingFace. A semantic similarity search retrieval layer feeds relevant context to the Groq API to generate accurate, context-aware answers, while a PostgreSQL database keeps track of user and document states.",
    learnings: "This project helped me master RAG architectures, FastAPI async performance, FAISS indexing, and vector similarity search. I also gained experience in structuring production-ready full-stack applications with separated frontend, backend, and database modules.",
    tech: ["React", "FastAPI", "PostgreSQL", "RAG", "FAISS", "Groq", "AI", "Machine Learning", "Tailwind CSS"],
    features: [
      "PDF Upload & Management",
      "RAG-based AI Chat",
      "Smart Document Summarization",
      "AI Quiz Generation",
      "Context-Aware Responses",
      "Dark/Light Mode",
      "Responsive Modern UI"
    ],
    github: "https://github.com/saiteja-025/docai-project",
    live: null,
    image: "/research-ai.png"
  },
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
  }
];
