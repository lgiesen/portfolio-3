<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useTheme } from "vuetify";
import { useStore } from "vuex";

import Icons from "@/components/social-icons/Icons.vue";
import programmingIcons from "@/components/social-icons/ProgrammingIcons.json";
import socialIcons from "@/components/social-icons/SocialIcons.json";

const router = useRouter();
// Vuetify Theme
const theme = useTheme();
const currentTheme = computed(() => theme.global.name.value); // 'light' or 'dark'

// Language
const store = useStore();
const isDE = computed(() => store.getters.isDE);

// Data
const links = ref([
  {
    title_en: "Contact",
    title_de: "Kontakt",
    link: "mailto",
  },
  {
    title_en: "Imprint",
    title_de: "Impressum",
    link: "imprint",
  },
  {
    title_en: "Privacy Policy",
    title_de: "Datenschutz",
    link: "privacy-policy",
  },
]);

const programmingIconsRef = ref(programmingIcons);
const socialIconsRef = ref(socialIcons);

function goTo(link) {
  if (link.includes("mailto")) {
    window.location.href = "mailto:contact@leogiesen.de";
  } else {
    router.push("/" + link).catch(() => { });
  }
}
</script>


<template>
  <div>
    <v-footer id="footer" class="mt-12 pa-10" :class="currentTheme === 'dark' ? 'darkFooterBg' : 'lightFooterBg'"
      padless>
      <v-row justify="center">
        <v-btn v-for="link in links" :key="link.link" class="my-2" color="white" variant="text"
          @click="goTo(link.link)">
          {{ isDE ? link.title_de : link.title_en }}
        </v-btn>
        <v-col class="text-white text-center" cols="12">
          <!-- Tablet & desktop version -->
          <div class="d-none d-md-flex justify-center">
            <Icons :iconGroup="socialIcons" />
            <Icons :iconGroup="programmingIcons" />
          </div>
          <!-- Mobile version: two social icons above, three code icons below -->
          <v-row class="d-md-none">
            <v-col cols="12">
              <Icons :iconGroup="socialIcons" />
            </v-col>
            <v-col cols="12">
              <Icons :iconGroup="programmingIcons" />
            </v-col>
          </v-row>
          <p class="mt-6">
            &copy; {{ new Date().getFullYear() }} -
            <span class="text-secondary">Leo Giesen</span>
          </p>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>


<style lang="scss" scoped>
.lightFooterBg {
  background: url(../assets/background/light/subtlePrism.svg) center center;
}

.darkFooterBg {
  background: url(../assets/background/dark/subtlePrism.svg) center center;
}
</style>
