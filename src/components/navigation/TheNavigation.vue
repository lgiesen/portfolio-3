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
      <ToggleTheme class="mr-5" :class="dontShowAtTopComputed" />
    </v-app-bar>

    <!-- Mobile navigation -->
    <div class="hidden-md-and-up">
      <!-- App bar to open the navigation overlay -->
      <v-app-bar class="appBar" flat elevation="0">
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon class="justify-end mr-1" @click.stop="mobileDialog = !mobileDialog"></v-app-bar-nav-icon>
      </v-app-bar>

      <!-- Navigation overlay -->
      <v-overlay class="appBar" v-if="mobileDialog" transition="dialog-top-transition" opacity="1">
        <div class="d-flex justify-center mb-12">
          <v-img class="shrink mr-2" alt="Leo Giesen Logo" contain width="70" transition="scale-transition"
            :src="themespecificLogoSrc"></v-img>
        </div>

        <v-divider></v-divider>

        <v-btn fixed top right icon @click="mobileDialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <v-tab class="ma-8" v-for="view in views" :key="view.to.name" @click="mobileDialog = false" :to="view.to">
          <v-icon color="secondary">mdi-{{ view.icon }}</v-icon>
          {{ isDE ? view.tag_de : view.tag_en }}
        </v-tab>

        <v-divider></v-divider>

        <div class="d-flex flex-wrap justify-space-around mt-12" @click="mobileDialog = false">
          <LanguageSwitcher :class="dontShowAtTopComputed" />
          <ToggleTheme :class="dontShowAtTopComputed" />
        </div>
      </v-overlay>
    </div>
  </div>
</template>

<script>
import LanguageSwitcher from "@/components/navigation/LanguageSwitcher.vue";
import ToggleTheme from "@/components/navigation/ToggleTheme.vue";
import { computed, onMounted, ref } from "vue";
import { useTheme } from 'vuetify';
import { useStore } from "vuex";
export default {
  name: "TheNavigation",
  components: {
    LanguageSwitcher,
    ToggleTheme,
  },
  setup() {
    const store = useStore();
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

    const onScroll = (e) => {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      dontShowAtTop.value = top > 700;
    };

    const tabsRef = ref(null);

    const theme = useTheme()
    const currentTheme = computed(() => theme.global.name.value) // 'light' | 'dark'
    const isDarkTheme = computed(() => currentTheme.value === 'dark')
    const themespecificLogoSrc = computed(() => {
      return isDarkTheme.value
        ? new URL('@/assets/logo/dark/logo.svg', import.meta.url).href
        : new URL('@/assets/logo/light/logo.svg', import.meta.url).href
    })

    const dontShowAtTopComputed = computed(() => {
      return dontShowAtTop.value ? "" : "white--text";
    });

    const isDE = computed(() => store.getters.isDE);

    onMounted(() => {
      window.addEventListener("scroll", onScroll);
    });

    return {
      views,
      isDarkTheme,
      mobileDialog,
      dontShowAtTop,
      onScroll,
      tabsRef,
      themespecificLogoSrc,
      dontShowAtTopComputed,
      isDE,
    };
  },
};
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