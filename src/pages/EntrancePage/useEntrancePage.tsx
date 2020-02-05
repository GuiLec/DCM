import {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation, useFocusEffect} from 'react-navigation-hooks';
import {useDispatch, useSelector} from 'react-redux';
import {userLoginRequest, userSignupRequest} from '../../modules/user/actions';
import {selectUser} from '../../modules/user/selectors';

export const useEntrancePage = () => {
  const [isLoginDisplayed, setisLoginDisplayed] = useState<boolean>(true);
  const toggleLogin = () => setisLoginDisplayed(state => !state);

  const user = useSelector(selectUser);

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
          userSignupRequest({
            email: user.user.email || '',
            id: user.user.uid,
            name: name,
            dictationsDifficulties: [1, 2, 3, 4],
            dictationsHistory: [],
          }),
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
        dispatch(userLoginRequest(user.user.uid));
        navigate('home');
      })
      .catch(error => setErrorMessage(error.message));
  };

  useFocusEffect(() => {
    if (!!user) navigate('home');
  });

  return {
    isLoginDisplayed,
    toggleLogin,
    handleSignUp,
    handleLogin,
    enterWithoutLogin,
  };
};
