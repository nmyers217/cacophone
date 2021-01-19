import React from 'react';

import HeroLayout from '../layouts/HeroLayout';
import UserForm, { FormMode } from '../components/UserForm';

const SignInPage: React.FunctionComponent = () => {
  return (
    <HeroLayout>
      <UserForm mode={FormMode.SIGN_IN} />
    </HeroLayout>
  );
};

export default SignInPage;
