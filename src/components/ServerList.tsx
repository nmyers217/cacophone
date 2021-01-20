import React, { useEffect } from 'react';

import { firestore } from '../api';
import useAuth from '../hooks/useAuth';
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

const ServerList: React.FunctionComponent<ServerListProps> = ({
  activeServer,
  changeServer,
}) => {
  const { signout } = useAuth();
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
    <div className="flex flex-col justify-between items-center flex-shrink-0 w-16 border-r border-gray-300 bg-gray-200 py-3">
      <div>
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
      <div className="p-2">
        <button
          className="text-white font-semibold rounded-xl shadow-md bg-blue-500 active:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={signout}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default ServerList;
