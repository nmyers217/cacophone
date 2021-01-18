import React from 'react';

import HeroLayout from '../layouts/HeroLayout';

const SignInPage: React.FunctionComponent = () => {
  return (
    <HeroLayout>
      <div className="container mx-auto bg-red-100">
        <header>
          <p>Hello Vite + React!</p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
        </header>
      </div>
    </HeroLayout>
  );
};

export default SignInPage;
