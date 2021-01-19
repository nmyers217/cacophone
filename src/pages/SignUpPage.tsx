import React from 'react';

import HeroLayout from '../layouts/HeroLayout';
import UserForm, { FormMode } from '../components/UserForm';

const SignUpPage: React.FunctionComponent = () => {
  return (
    <HeroLayout>
      <UserForm mode={FormMode.SIGN_UP} />
    </HeroLayout>
  );
};

export default SignUpPage;
