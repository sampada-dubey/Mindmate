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

---

⚙️ Tech Stack
1. Backend	- Java + Spring Boot
2. Sentiment Engine	- Python (Flask, NLTK/TextBlob)
3. Communication - REST API (Post → /api/send-message)
4. Testing	- Postman

---

🚀 How to Run
1. Clone the Repository
    ```bash
    git clone https://github.com/<your-username>/MindMate.git
    cd MindMate

---

2. Run Python ML Service
    ```bash
    cd ml_service
    pip install -r requirements.txt
    python app.py
    # Runs at http://localhost:5000/analyze

---

3. Run Java Backend (Spring Boot)
    ```bash
    cd backend
    ./mvnw spring-boot:run
    # or
    mvn spring-boot:run
    # Runs at http://localhost:8080/api/send-message

---

4. Test with Postman
Send a POST request to:
    ```bash
    POST http://localhost:8080/api/send-message
    Body (JSON): { "message": "I feel stressed and anxious today." }

---

🎯 Future Scope
1. Add emotion-specific replies
2.Deploy on cloud (Render, Railway, EC2)
3.Add authentication + user journaling
4.React/Android frontend for chat interface

---

👩‍💻 Author
Sampada Dubey
3rd Year Computer Science Student
Focused on Full-Stack + AI
🌐 LinkedIn
📫 Email: [sampadadubey41@gmail.com]

---
