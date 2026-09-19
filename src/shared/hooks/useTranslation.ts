import { translate, TranslationKey } from '@/shared/data/translations.data';
import { useUiStore } from '@/shared/store/ui.store';

export const useTranslation = () => {
  const lang = useUiStore((state) => state.lang);
  const setLang = useUiStore((state) => state.setLang);

  const t = (key: TranslationKey): string => translate(lang, key);

  return { lang, setLang, t };
};
