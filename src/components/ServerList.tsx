import React, { useEffect } from 'react';

import { firestore } from '../api';
import useFirestoreQuery from '../hooks/useFirestoreQuery';

export interface Server {
  id: string;
  name: string;
  imageUrl: string;
  channels: string[];
  createddAt: { seconds: number; nanoseconds: number };
}

interface ServerListProps {
  activeServer?: Server;
  changeServer: (s: Server) => void;
}

// TODO: need a way to sign out

const ServerList: React.FunctionComponent<ServerListProps> = ({
  activeServer,
  changeServer,
}) => {
  const { data, status, error } = useFirestoreQuery(
    firestore.collection('servers'),
  );

  useEffect(() => {
    console.log('Servers:', status);
    if (data) {
      console.log(data);
      if (data.length > 0) {
        changeServer(data[0]);
      }
    }
    if (error) {
      console.error(error);
    }
  }, [data, status, error, changeServer]);

  return (
    <div className="flex flex-col items-center flex-shrink-0 w-16 border-r border-gray-300 bg-gray-200 py-3">
      {status === 'loading' && <div>loading...</div>}
      {status === 'success' &&
        data.map((server: Server) => (
          <div key={server.id}>
            <img
              className={`${
                activeServer?.id === server.id && 'ring-2 ring-blue-400 p-1'
              } relative w-10 h-10 rounded-lg bg-gray-400 mt-4 cursor-pointer`}
              alt={server.name}
              src={server.imageUrl}
              onClick={() => changeServer(server)}
            />
          </div>
        ))}
    </div>
  );
};

export default ServerList;
