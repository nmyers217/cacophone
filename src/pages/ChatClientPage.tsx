import React from 'react';

import useRequireAuth from '../hooks/useRequireAuth';
import ChatClient from '../components/ChatClient';

const ChatClientPage: React.FunctionComponent = () => {
  const { user } = useRequireAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return <ChatClient />;
};

export default ChatClientPage;
