import emailProjectThumbnail from '../assets/images/email-project.jpg';
import questionMeThumbnail from '../assets/images/question-me-1-0-project.jpg';
import newsTelegramBotThumbnail from '../assets/images/news-telegram-bot.jpg';
import garbageProjectThumbnail from '../assets/images/garbage-project.jpg';
import ecomProjectThumbnail from '../assets/images/ecom-project.jpg';
import fitnessTrackerThumbnail from '../assets/images/fitness-tracker-project.jpg';

export const projects = [
  {
    id: 'proj-1',
    title: 'Email spam detctor',
    thumbnail: emailProjectThumbnail,
    description:
      // 'A web app that scores resumes against job descriptions using NLP similarity and keyword matching. Built with FastAPI and a React frontend.',
      'A spam classifier that uses a Contextual Bandit (a reinforcement-learning formulation) to label emails/SMS as spam or ham, wrapped in an interactive Streamlit dashboard with rich data and model statistics.',
    tech: ['Python','reinforcement learning','Contextual Bandit', 'Streamlit', 'Pandas', 'Seaborn', 'scikit-learn','numpy'],
    github: 'https://github.com/RAR2025/Email_spam_detector.git',
    live: 'https://rar-email-spam-detector.streamlit.app/',
    featured: true,
  },
  {
    id: 'proj-2',
    title: 'Question Me 1.0',
    thumbnail: questionMeThumbnail,
    description:
      // 'End-to-end ML pipeline that predicts student outcomes from demographic and behavioural features. Includes EDA, model comparison, and a small dashboard.',
      'A simple Retrieval-Augmented Generation (RAG) application built using LangChain, ChromaDB, and Ollama. This project allows you to ask questions about your own PDF documents completely offline using local AI models.',
    tech: ['Ollama', 'Python','Retrieval-Augmented Generation', 'Qwen 3.5 0.8B', 'nomic-embed-text','LangChain', 'ChromaDB','PyPDF'],
    github: 'https://github.com/RAR2025/Question-me-1.0.git',
    live: '',
    featured: true,
  },
  {
    id: 'proj-3',
    title: 'News Telegram Bot',
    thumbnail: newsTelegramBotThumbnail,
    description:
    // 'RESTful task management API with JWT authentication, role-based access, and a clean Express + MongoDB backend.',
    'A simple Telegram bot built with FastAPI and Python Telegram Bot that fetches the latest India-related news using the NewsAPI and sends curated headlines directly to Telegram.',
    tech: ['Python', 'FastAPI','uvicorn', 'Python Telegram Bot', 'NewsAPI'],
    github: 'https://github.com/RAR2025/News-telegram-bot.git',
    live: '',
    featured: true,
  },
  {
    id: 'proj-4',
    title: 'Garbage Project',
    thumbnail: garbageProjectThumbnail,
    description:
      // 'End-to-end ML pipeline that predicts student outcomes from demographic and behavioural features. Includes EDA, model comparison, and a small dashboard.',
      // 'A simple Retrieval-Augmented Generation (RAG) application built using LangChain, ChromaDB, and Ollama. This project allows you to ask questions about your own PDF documents completely offline using local AI models.',
      'A Django-based garbage collection route optimization system that uses the A Search Algorithm* to plan efficient garbage collection routes across multiple shop locations in a city.',
    tech: ['Django', 'Python','A* Algorithm', 'SQLite'],
    github: 'https://github.com/RAR2025/Garbage-project.git',
    live: '',
    featured: true,
  },
  {
    id: 'proj-5',
    title: 'ECOM',
    thumbnail: ecomProjectThumbnail,
    description:
      // 'End-to-end ML pipeline that predicts student outcomes from demographic and behavioural features. Includes EDA, model comparison, and a small dashboard.',
      // 'A simple Retrieval-Augmented Generation (RAG) application built using LangChain, ChromaDB, and Ollama. This project allows you to ask questions about your own PDF documents completely offline using local AI models.',
      'A basic Django e-commerce website. It includes features like product listing, shopping cart, and checkout functionality. The project is built with Python and Django, providing a simple yet effective online shopping experience.',
    tech: ['Python', 'Django', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/RAR2025/ECOM.git',
    live: '',
    featured: true,
  },
  {
    id: 'proj-6',
    title: 'Fitness Tracker',
    thumbnail: fitnessTrackerThumbnail,
    description:
      // 'This very site. A modern, accessible single-page portfolio built with React, Vite, and plain CSS.',
      'A simple and beginner-friendly Fitness Tracker web application built with Python and Django. This application allows users to log workouts, track exercise duration, record workout dates, and view all workout history in an organized interface.',
    tech: ['Python', 'Django','SQLite' ,'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/RAR2025/Fitness-tracker.git',
    live: '',
    featured: true,
  },
];