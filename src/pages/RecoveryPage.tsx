import React from 'react';

import HeroLayout from '../layouts/HeroLayout';
import UserForm, { FormMode } from '../components/UserForm';

const RecoveryPage: React.FunctionComponent = () => {
  return (
    <HeroLayout>
      <UserForm mode={FormMode.RECOVERY} />
    </HeroLayout>
  );
};

export default RecoveryPage;
