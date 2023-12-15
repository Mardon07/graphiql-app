import React, { createContext, useContext, useState } from 'react';
import { EN_TEXT, Lang, LocalizationContextProps, LocalizationProviderProp,  TTranslet } from './type-and-const';

const LocalizationContext = createContext<LocalizationContextProps | undefined>(undefined);

const LocalizationProvider = (props : LocalizationProviderProp ) => {
    const {children} = props;

  const [lang, setLang] = useState<Lang>('en');
  const [texts, setTexts] = useState<TTranslet>(EN_TEXT);

  const value = { lang, setLang, texts, setTexts };

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
};

const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};

export { LocalizationProvider, useLocalization };