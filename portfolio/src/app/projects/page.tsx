'use client'

import PageLayout from '../components/PageLayout'
import ProjectCard from '../components/ProjectCard'

export default function ProjectsPage() {
  const projects = [
    {
      title: "Talkio - SwampHacks 2026 Winner",
      description: "AI-powered sales conversation intelligence platform",
      githubLink: "https://github.com/Ackberry/swamp-hacks",
      skills: ['React', 'Radix', 'Node', 'MongoDB', 'Openrouter'],
      features: [
        'Won Best Use of DigitalOcean at UF for building an AI-powered sales conversation intelligence platform.',
        'Built an LLM-driven transcript analysis pipeline with MongoDB semantic search across client conversations.',
        'Created a multi-agent AI system with Gemini and ElevenLabs, hosted GPT-OSS-120B model on DigitalOcean.'
      ]
    },
    {
      title: "Spotify MCP",
      description: "MCP server enabling LLM agents to control Spotify through natural language",
      githubLink: "https://github.com/Ackberry/spotify_mcp",
      skills: ['Typescript', 'Spotify API', 'MCP'],
      features: [
        'Built an MCP server exposing 5+ Spotify capabilities as structured tools for LLM agents via Spotify Web API.',
        'Implemented OAuth 2.0 and token refresh flows for secure, user-authorized access to real-time Spotify data.'
      ]
    },
    {
      title: "Spotify + Letterboxd clone",
      description: "a fullstack app that combines letterboxd and spotify (the apps i cannot live without)",
      githubLink: "https://github.com/ackberry/cinetune",
      liveLink: "https://ackberry.club",
      skills: ['Javascript', 'Express.js', 'Node.js', 'Firebase', 'SQL'],
      features: [
        'Built a full-stack movie and music logging platform with Node.js, Express, and PostgreSQL, integrating Spotify Web API and TMDb API for metadata sync. Added indexing and query optimization for fast search/filter across 500+ titles.',
        'Built Express.js backend with REST APIs and PostgreSQL integration, ensuring scalable data persistence and eliminating 100% of duplicate entries with FK constraints.',
        'Developed a responsive JavaScript frontend, optimized API calls for sub-200ms load times, and achieved 95%+ browser/device compatibility across 5 tested environments.'
      ]
    },
    {
      title: "Portfolio Website",
      description: "clean and minimal portfolio website designed in React and Nextjs to showcase my portfolio",
      githubLink: "https://github.com/ackberry/portfolio",
      liveLink: "https://ackberry.club",
      skills: ['React', 'Tailwind', 'Typescript', 'Vercel'],
      features: [
        'built a minimal portfolio website to showcase whatever i do.',
        'react + tailwind frontend',
        'next.js backend'
      ]
    },
    {
      title: "full stack RAG chatbot",
      description: "a bot that uses r/usf's reddit data to answer your queries",
      githubLink: "https://github.com/ackberry/askabull",
      liveLink: "https://askabull.onrender.com/",
      skills: ['Python', 'Typescript', 'Node', 'React', 'Supabase', 'Gemini API'],
      features: [
        "Architected and deployed an AI-powered chatbot system that processes 1,000+ Reddit posts daily, achieving 95% query accuracy through ChromaDB vector embeddings and reducing response time by 70%.",
        'Built a full-stack web application using a React/TypeScript frontend and Node.js backend, serving 50+ concurrent users with 96% uptime and sub-200ms API response times.',
        'Integrated Google Cloud AI Platform with a Python-based data pipeline to automate content scraping and embedding generation, improving data processing efficiency by 85% and scaling to handle 50K+ posts.'
      ]
    },
    {
      title: "backtest stock price prediction engine",
      description: "a program that uses existing trading algorithms and stock data to predict prices",
      githubLink: "https://github.com/ackberry/backtestengine",
      skills: ['Python', 'Jupyter', 'AlphaVantage', 'YahooAPI'],
      features: [
        'Automated data preprocessing pipeline reduced analysis time by 65%, handling normalization, missing value treatment, and visualizations.',
        'Developed a modular backtesting engine in Python using Pandas and NumPy to simulate trading strategies on over 10,000 rows of historical stock data, enabling reproducible performance testing.',
        'Designed an extensible architecture leveraging NumPy and modular functions, allowing future integration of live market APIs for real-time strategy validation.'
      ]
    },
    {
      title: "smart calorie tracker",
      description: "a hackathon project targeting the post apocalyptic track where users can estimate calorie intake based on location and food availability.",
      githubLink: "https://github.com/ackberry/",
      skills: ['Python', 'React', 'Node', 'Tailwind', 'Express', 'Gemini API', 'Mapbox API'],
      features: [
        'Developed a custom data scraper that processed over 450,000 FDA food entries, filtering and condensing the dataset to 3,000 key survival foods, improving database performance by over 99%.',
        'Implemented React and Node.js, integrating Google Gemini API for dynamic AI responses and Mapbox for location-based user visualization on a post-apocalyptic Earth model',
        'Rapidly prototyped and iterated a production-ready calorie tracker in a 24 hour hackathon, emphasizing scalability, data efficiency, and UX.'
      ]
    },
    {
      title: "crypto news bot",
      description: "a telegram bot that delivers real time crypto prices and news",
      githubLink: "https://github.com/Ackberry/Co1nCraze",
      skills: ['Python', 'Linode', 'Firebase', 'CoinMarketCap API', 'Telegram API'],
      features: [
        'Developed an automatic bot using Python, Coinmarketcap and Telegram API to deliver information about the current Crypto market to its users.',
        'Features modular design, with separate handlers for commands like /start, /news, and /price, making it easy to maintain and improve',
        'having 20+ concurrent users monthly'
      ]
    }
  ]

  return (
    <PageLayout title="Projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 font-roboto-flex">
        <div className="text-left w-full backdrop-blur-md flex flex-col gap-7">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              skills={project.skills}
              features={project.features}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
