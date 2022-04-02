import { createI18n } from 'vue-i18n'
import EN from './en'
import ZH from './zh'
const messages = {
  en: {
    ...EN
  },
  zh: {
    ...ZH
  }
}
const getCurrLanguage = () => {
  const UALang = navigator.language
  const langCode = UALang.indexOf('zh') !== -1 ? 'zh' : 'en'
  localStorage.setItem('lang', langCode)
  return langCode
}
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getCurrLanguage() || 'zh',
  messages: messages
})
export default i18n
