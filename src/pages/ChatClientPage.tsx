import React from 'react';

import useRequireAuth from '../hooks/useRequireAuth';

const ChatClientPage: React.FunctionComponent = () => {
  const { user, signout } = useRequireAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex space-x-4 items-center">
      <div className="text-lg">
        Signed in as <strong>{user.uid}</strong>
      </div>
      <button onClick={signout}>Sign Out</button>
    </div>
  );
};

export default ChatClientPage;
