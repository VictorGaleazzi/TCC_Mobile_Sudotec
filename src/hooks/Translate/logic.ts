import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';

export default function useLogic() {
  const [language, setLanguage] = useState(Localization.locale);

  useEffect(() => {
    AsyncStorage.getItem('language').then(value => {
      if (value !== null) {
        setLanguage(value);
      }
    });
  }, []);

  const saveLanguageInStorage = (value: string) => {
    AsyncStorage.setItem('language', value).then(() => {
      setLanguage(value);
    });
  };

  return {
    language,
    setLanguage: saveLanguageInStorage,
  };
}
