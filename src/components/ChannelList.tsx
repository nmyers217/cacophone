import React from 'react';

import { Server } from './ServerList';

interface ChannelListProps {
  activeServer: Server | undefined;
  activeChannel: string;
  changeChannel: (channel: string) => void;
}

const ChannelList: React.FunctionComponent<ChannelListProps> = ({
  activeServer,
  activeChannel,
  changeChannel,
}) => {
  return (
    <div className="flex flex-col flex-shrink-0 w-64 border-r border-gray-300 bg-gray-100">
      <div className="h-0 overflow-auto flex-grow">
        <div className="mt-4">
          <div className="flex items-center h-8 px-3 group">
            <button
              id="channels_toggle"
              className="flex items-center flex-grow focus:outline-none"
            >
              <span className="ml-2 leading-none font-medium text-sm">
                Channels
              </span>
            </button>
          </div>

          <div id="channels_list">
            {activeServer?.channels.map((channel) => (
              <div
                key={channel}
                className={`${
                  activeChannel === channel && 'bg-gray-300'
                } cursor-pointer flex items-center h-8 text-sm pl-8 pr-3`}
                onClick={() => changeChannel(channel)}
              >
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2 leading-none font-bold">{channel}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelList;
