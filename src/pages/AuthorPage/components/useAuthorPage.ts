import {Alert} from 'react-native';
import {useState} from 'react';

export const useAuthorPage = () => {
  const [text, setText] = useState<string>('');
  const updateText = (text: string) => setText(text);

  const [isWrittingChoices, setIsWrittingChoices] = useState<boolean>(false);

  const cancelNewDictation = () => setIsWrittingChoices(false);

  const showConfirmationMessage = () => {
    Alert.alert(
      'Êtes-vous sûr du texte de la nouvelle dictée?',
      'Il ne pourra pas être modifié par la suite',
      [
        {
          text: 'Sûr !',
          onPress: () => setIsWrittingChoices(true),
        },
        {
          text: 'Annuler',
          style: 'cancel',
        },
      ],
    );
  };
  return {
    showConfirmationMessage,
    text,
    updateText,
    isWrittingChoices,
    cancelNewDictation,
  };
};
