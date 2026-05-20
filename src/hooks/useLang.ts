// src/hooks/useLang.ts
import { createContext, useContext, useState } from 'react';
import type { Lang } from '../data/translations';

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export const LangContext = createContext<LangContextType>({
  lang: 'en',
  setLang: () => {},
});

export function useLang() {
  return useContext(LangContext);
}

export function useLangState() {
  const [lang, setLang] = useState<Lang>('en');
  return { lang, setLang };
}
