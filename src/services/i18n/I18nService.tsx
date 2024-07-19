import i18n from 'i18next'
import { useEffect, useState } from 'react'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import en from './translations/en.json';
import ru from './translations/ru.json';

interface Props {
  children: JSX.Element
}

const localResources = {
  en: {
    common: en
  },
  ru: {
    common: ru
  }
}

const initLocales = () =>
  i18n
    .use(initReactI18next)
    .init({
      compatibilityJSON: 'v3',
      defaultNS: 'common',
      fallbackLng: ['en', 'ru'],
      interpolation: {
        escapeValue: false // react already safes from xss
      },
      keySeparator: '.',
      ns: ['common'],
      nsSeparator: '::',
      react: {
        useSuspense: false
      },
      resources: localResources
    })


export const I18nProvider = ({ children }: Props) => {
  const [i18nLoading, setI18nLoading] = useState(true)

  useEffect(() => {
    initLocales()
      .catch((err) => console.log(err))
      .finally(() => {
        setI18nLoading(false)
      })
  }, [])
  if (i18nLoading) { return null }
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
