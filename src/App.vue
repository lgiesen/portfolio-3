<script lang="ts" setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'

import TheNavigation from '@/components/navigation/TheNavigation.vue'
import TheFooter from '@/components/TheFooter.vue'

const theme = useTheme()

// 💡 Dynamische CSS-Variablen definieren
const cssVars = computed(() => ({
  '--color-primary': theme.current.value.colors.primary,
  '--color-primary-light': theme.current.value.colors['primary-light'],
  '--color-primary-dark': theme.current.value.colors['primary-dark'],
  '--color-secondary': theme.current.value.colors.secondary,
  '--color-secondary-light': theme.current.value.colors['secondary-light'],
  '--color-secondary-dark': theme.current.value.colors['secondary-dark'],
  '--btn-color': theme.current.value.colors.surface, // Beispiel für Btn-Hintergrund
}))
</script>


<template>
  <v-app id="app">
    <TheNavigation id="scroll-target" />
    <v-main class="pt-0">
      <router-view />
    </v-main>
    <TheFooter />
  </v-app>
</template>


<style lang="scss">
/* $text: var(--v-text-base); */
/* 1. General Style */
* {
  box-sizing: border-box;

  &::before,
  &::after {
    box-sizing: border-box;
  }

  // word-break: break-all !important;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;

  &::before,
  &::after {
    box-sizing: border-box;
  }

  /* Check out cool fonts: https://visme.co/blog/modern-fonts/ */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Montserrat", "Prata", sans-serif !important;
    margin-top: 5rem;
    margin-bottom: 5rem;
    word-break: keep-all;
  }

  div.v-card__title {
    word-break: keep-all;
  }

  p,
  v-btn {
    font-family: "PT Sans", "Roboto", sans-serif !important;
  }
}

/* 1.2 scroll (to) section padding top so that the navigation does not lay over it */
#scroll {
  padding-top: 100px;
}

/* 1.3 Link animation */
a:not(a.v-tab, .v-btn) {
  text-decoration: none;
  cursor: pointer;
  color: #6f74dd;

  &:hover {
    text-decoration: underline !important;
  }
}

/* 1.4 center items */
.center-items {
  display: grid;
  place-items: center;
}

/* 1.5 box layout to prevent unintended up-sizing on bigger viewports */
section:not(.fullwidth) {
  // center items because size is reduced
  display: grid;
  place-items: center;

  &>div:not(.v-parallax, .vue-video-section-wrapper) {
    max-width: 1280px;
  }
}

/* 2. Sections */
/* 2.1 Space between sections */
/* section {
  margin-bottom: 20vh;
} */
/* 2.2 Hero area */
.h-100vh-less {
  min-height: calc(100vh - 60px);
}

.h-100vh {
  min-height: 100vh;
  width: 100vw;
}

.h-80vh {
  min-height: 80vh;
  width: 100vw;
}

/* 2.3 transparent background (used in nav and home) */
.transparent-background {
  background-color: rgba(#fff, 0) !important;
  border-color: rgba(#fff, 0) !important;
}

/* 3. Components */

.p-absolute {
  position: absolute;
}

.vue-video-section-wrapper {
  z-index: 0;
}

.alternatingBoxes {
  // border: 1px solid $primaryLight;
  margin: 5rem 0;
  padding: 0;
}

// Clear counteracts floats
.clear-both {
  clear: both;
}

.clear-left {
  clear: left;
}

.clear-right {
  clear: right;
}
</style>
