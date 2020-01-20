import {useState} from 'react';

export const useSignUp = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');

  return {
    errorMessage,
    email,
    password,
    name,
    setEmail,
    setPassword,
    setErrorMessage,
    setName,
  };
};
