import React from 'react';

interface MessageProps {
  sender: string;
  createdAt: number;
  body: string;
  likes: number;
  dislikes: number;
}

const Message: React.FunctionComponent<MessageProps> = ({
  sender,
  createdAt,
  body,
  likes,
  dislikes,
}) => {
  return (
    <div className="flex px-4 py-3">
      <div className="ml-2">
        <div className="-mt-1">
          <span className="text-sm font-semibold">{sender}</span>
          <span className="ml-1 text-xs text-gray-500">
            {new Date(createdAt).toLocaleTimeString()}
          </span>
        </div>
        <p className="text-sm">{body}</p>
        <div className="flex space-x-2 mt-1">
          <button className="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
            <span>👍</span>
            <span className="ml-1 font-medium">{likes}</span>
          </button>
          <button className="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
            <span>👎</span>
            <span className="ml-1 font-medium">{dislikes}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
