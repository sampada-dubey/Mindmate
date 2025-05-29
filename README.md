# 🧠 MindMate – Mental Health Chatbot with Sentiment Tracking

MindMate is an AI-powered mental health chatbot that detects the user's emotional tone through sentiment analysis and provides supportive responses. Built using **Spring Boot** (Java) for the backend and **Python (Flask + ML/NLP)** for sentiment analysis, it’s designed as a public-facing tool for early mental wellness support.

---

## ✨ Features

- 🤖 AI Chatbot for mental health conversations
- 🧠 Sentiment analysis using NLP (Python + Flask)
- 🔗 Java Spring Boot backend handles API communication
- 📦 JSON-based message transfer
- 🚀 Ready for frontend integration (React / Android)

---

## 📁 Project Structure

```bash
MindMate/
├── backend/ (Spring Boot)
│   ├── src/main/java/com/mindmate/
│   │   ├── controller/ChatController.java
│   │   ├── model/ChatRequest.java
│   │   └── MindmateBackendApplication.java
│   └── application.properties
├── ml_service/ (Python Flask)
│   ├── app.py
│   └── requirements.txt
└── README.md
⚙️ Tech Stack
1. Backend	- Java + Spring Boot
2. Sentiment Engine	- Python (Flask, NLTK/TextBlob)
3. Communication - REST API (Post → /api/send-message)
4. Testing	- Postman

