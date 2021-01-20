import React, { useCallback, useState } from 'react';

import ServerList, { Server } from './ServerList';
import ChannelList from './ChannelList';
import Chat from './Chat';

const ChatClient: React.FunctionComponent = () => {
  const [server, setServer] = useState<Server | undefined>(undefined);
  const [channel, setChannel] = useState<string>('General');
  const changeServer = useCallback(
    (server: Server) => {
      setChannel('General');
      setServer(server);
    },
    [setChannel, setServer],
  );
  const sendMessage = useCallback((message: string) => {
    console.log(message);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden text-gray-700">
      <ServerList activeServer={server} changeServer={changeServer} />

      <ChannelList
        activeServer={server}
        activeChannel={channel}
        changeChannel={setChannel}
      />

      <Chat
        activeServer={server}
        activeChannel={channel}
        sendMessage={sendMessage}
      />
    </div>
  );
};

export default ChatClient;
