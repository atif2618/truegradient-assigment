
import React, { useState } from "react";
import "./ChatWindow.css";

export default function ChatWindow() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]); // start empty

  const submit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newMessage = { text, from: "me", createdAt: new Date() };
    setMessages([...messages, newMessage]);
    setText("");
  };

  const handleExampleClick = (example) => {
    const newMessage = { text: example, from: "me", createdAt: new Date() };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-window">
      <div className="chat-content">
        {messages.length === 0 ? (
          <div className="welcome">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
              alt="chat logo"
              className="welcome-icon"
            />
            <h2>Welcome to AI Chat</h2>
            <p>
              Start a conversation with our AI assistant. Ask questions, get help
              with tasks, or explore ideas together.
            </p>
            <div className="examples">
              <button onClick={() => handleExampleClick("Explain quantum computing in simple terms")}>
                ✨ Explain quantum computing in simple terms
              </button>
              <button onClick={() => handleExampleClick("Write a Python function to sort a list")}>
                📝 Write a Python function to sort a list
              </button>
              <button onClick={() => handleExampleClick("What are the benefits of meditation?")}>
                🧘 What are the benefits of meditation?
              </button>
              <button onClick={() => handleExampleClick("Help me plan a weekend trip to Paris")}>
                ✈️ Help me plan a weekend trip to Paris
              </button>
            </div>
          </div>
        ) : (
          <div className="messages">
            {messages.map((m, i) => (
              <div key={i} className={`message ${m.from}`}>
                <div className="text">{m.text}</div>
                <div className="time">{m.createdAt.toLocaleTimeString()}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer always visible */}
      <div className="chat-footer">
        <form className="composer" onSubmit={submit}>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Ask me anything..."
          />
          <button type="submit">Send</button>
        </form>
        <p className="hint">Press Enter to send, Shift+Enter for new line</p>
      </div>
    </div>
  );
}
