import { useMemo, createContext, useContext } from 'react';
import useLogic from './logic';

interface TranslationContextData {
  language: string;

  setLanguage: (value: string) => void;
}

const TranslationContext = createContext<TranslationContextData>({} as TranslationContextData);

interface Props {
  children: React.ReactNode;
}

export function TranslationProvider({ children }: Props) {
  const { language, setLanguage } = useLogic();

  const contextValue = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language, setLanguage],
  );

  return <TranslationContext.Provider value={contextValue}>{children}</TranslationContext.Provider>;
}

export function useTranslation() {
  const context = useContext(TranslationContext);

  if (!context) {
    throw new Error('useTranslation must be used within an TranslationProvider');
  }

  return context;
}
