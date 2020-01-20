import {useState} from 'react';
import {User} from '../../modules/user/interface';
import auth from '@react-native-firebase/auth';
import {useNavigation} from 'react-navigation-hooks';
import {useDispatch} from 'react-redux';
import {saveUserRequest} from '../../modules/user/actions';

export const useEntrancePage = () => {
  const [isLoginDisplayed, setisLoginDisplayed] = useState<boolean>(true);
  const toggleLogin = () => setisLoginDisplayed(state => !state);

  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const enterWithoutLogin = () => {
    navigate('home');
  };

  const handleSignUp = (
    email: string,
    password: string,
    name: string,
    setErrorMessage: (message: string) => void,
  ) => () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        dispatch(
          saveUserRequest({email: user.user.email, id: user.user.uid, name}),
        );
        navigate('home');
      })
      .catch(error => setErrorMessage(error.message));
  };

  const handleLogin = (
    email: string,
    password: string,
    setErrorMessage: (message: string) => void,
  ) => () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch(
          saveUserRequest({
            email: user.user.email,
            id: user.user.uid,
            name: '',
          }),
        );
        navigate('home');
      })
      .catch(error => setErrorMessage(error.message));
  };

  return {
    isLoginDisplayed,
    toggleLogin,
    handleSignUp,
    handleLogin,
    enterWithoutLogin,
  };
};
