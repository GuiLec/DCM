import {Alert} from 'react-native';

export const useAuthorPage = () => {
  const showConfirmationMessage = () =>
    Alert.alert(
      'Êtes-vous sûr du texte de la nouvelle dictée?',
      'Il ne pourra pas être modifié par la suite',
      [
        {
          text: 'Sûr !',
        },
        {
          text: 'Annuler',
          style: 'cancel',
        },
      ],
    );
  return {showConfirmationMessage};
};
