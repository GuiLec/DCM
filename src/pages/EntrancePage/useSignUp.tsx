import {useState} from 'react';

export const useSignUp = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignUp = () => {};
  return {
    errorMessage,
    email,
    password,
    setEmail,
    setPassword,
    handleSignUp,
  };
};
