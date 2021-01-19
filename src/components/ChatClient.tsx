import React from 'react';

const ChatClient: React.FunctionComponent = () => {
  return (
    <div className="flex h-screen overflow-hidden text-gray-700">
      <div className="flex flex-col items-center flex-shrink-0 w-16 border-r border-gray-300 bg-gray-200 py-3">
        <a
          className="w-10 h-10 rounded-lg bg-gray-400 hover:bg-gray-500"
          href="#"
        ></a>
        <a
          className="relative w-10 h-10 rounded-lg bg-gray-400 mt-4 hover:bg-gray-500"
          href="#"
        >
          <span className="absolute w-3 h-3 rounded-full bg-blue-400 top-0 right-0 -mt-1 -mr-1"></span>
        </a>
        <a
          className="w-10 h-10 rounded-lg bg-gray-400 mt-4 hover:bg-gray-500"
          href="#"
        ></a>
      </div>

      <div className="flex flex-col flex-shrink-0 w-64 border-r border-gray-300 bg-gray-100">
        <div className="h-0 overflow-auto flex-grow">
          <div className="mt-4">
            <div className="flex items-center h-8 px-3 group">
              <button
                id="channels_toggle"
                className="flex items-center flex-grow focus:outline-none"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="ml-2 leading-none font-medium text-sm">
                  Channels
                </span>
              </button>
              <button className="items-center justify-center h-6 w-6 ml-auto rounded hidden group-hover:flex hover:bg-gray-300">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>
            <div id="channels_list">
              <a
                className="flex items-center h-8 bg-gray-300 text-sm pl-8 pr-3"
                href="#"
              >
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="ml-2 leading-none font-bold">General</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-grow">
        <div className="flex items-center flex-shrink-0 h-16 bg-white border-b border-gray-300 px-4">
          <div>
            <h1 className="text-sm font-bold leading-none">#General</h1>
          </div>
        </div>
        <div className="flex flex-col flex-grow overflow-auto">
          <div className="flex px-4 py-3">
            <div className="ml-2">
              <div className="-mt-1">
                <span className="text-sm font-semibold">Sam</span>
                <span className="ml-1 text-xs text-gray-500">01:26</span>
              </div>
              <p className="text-sm">Anyone know if Frodo is awake yet?</p>
              <div className="flex space-x-2 mt-1">
                <button className="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
                  <span>🤷</span>
                  <span className="ml-1 font-medium">2</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-2">
            <hr className="w-full" />
            <span className="flex items-center justify-center -mt-3 bg-white h-6 px-3 rounded-full border text-xs font-semibold mx-auto">
              Today
            </span>
          </div>
          <div className="flex px-4 py-3">
            <div className="ml-2">
              <div className="-mt-1">
                <span className="text-sm font-semibold">Elrond</span>
                <span className="ml-1 text-xs text-gray-500">01:26</span>
              </div>
              <p className="text-sm">
                Strangers from distant lands, friends of old. You have been
                summoned here to answer the threat of Mordor. Middle-Earth
                stands upon the brink of destruction. None can escape it. You
                will unite or you will fall. Each race is bound to this
                fate–this one doom. (gestures to the pedestal) Bring forth the
                Ring, Frodo.
              </p>
              <div className="flex space-x-2 mt-1">
                <button className="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
                  <span>❤️</span>
                  <span className="ml-1 font-medium">5</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex px-4 py-3">
            <div className="ml-2">
              <div className="-mt-1">
                <span className="text-sm font-semibold">Boromir</span>
                <span className="ml-1 text-xs text-gray-500">01:26</span>
              </div>
              <p className="text-sm">So it is true…</p>
              <p className="text-sm">
                It is a gift. A gift to the foes of Mordor. Why not use this
                Ring? (paces) Long has my father, the Steward of Gondor, kept
                the forces of Mordor at bay. By the blood of our people are your
                lands kept safe! Give Gondor the weapon of the Enemy. Let us use
                it against him!
              </p>
              <div className="flex space-x-2 mt-1">
                <button className="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
                  <span>👎</span>
                  <span className="ml-1 font-medium">1</span>
                </button>
                <button className="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
                  <span>🤔</span>
                  <span className="ml-1 font-medium">3</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex px-4 py-3">
            <div className="ml-2">
              <div className="-mt-1">
                <span className="text-sm font-semibold">Aragorn</span>
                <span className="ml-1 text-xs text-gray-500">01:26</span>
              </div>
              <p className="text-sm">
                You cannot wield it! None of us can. The One Ring answers to
                Sauron alone. It has no other master.
              </p>
            </div>
          </div>
          <div className="flex px-4 py-3">
            <div className="ml-2">
              <div className="-mt-1">
                <span className="text-sm font-semibold">Boromir</span>
                <span className="ml-1 text-xs text-gray-500">01:26</span>
              </div>
              <p className="text-sm">
                And what would a ranger know of this matter?
              </p>
              <div className="flex space-x-2 mt-1">
                <button className="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
                  <span>😲</span>
                  <span className="ml-1 font-medium">2</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex px-4 py-3">
            <div className="ml-2">
              <div className="-mt-1">
                <span className="text-sm font-semibold">Legolas</span>
                <span className="ml-1 text-xs text-gray-500">01:26</span>
              </div>
              <p className="text-sm">
                This is no mere ranger. He is Aragorn, son of Arathorn. You owe
                him your allegiance.
              </p>
            </div>
          </div>
          <div className="flex px-4 py-3">
            <div className="ml-2">
              <div className="-mt-1">
                <span className="text-sm font-semibold">Boromim</span>
                <span className="ml-1 text-xs text-gray-500">01:26</span>
              </div>
              <p className="text-sm">Aragorn? This… is Isildur’s heir?</p>
            </div>
          </div>
          <div className="flex px-4 py-3">
            <div className="ml-2">
              <div className="-mt-1">
                <span className="text-sm font-semibold">Boromir</span>
                <span className="ml-1 text-xs text-gray-500">01:26</span>
              </div>
              <p className="text-sm">
                Gondor has no king. Gondor needs no king.
              </p>
            </div>
          </div>
          <div className="flex px-4 py-3">
            <div className="ml-2">
              <div className="-mt-1">
                <span className="text-sm font-semibold">Gandalf</span>
                <span className="ml-1 text-xs text-gray-500">01:26</span>
              </div>
              <p className="text-sm">Aragorn is right. We cannot use it.</p>
              <div className="flex space-x-2 mt-1">
                <button className="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
                  <span>👍</span>
                  <span className="ml-1 font-medium">6</span>
                </button>
                <button className="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
                  <span>🧙‍</span>
                  <span className="ml-1 font-medium">3</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex px-4 py-3">
            <div className="ml-2">
              <div className="-mt-1">
                <span className="text-sm font-semibold">Elrond</span>
                <span className="ml-1 text-xs text-gray-500">01:26</span>
              </div>
              <p className="text-sm">
                You have only one choice. The Ring must be destroyed.
              </p>
              <div className="flex space-x-2 mt-1">
                <button className="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
                  <span>💍</span>
                  <span className="ml-1 font-medium">1</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex px-4 py-3">
            <div className="ml-2">
              <div className="-mt-1">
                <span className="text-sm font-semibold">Gimli</span>
                <span className="ml-1 text-xs text-gray-500">01:26</span>
              </div>
              <p className="text-sm">What are we waiting for?</p>
            </div>
          </div>
          <div className="flex px-4 py-3">
            <div className="ml-2">
              <div className="-mt-1">
                <span className="text-sm font-semibold">Elrond</span>
                <span className="ml-1 text-xs text-gray-500">01:26</span>
              </div>
              <p className="text-sm">
                The Ring cannot be destroyed, Gimli, son of Gloin by any craft
                that we here possess. The Ring was made in the fires of Mount
                Doom. Only there can it be unmade. It must be taken deep into
                Mordor and cast back into the fiery chasm from whence it came.
              </p>
              <p className="text-sm">One of you must do this.</p>
              <div className="flex space-x-2 mt-1">
                <button className="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
                  <span>🗻</span>
                  <span className="ml-1 font-medium">2</span>
                </button>
                <button className="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
                  <span>🔥</span>
                  <span className="ml-1 font-medium">3</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex px-4 py-3">
            <div className="ml-2">
              <div className="-mt-1">
                <span className="text-sm font-semibold">Boromir</span>
                <span className="ml-1 text-xs text-gray-500">01:26</span>
              </div>
              <p className="text-sm">
                One does not simply walk into Mordor. Its black gates are
                guarded by more than just orcs. There is evil there that does
                not sleep. And the great Eye is ever watchful. It is a barren
                wasteland riddled with fire and ash and dust. The very air you
                breathe is a poisonous fume. Not with ten thousand men could you
                do this. It is folly!
              </p>
            </div>
          </div>
        </div>
        <div className="h-12 bg-white px-4 pb-4">
          <div className="flex items-center border-2 border-gray-300 rounded-sm p-1">
            <textarea
              className="flex-grow text-sm px-3 border-l border-gray-300 ml-1"
              placeholder="Message council-of-elrond"
              rows={1}
            ></textarea>
            <button className="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
              <svg
                className="h-4 w-4 transform rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatClient;
