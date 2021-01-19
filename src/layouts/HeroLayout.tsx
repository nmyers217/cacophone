import React, { useState } from 'react';
import useGodMode from '../hooks/useGodMode';

import './HeroLayout.css';

const HeroLayout: React.FunctionComponent = ({ children }) => {
  const [godMode, setGodMode] = useState<boolean>(false);

  useGodMode(() => setGodMode(true));

  return (
    <div className="flex flex-col h-screen">
      <main className="hero mb-auto py-4 md:pt-4 md:pb-12">
        {/* Logo */}
        <div className="flex flex-none justify-center items-center">
          {godMode && (
            <img
              alt="Cacodemon Death"
              src="caco_death.gif"
              className="w-20 h-20 md:w-40 md:h-40"
            />
          )}
          {!godMode && (
            <img
              alt="Cacodemon"
              src="caco.gif"
              className="w-20 h-20 md:w-40 md:h-40"
            />
          )}
        </div>

        {/* Layout content */}
        <div className="flex justify-center items-center p-2">{children}</div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 shadow-lg">
        <div className="container mx-auto">
          <div className="flex flex-row justify-center items-center space-x-4">
            <p className="py-6 text-sm text-center text-indigo-500 font-semibold">
              {`© ${new Date().getFullYear()} by Nicholas Myers`}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeroLayout;
