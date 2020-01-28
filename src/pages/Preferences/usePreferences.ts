import {useState} from 'react';

export const usePreferences = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const selectLanguage = (language: string | null) => () =>
    setSelectedLanguage(language);
  return {selectedLanguage, selectLanguage};
};
