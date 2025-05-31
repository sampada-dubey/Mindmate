import React, { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); // to store the conversation history

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    // Add user message to the chat
    const newMessages = [...messages, { text: message, sender: "user" }];
    setMessages(newMessages);

    try {
      const res = await fetch("http://localhost:8080/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      let botText = `Polarity: ${data.polarity}, Sentiment: ${data.sentiment}`;

      if (data.sentiment === "positive") {
        botText = "Yay! You're feeling positive. 😊";
      } else if (data.sentiment === "negative") {
        botText = "I'm sorry to hear that. I'm here to help. ❤️";
      }else if (data.sentiment === "neutral"){
      botText = "I see that you're feeling neutral. Let's talk more if you'd like!";
    }else{
      botText = "Thanks for sharing! How are you feeling now?"
    }

      const botMessage = {
        text: botText,
        sender: "bot",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { text: "Error sending message.", sender: "bot" },
      ]);
    }

    setMessage(""); // clear input
  };

  return (
    <div className="chat-container">
      <h1>Mindmate</h1>
      <div className="chat-box">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`message ${msg.sender === "user" ? "user" : "bot"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="input-box">
        <input
          type="text"
          placeholder="Type your feelings..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
