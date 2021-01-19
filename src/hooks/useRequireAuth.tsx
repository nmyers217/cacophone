import { useHistory } from 'react-router-dom';

import { useEffect } from 'react';
import useAuth from './useAuth';

export default function useRequireAuth(redirectUrl = '/signin') {
  const auth = useAuth();
  const history = useHistory();

  // If auth.user is false that means we're not
  // logged in and should redirect.
  useEffect(() => {
    if (auth.user === false) {
      history.push(redirectUrl);
    }
  }, [auth, redirectUrl, history]);

  return auth;
}
