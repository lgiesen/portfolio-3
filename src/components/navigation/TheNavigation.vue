<template lang="pug">
div(style="position: fixed; z-index: 99; width: 100vw;" v-scroll="onScroll")
  //- Tablet and desktop navigation
  v-app-bar.appBar.hidden-sm-and-down(outlined elevation="0"
    :class="!this.dontShowAtTop ? 'transparent-background' : ''")
    //- transparent-background class is defined in @/App.vue
    v-img.shrink.mr-2(alt="Leo Giesen Logo"
      contain width="40"
      transition="scale-transition"
      :src="themespecificLogoSrc")
    v-tabs(align-with-title ref="tabs")
      v-tab(v-for="view in views" :key="view.to.name" :to="view.to"
        :class="dontShowAtTopComputed") 
        | {{ isDE ? view.tag_de : view.tag_en }}
    LanguageSwitcher(@language-changed="updateSlider" :class="dontShowAtTopComputed") )
    ToggleTheme.mr-5(:class="dontShowAtTopComputed")

  //- mobile navigation
  div.hidden-md-and-up
    //- app bar to open the navigation overlay
    v-app-bar.appBar(outlined elevation="0")
      v-spacer
      v-app-bar-nav-icon.justify-end.mr-1(@click.stop="mobileDialog = !mobileDialog")
    //- navigation overlay
    v-overlay.appBar(v-if="mobileDialog" transition="dialog-top-transition" opacity="1")
      .d-flex.justify-center.mb-12
        v-img.shrink.mr-2(alt="Leo Giesen Logo"
          contain width="70"
          transition="scale-transition"
          :src="themespecificLogoSrc")

      v-divider

      v-btn(fixed top right icon
        @click="mobileDialog = false")
        v-icon mdi-close

      v-tab.ma-8(v-for="view in views" :key="view.to.name" 
        @click="mobileDialog = false" :to="view.to")
        v-icon(color="secondary") mdi-{{ view.icon }}
        |  {{ isDE ? view.tag_de : view.tag_en }}
      v-divider
      .d-flex.flex-wrap.justify-space-around.mt-12(@click="mobileDialog = false")
        LanguageSwitcher(@language-changed="updateSlider" :class="dontShowAtTopComputed")
        ToggleTheme(:class="dontShowAtTopComputed")
</template>

<script>
import LanguageSwitcher from "@/components/navigation/LanguageSwitcher.vue";
import ToggleTheme from "@/components/navigation/ToggleTheme.vue";
import { mapGetters } from "vuex";

export default {
  name: "TheNavigation",
  components: {
    LanguageSwitcher,
    ToggleTheme,
  },
  data: () => ({
    views: [
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
    ],
    mobileDialog: false,
    dontShowAtTop: false,
  }),
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.dontShowAtTop = top > 700;
    },
    // Method to update the slider position when switching languages
    updateSlider() {
      this.$refs.tabs.callSlider();
    },
  },
  computed: {
    ...mapGetters(["isDarkTheme", "isDE"]),
    themespecificLogoSrc() {
      if (this.isDarkTheme) return require("@/assets/logo/dark/logo.svg");
      else return require("@/assets/logo/light/logo.svg");
    },
    dontShowAtTopComputed() {
      if (this.dontShowAtTop) {
        return "";
      } else return "white--text";
    },
  },
};
</script>

<style scoped lang="scss">
// Fallback, if browser does not support backdrop-filter
.appBar {
  opacity: 0.9;
}

@supports (
  (-webkit-backdrop-filter: blur(2em)) or (backdrop-filter: blur(2em))
) {
  .appBar {
    opacity: 0.9;
    -webkit-backdrop-filter: blur(2em);
    backdrop-filter: blur(2em);
  }
}

// Navigation Font
a.v-tab,
div.v-list-item__title {
  font-family: "Montserrat", "Prata", sans-serif !important;
}

// Mobile navigation
// items in mobile nav
a.v-list-item {
  margin-top: 12px;
}

// Icons in items in mobile nav
i.v-icon {
  margin-right: 12px;
}
</style>
