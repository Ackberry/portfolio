export type Project = readonly [name: string, description: string, link: string]

export const projects = [
  ['LeetCode API', 'Go API for profiles, submissions, and problems, built for getfolk.app', 'https://github.com/Ackberry/leetcode-graphql'],
  ['Commit Clock', 'GitHub commit goals with live webhook updates and an iOS widget', 'https://github.com/Ackberry/committed'],
  ['GitHub → Slack', 'GitHub issue notifications via signed webhooks and repository polling', 'https://github.com/Ackberry/git-webhook-slack'],
  ['Alleaf', 'wearable stress support; frontend, visualizations, and text-to-speech', 'https://github.com/Gustavo-Galvao-e-Silva/Alleaf'],
  ['Aegis', 'team-built space-weather forecasting and ESP32 telemetry', 'https://github.com/Ackberry/Aegis'],
  ['Talkio', 'team-built sales conversation intelligence', 'https://github.com/Talkio2026/swamp-hacks'],
  ['Haraesume', 'AI resume tailoring with Go, React, and LaTeX PDFs', 'https://github.com/ackberry/haraesume'],
  ['Spotify MCP', 'natural-language spotify control', 'https://github.com/ackberry/spotify_mcp'],
  ['AskABull', 'RAG chatbot answering questions from r/USF data', 'https://github.com/ackberry/askabull'],
  ['Cinetune', 'music and movie logging app', 'https://github.com/ackberry/cinetune'],
  ['Backtest Engine', 'historical trading strategy tester', 'https://github.com/ackberry/backtestengine'],
  ['Apocalorie', 'location-aware calorie estimator', ''],
  ['Crypto News Bot', 'telegram bot for crypto prices and news', 'https://github.com/ackberry/co1ncraze'],
  ['This Website', 'the portfolio you are looking at', 'https://github.com/ackberry/portfolio'],
] as const satisfies readonly Project[]

export const featuredProjects = projects.slice(0, 5)
