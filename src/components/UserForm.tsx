import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import useAuth from '../hooks/useAuth';

export enum FormMode {
  SIGN_IN,
  SIGN_UP,
  RECOVERY,
}

interface FormData {
  email: string;
  password: string;
}

const formSchema = yup.object().shape({
  email: yup.string().email().required().max(200),
  password: yup.string().required().max(200),
});

interface UserFormProps {
  mode: FormMode;
}

const UserForm: React.FunctionComponent<UserFormProps> = ({ mode }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const { signin, signinAnon, signup, sendPasswordResetEmail } = useAuth();
  const { register, handleSubmit, errors } = useForm<FormData>({
    resolver: yupResolver(formSchema),
    mode: 'onBlur',
  });

  const onSubmit = handleSubmit(async ({ email, password }: FormData) => {
    try {
      setLoading(true);

      switch (mode) {
        case FormMode.SIGN_IN: {
          await signin(email, password);
          history.push('/');
          break;
        }
        case FormMode.SIGN_UP: {
          await signup(email, password);
          history.push('/');
          break;
        }
        case FormMode.RECOVERY: {
          await sendPasswordResetEmail(email);
          setResetEmailSent(true);
          break;
        }
      }
    } catch (error) {
      console.error(error);
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  });

  const onAnonClick = async () => {
    try {
      setLoading(true);
      await signinAnon();
      history.push('/');
    } catch (error) {
      console.error(error);
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="my-8 container mx-auto max-w-md rounded-xl shadow-lg bg-white">
      <div className="flex flex-col p-10">
        <form onSubmit={onSubmit}>
          <input
            className={`flex items-center h-12 px-4 w-full mt-2 bg-gray-200 rounded-lg border-0 ${
              errors.password && 'ring-2 ring-red-400'
            }`}
            name="email"
            type="text"
            placeholder="Email"
            ref={register({ required: true, maxLength: 100 })}
          />
          {errors.email && (
            <div className="mt-2 max-w-xs text-red-400">
              <span>❌ {errors.email.message}</span>
            </div>
          )}

          {mode !== FormMode.RECOVERY ? (
            <>
              <input
                className={`flex items-center h-12 px-4 w-full mt-2 bg-gray-200 rounded-lg border-0 ${
                  errors.password && 'ring-2 ring-red-400'
                }`}
                name="password"
                type="password"
                placeholder="Password"
                ref={register({ required: true, maxLength: 200 })}
              />
              {errors.password && (
                <div className="mt-2 max-w-xs text-red-400">
                  <span>❌ {errors.password.message}</span>
                </div>
              )}
            </>
          ) : (
            <input
              name="password"
              hidden
              defaultValue="password"
              ref={register}
            />
          )}

          <button
            className={`${
              loading && 'spinner'
            } w-full mt-4 p-4 bg-green-500 text-white font-semibold rounded-xl shadow-md active:bg-green-600 focus:outline-none focus:ring focus:border-blue-300`}
            type="submit"
          >
            {mode === FormMode.SIGN_IN
              ? 'Sign In'
              : mode === FormMode.SIGN_UP
              ? 'Sign Up'
              : 'Send Email'}
          </button>
        </form>

        {/* Form Level Feedback */}
        {error && (
          <div className="mt-2 max-w-xs text-red-400">
            <span>❌ {error}</span>
          </div>
        )}
        {resetEmailSent && (
          <div className="mt-2 max-w-xs text-green-400">
            <span>✔️ A password reset email has been sent!</span>
          </div>
        )}

        {/* Navigation */}
        <div className="flex mt-6 justify-center text-xs">
          {mode === FormMode.SIGN_IN ? (
            <Link to="/signup" className="text-blue-400 hover:text-blue-500">
              Sign Up
            </Link>
          ) : (
            <Link to="/signin" className="text-blue-400 hover:text-blue-500">
              Sign In
            </Link>
          )}
          {mode !== FormMode.RECOVERY && (
            <>
              <span className="mx-2 text-gray-300">/</span>
              <Link
                to="/recovery"
                className="text-blue-400 hover:text-blue-500"
              >
                Forgot Password?
              </Link>
            </>
          )}
        </div>

        {/* Anonymous Sign In */}
        {mode !== FormMode.RECOVERY && (
          <>
            <hr className="my-8 -mx-8 border-t border-gray-200" />

            <button
              onClick={onAnonClick}
              className={`${
                loading && 'spinner'
              } p-4 text-white font-semibold rounded-xl shadow-md bg-indigo-500 active:bg-indigo-600 focus:outline-none focus:ring focus:border-blue-300`}
            >
              Sign In Anonymously
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default UserForm;
