import {useState} from 'react';

export const useLogin = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return {
    errorMessage,
    email,
    password,
    setEmail,
    setPassword,
    setErrorMessage,
  };
};
