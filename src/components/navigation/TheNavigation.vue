<template>
  <div style="position: fixed; z-index: 99; width: 100vw;">
    <!-- Desktop navigation -->
    <v-app-bar class="appBar hidden-sm-and-down" outlined elevation="0"
      :class="!dontShowAtTop ? 'transparent-background' : ''">
      <v-img class="shrink mr-2" alt="Leo Giesen Logo" contain width="40" transition="scale-transition"
        :src="themespecificLogoSrc" />

      <v-tabs v-model="activeTab" grow align-with-title>
        <v-tab v-for="view in views" :key="view.to.name" :value="view.to.name" :class="dontShowAtTopClass"
          @click="goToRoute(view.to.name)">
          {{ isDE ? view.tag_de : view.tag_en }}
        </v-tab>
      </v-tabs>

      <LanguageSwitcher :class="dontShowAtTopClass" @language-changed="updateSlider" />
      <ToggleTheme class="mr-5" :class="dontShowAtTopClass" />
    </v-app-bar>

    <!-- Mobile navigation -->
    <div class="hidden-md-and-up">
      <v-app-bar class="appBar" outlined elevation="0">
        <v-spacer />
        <v-app-bar-nav-icon class="justify-end mr-1" @click.stop="mobileDialog = !mobileDialog" />
      </v-app-bar>

      <v-overlay class="appBar" v-model="mobileDialog" transition="dialog-top-transition" opacity="1">
        <div class="d-flex justify-center mb-12">
          <v-img class="shrink mr-2" alt="Leo Giesen Logo" contain width="70" transition="scale-transition"
            :src="themespecificLogoSrc" />
        </div>

        <v-divider />

        <v-btn fixed top right icon @click="mobileDialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <v-btn class="ma-8" variant="text" v-for="view in views" :key="view.to.name"
          @click="goToRoute(view.to.name); mobileDialog = false">
          <v-icon color="secondary">mdi-{{ view.icon }}</v-icon>
          {{ isDE ? view.tag_de : view.tag_en }}
        </v-btn>

        <v-divider />

        <div class="d-flex flex-wrap justify-space-around mt-12" @click="mobileDialog = false">
          <LanguageSwitcher :class="dontShowAtTopClass" @language-changed="updateSlider" />
          <ToggleTheme :class="dontShowAtTopClass" />
        </div>
      </v-overlay>
    </div>
  </div>
</template>

<script setup lang="ts">
import LanguageSwitcher from "@/components/navigation/LanguageSwitcher.vue";
import ToggleTheme from "@/components/navigation/ToggleTheme.vue";

import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const mobileDialog = ref(false)
const dontShowAtTop = ref(false)
const activeTab = ref('Home')

const store = useStore()
const router = useRouter()

const isDarkTheme = computed(() => store.getters.isDarkTheme)
const isDE = computed(() => store.getters.isDE)

const views = [
  { tag_en: "Home", tag_de: "Start", to: { name: "Home" }, icon: "home-outline" },
  { tag_en: "About", tag_de: "Über Mich", to: { name: "About" }, icon: "information-outline" },
  { tag_en: "Experience", tag_de: "Erfahrung", to: { name: "Experience" }, icon: "briefcase-outline" },
  { tag_en: "Projects", tag_de: "Projekte", to: { name: "Projects" }, icon: "code-tags" },
]

const themespecificLogoSrc = computed(() =>
  isDarkTheme.value
    ? new URL('@/assets/logo/dark/logo.svg', import.meta.url).href
    : new URL('@/assets/logo/light/logo.svg', import.meta.url).href
)

const dontShowAtTopClass = computed(() =>
  dontShowAtTop.value ? '' : 'text-white'
)

function onScroll() {
  dontShowAtTop.value = window.scrollY > 700
}

function goToRoute(routeName: string) {
  router.push({ name: routeName })
  activeTab.value = routeName
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

function updateSlider() {
  // placeholder, falls du z. B. Scrollposition neu setzen willst
}
</script>

<style scoped lang="scss">
.appBar {
  opacity: 0.9;
}

@supports ((-webkit-backdrop-filter: blur(2em)) or (backdrop-filter: blur(2em))) {
  .appBar {
    opacity: 0.9;
    -webkit-backdrop-filter: blur(2em);
    backdrop-filter: blur(2em);
  }
}

a.v-tab,
div.v-list-item__title {
  font-family: "Montserrat", "Prata", sans-serif !important;
}

a.v-list-item {
  margin-top: 12px;
}

i.v-icon {
  margin-right: 12px;
}
</style>
