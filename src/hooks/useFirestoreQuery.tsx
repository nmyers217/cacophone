import { useEffect, useReducer } from 'react';

import firebase from '../api';
import useMemoCompare from './useMemoCompare';

interface State {
  status: 'idle' | 'loading' | 'success' | 'error';
  data?: any;
  error?: firebase.firestore.FirestoreError;
}

interface Action {
  type: string;
  payload?: any;
}

const reducer: React.Reducer<State, Action> = (
  state: State,
  action: Action,
) => {
  switch (action.type) {
    case 'idle':
      return { status: 'idle', data: undefined, error: undefined } as State;
    case 'loading':
      return { status: 'loading', data: undefined, error: undefined } as State;
    case 'success':
      return {
        status: 'success',
        data: action.payload,
        error: undefined,
      } as State;
    case 'error':
      return {
        status: 'error',
        data: undefined,
        error: action.payload,
      } as State;
    default:
      throw new Error('invalid action');
  }
};

export default function useFirestoreQuery(query: any) {
  const initialState: State = {
    status: query ? 'loading' : 'idle',
    data: undefined,
    error: undefined,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const queryCached = useMemoCompare(query, (prevQuery, nextQuery) => {
    if (prevQuery && nextQuery && nextQuery.isEqual(prevQuery)) {
      return true;
    } else {
      return false;
    }
  });

  useEffect(() => {
    if (!queryCached) {
      dispatch({ type: 'idle' });
      return;
    }

    dispatch({ type: 'loading' });

    return queryCached.onSnapshot(
      (response: any) => {
        const data = response.docs
          ? getCollectionData(response)
          : getDocData(response);

        dispatch({ type: 'success', payload: data });
      },
      (error: any) => {
        dispatch({ type: 'error', payload: error });
      },
    );
  }, [queryCached]); // Only run effect if queryCached changes

  return state;
}

function getDocData(doc: any) {
  return doc.exists === true ? { id: doc.id, ...doc.data() } : null;
}

function getCollectionData(collection: any) {
  return collection.docs.map(getDocData);
}
