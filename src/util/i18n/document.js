export function setDocumentDirectionPerLocale(locale) {
    document.dir = locale === "my" ? "ltl" : "ltr"
  }
  
  export function setDocumentLang(lang) {
    document.documentElement.lang = lang
  }
  
  export function setDocumentTitle(newTitle) {
    document.title = newTitle
  }
  