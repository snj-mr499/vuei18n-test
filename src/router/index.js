import Vue from "vue"
import VueRouter from "vue-router"
import Root from "./Root"
import i18n, { loadLocaleMessagesAsync } from "@/i18n"
import {
  setDocumentDirectionPerLocale,
  setDocumentLang,
  setDocumentTitle
} from "@/util/i18n/document"
import Card from "@/components/Card" 

Vue.use(VueRouter)

const { locale } = i18n

const routes = [
  {
    path: "/",
    redirect: locale
  },
  {
    path: "/:locale",
    component: Root,
    children: [
      {
        path: "",
        component: Card
      }
    ]
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.params.locale === from.params.locale) {
    next()
    return
  }

  const { locale } = to.params

  loadLocaleMessagesAsync(locale).then(() => {
    setDocumentLang(locale)

    setDocumentDirectionPerLocale(locale)

    setDocumentTitle(i18n.t("app.title"))
  })

  next()
})

export default router
