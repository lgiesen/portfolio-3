<template lang="pug">
section.fullwidth
  v-img.align-center(alt="Münster WWU Schloss" src="@/assets/background/WWU-Schloss.webp" cover
    max-height="calc(min(500px, 100vh))" width="100vw"
    :gradient="$store.getters.isDarkTheme ? 'rgba(0,0,0,.6), rgba(0,0,0,.9)' : 'rgba(23,23,23,.4), rgba(10,10,10,.8)'")
    v-row.text-center.pb-12
      v-col
        h3.white--text.display-2 {{ $t("socialTitle") }}
        v-btn.mx-8.secondary--text(
          v-for="icon in socialIcons" :key="icon.mdi"
          icon target="_blank" :href="icon.link")
          //- :class="$vuetify.theme.dark ? 'secondary--text' : 'white--text'"
          v-icon(elevation="15" size="42px") {{ icon.mdi }}
</template>

<script>
import Icons from "@/components/social-icons/Icons.vue";
import socialIcons from "@/components/social-icons/SocialIcons.json";

export default {
  name: "SocialContactSection",
  components: { Icons },
  data: () => ({
    socialIcons: socialIcons,
  }),
  i18n: {
    messages: {
      en: {
        socialTitle: "Connect with me",
      },
      de: {
        socialTitle: "Kontakt",
      },
    },
  },
};
</script>
