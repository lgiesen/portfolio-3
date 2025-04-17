<script lang="ts">
import { defineComponent } from 'vue'

import TheNavigation from '@/components/navigation/TheNavigation.vue'
import TheFooter from '@/components/TheFooter.vue'

export default defineComponent({
  name: 'App',
  components: {
    TheNavigation,
    TheFooter
  },
  setup() {
  }
})
</script>

<template lang="pug">
  v-app#app
    TheNavigation#scroll-target
    v-main
      router-view
    TheFooter
  </template>

<style lang="scss">
/* eslint-disable */
/* import of vuetify colors */
$primary: var(--v-primary-base);
$primaryLight: var(--v-primaryLight-base);
$primaryDark: var(--v-primaryDark-base);
$secondary: var(--v-secondary-base);
$secondaryLight: var(--v-secondaryLight-base);
$secondaryDark: var(--v-secondaryDark-base);
$btnColor: var(--v-btnColor-base);

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
  color: $primary;

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
/* 3.1 Gradient Button */
.gradient-btn {
  color: $btnColor !important;
  transition: 0.5s;
  background-size: 200% auto;
  background-image: linear-gradient(to right,
      $secondary 0%,
      $primary 51%,
      $secondary 100%);

  &:hover {
    // change the direction of the change here
    background-position: right center;
  }
}

.gradient-btn-secondary {
  color: $btnColor !important;
  transition: 0.5s;
  background-size: 200% auto;
  background-image: linear-gradient(to right,
      $secondaryLight 0%,
      $secondaryDark 51%,
      $secondaryLight 100%);

  &:hover {
    // change the direction of the change here
    background-position: right center;
  }
}

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
