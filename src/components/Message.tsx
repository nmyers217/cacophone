import React from 'react';

interface MessageProps {
  sender: string;
  createdAt: number;
  body: string;
}

const Message: React.FunctionComponent<MessageProps> = ({
  sender,
  createdAt,
  body,
}) => {
  return (
    <div className="flex px-4 py-3 hover:bg-gray-200">
      <div className="ml-2">
        <div className="-mt-1">
          <span className="text-sm font-semibold">{sender}</span>
          <span className="ml-1 text-xs text-gray-500">
            {new Date(createdAt).toLocaleTimeString()}
          </span>
        </div>
        <p className="text-sm">{body}</p>
      </div>
    </div>
  );
};

export default Message;
