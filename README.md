SpringAI-RAG (Retrieval-Augmented Generation)

A modern full-stack application demonstrating Spring AI for RAG (Retrieval-Augmented Generation) workflows. This project allows users to chat with an AI model that uses custom local data to provide context-aware responses.
🚀 Technologies
Backend

    Java 17+ / Spring Boot 3.x

    Spring AI: For LLM integration and Vector Store management.

    Port: Runs on http://localhost:8080

Frontend

    React 18 / Vite

    Modern CSS: Custom properties with native Dark Mode support.

    Port: Runs on http://localhost:3000

📋 Project Structure & Data

The project uses a dedicated data/ folder to feed the AI's knowledge base.
Plaintext

SpringAI-RAG/
├── data/                       # Knowledge base for RAG
│   ├── pdfs/                   # PDF documents
│   ├── wiki/                   # Wiki files and text documentation
│   └── db-schema/              # Database schemas and SQL files
├── springai-rag-backend/       # Spring Boot Server (Port 8080)
└── springai-rag-frontend/      # React Client (Port 3000)

🛠️ Getting Started
1. Prerequisites

    JDK 17 or higher

    An AI Model API Key (e.g., OpenAI or local Ollama instance)
   
    Note: Configure your API keys and Vector Store connection in src/main/resources/application.properties.

3. Backend Setup

Navigate to the backend directory and run the application:
Bash

cd SpringAI-RAG/springai-rag-backend
mvn clean install
mvn spring-boot:run

The server will start at http://localhost:8080.

3. Frontend Setup

Navigate to the frontend directory, install dependencies, and start the client:
Bash

cd SpringAI-RAG/springai-rag-frontend
npm install
npm run dev -- --port 3000

The interface will be available at http://localhost:3000.
✨ Key Features

    RAG Ingestion: Automatically processes PDFs, Wiki files, and DB Schemas from the data/ folder into a Vector Store.

    Custom React Hooks: Optimized state management via useChat for messaging and useTheme for UI control.

    Intelligent Theming: Supports system-default and manual toggle for Dark/Light mode.

    Responsive Layout: Designed to work seamlessly across mobile and desktop screens.

🔧 Configuration

Update your application.properties in the backend to point to your data source
