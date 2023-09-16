<template>
    <div class="locale-switcher">
      <select :value="$i18n.locale" @change.prevent="changeLocale">
        <option :value="locale.code" v-for="locale in locales" :key="locale.code">{{locale.name}}</option>
      </select>
    </div>
  </template>
  
  <script>
  import { getSupportedLocales } from "@/util/i18n/supported-locales"
  
  export default {
    data: () => ({ locales: getSupportedLocales() }),
    methods: {
      changeLocale(e) {
        const locale = e.target.value
  
        this.$router.push(`/${locale}`)
      }
    }
  }
  </script>
  <style scoped>
  /* Scoped style for the locale-switcher */
  div.locale-switcher {
    margin: 10px; /* Adjust margin as needed */
    color: #ff69b4; /* Your desired color */
  }
  
 
  </style>