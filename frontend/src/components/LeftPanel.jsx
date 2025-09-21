

import React from "react";
import "./LeftPanel.css"

export default function LeftPanel() {
  const conversations = []; // empty state for now

  return (
    <div className="left-panel">
      {/* Header */}
      <div className="header">
        <h3>Conversations</h3>
        <button className="new-chat">+ New Chat</button>
      </div>

      {/* Conversation List */}
      <div className="convo-list">
        {conversations.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">💬</div>
            <div className="empty-text">No conversations yet</div>
          </div>
        ) : (
          conversations.map((c, i) => (
            <div key={i} className="convo">
              <div className="avatar">{c.avatar}</div>
              <div className="meta">
                <div className="name">{c.name}</div>
                <div className="last">{c.lastMessage}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
