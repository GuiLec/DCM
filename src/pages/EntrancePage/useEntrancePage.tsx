import {useState} from 'react';

export const useEntrancePage = () => {
  const [isLoginDisplayed, setisLoginDisplayed] = useState<boolean>(true);
  const toggleLogin = () => setisLoginDisplayed(state => !state);
  return {isLoginDisplayed, toggleLogin};
};
