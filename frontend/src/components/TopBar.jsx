

import React, { useState } from "react";
import "./TopBar.css";

export default function TopBar() {
  const user = { name: "Atif", credits: 1250 };
  const unread = 1;

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    alert("User logged out!");
    setOpen(false); // close dropdown after logout
    // real app → clear auth & redirect
  };

  return (
    <div className="topbar">
      <div className="brand">AI Chat</div>

      <div className="right">
        {/* Credits */}
        <div className="credits">
          <button className="credit-btn">
            <span className="icon">⏳</span> {user.credits.toLocaleString()}
          </button>
        </div>

        {/* Notifications */}
        <div className="notif">
          <span className="bell">🔔</span>
          {unread > 0 && <span className="notif-badge">{unread}</span>}
        </div>

        {/* Profile Dropdown */}
        <div className="profile" onClick={() => setOpen(!open)}>
          <div className="avatar">👤</div>
          <span className="name">{user.name}</span>
          <span className="arrow">▼</span>

          {open && (
            <div className="dropdown">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
