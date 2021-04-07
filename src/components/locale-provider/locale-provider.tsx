import type { Dispatch, FC, SetStateAction } from 'react';
import React, { useMemo, createContext, useState } from 'react';

export enum Locale {
  PL = 'PL',
  EN = 'EN',
}

const defaultLocale: Locale = Locale.EN;

interface ContextValue {
  readonly locale: Locale;
  readonly setLocale: Dispatch<SetStateAction<Locale>>;
}

export const LocaleContext = createContext({} as ContextValue);

export const LocaleProvider: FC = ({ children }) => {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  const contextValue = useMemo(() => ({ locale, setLocale }), [locale]);

  return <LocaleContext.Provider value={contextValue}>{children}</LocaleContext.Provider>;
};
