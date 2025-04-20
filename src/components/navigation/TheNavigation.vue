<template>
  <div style="position: fixed; z-index: 99; width: 100vw;" v-scroll="onScroll">
    <!-- Tablet and desktop navigation -->
    <v-app-bar class="appBar hidden-sm-and-down" :class="!dontShowAtTop ? 'transparent-background' : ''" flat
      elevation="0">
      <!-- transparent-background class is defined in @/App.vue -->
      <v-img class="shrink mr-2" alt="Leo Giesen Logo" contain width="40" transition="scale-transition"
        :src="themespecificLogoSrc"></v-img>
      <v-tabs align-with-title ref="tabs">
        <v-tab v-for="view in views" :key="view.to.name" :to="view.to" :class="dontShowAtTopComputed">
          {{ isDE ? view.tag_de : view.tag_en }}
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
      <LanguageSwitcher :class="dontShowAtTopComputed" />
      <ToggleTheme :class="dontShowAtTopComputed" class="mr-5" />
    </v-app-bar>

    <!-- Mobile navigation -->
    <div class="hidden-md-and-up" max-width="100vw" width="100vw">
      <v-app-bar class="appBar d-flex justify-center align-center" flat elevation="0" height="64" max-width="100vw" app
        width="100vw" style="position: fixed; top: 0; left: 0; width: 100%; z-index: 10;">
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon class="mr-5" @click.stop="mobileDialog = !mobileDialog" v-show="!mobileDialog" />
      </v-app-bar>


      <!-- Navigation overlay -->
      <v-overlay v-model="mobileDialog" class="appBar" :scrim="true" persistent style="z-index: 200" max-width="100vw"
        width="100vw">
        <v-sheet class="bg-background text-white d-flex flex-column align-center px-6 pt-6" elevation="4" height="100vh"
          width="100vw" style="position: relative">
          <!-- Close button in the top right corner -->
          <v-btn icon variant="plain" @click="mobileDialog = false" class="position-absolute"
            style="top: 8px; right: 8px;">
            <v-icon size="28">mdi-close</v-icon>
          </v-btn>
          <!-- Logo -->
          <v-spacer></v-spacer>
          <v-img class="mt-10 mb-8" :src="themespecificLogoSrc" alt="Leo Giesen Logo" contain width="70"
            max-height="70" />

          <!-- Navigation links -->
          <v-spacer></v-spacer>
          <div class="d-flex flex-column align-center text-center w-100">
            <v-btn v-for="view in views" :key="view.to.name" :to="view.to" variant="text" class="my-3 text-uppercase"
              @click="mobileDialog = false">
              <v-icon class="me-2" color="secondary">mdi-{{ view.icon }}</v-icon>
              {{ isDE ? view.tag_de : view.tag_en }}
            </v-btn>
          </div>
          <v-spacer></v-spacer>

          <v-divider class="my-6 w-75"></v-divider>

          <!-- Language and Theme switchers -->
          <div class="d-flex justify-center mt-4 mb-8">
            <LanguageSwitcher class="mx-6" @click="mobileDialog = false" />
            <ToggleTheme class="mx-6" @click="mobileDialog = false" />
          </div>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
        </v-sheet>
      </v-overlay>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useTheme } from "vuetify";
import { useStore } from "vuex";

// Komponenten-Imports
import LanguageSwitcher from "@/components/navigation/LanguageSwitcher.vue";
import ToggleTheme from "@/components/navigation/ToggleTheme.vue";

// Vuetify Theme + Store
const theme = useTheme();
const store = useStore();

// Reaktive Daten
const views = ref([
  {
    tag_en: "Home",
    tag_de: "Start",
    to: { name: "Home" },
    icon: "home-outline",
  },
  {
    tag_en: "About",
    tag_de: "Über Mich",
    to: { name: "About" },
    icon: "information-outline",
  },
  {
    tag_en: "Experience",
    tag_de: "Erfahrung",
    to: { name: "Experience" },
    icon: "briefcase-outline",
  },
  {
    tag_en: "Projects",
    tag_de: "Projekte",
    to: { name: "Projects" },
    icon: "code-tags",
  },
]);

const mobileDialog = ref(false);
const dontShowAtTop = ref(false);
const tabsRef = ref<HTMLElement | null>(null);

// Theme 
const currentTheme = computed(() => theme.global.name.value);
const isDarkTheme = computed(() => currentTheme.value === "dark");

const themespecificLogoSrc = computed(() =>
  isDarkTheme.value
    ? new URL("@/assets/logo/dark/logo.svg", import.meta.url).href
    : new URL("@/assets/logo/light/logo.svg", import.meta.url).href
);

// Scrollverhalten
const onScroll = (e: Event) => {
  const top = window.pageYOffset || (e.target as HTMLElement)?.scrollTop || 0;
  dontShowAtTop.value = top > 600;
};

const dontShowAtTopComputed = computed(() =>
  dontShowAtTop.value ? "" : "text-white"
);

const isDE = computed(() => store.getters.isDE);

// Lifecycle
onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
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

  .v-overlay {
    opacity: 0.95 !important;
    -webkit-backdrop-filter: blur(10em);
    backdrop-filter: blur(10em);
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