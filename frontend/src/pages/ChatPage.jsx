

import React from 'react';
import TopBar from '../components/TopBar';
import LeftPanel from '../components/LeftPanel';
import ChatWindow from '../components/ChatWindow';
import NotificationPanel from '../components/NotificationPanel';

export default function ChatPage() {
  const notifOpen = true; // hardcoded just for UI demo

  return (
    <div className="page">
      <TopBar />
      <div className="main">
        <LeftPanel />
        <ChatWindow />
        {notifOpen && <NotificationPanel />}
      </div>
    </div>
  );
}
