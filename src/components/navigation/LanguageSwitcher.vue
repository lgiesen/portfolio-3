<template lang="pug">
//- Set the width, so that the svg does not scale to its 900x600 size
v-btn.pa-0(text icon @click="switchLanguage();")
  | {{ languageSwitchBtn }}
</template>

<script>
export default {
  name: "LocaleChanger",
  data: () => ({
    langs: ["de", "en"],
  }),
  methods: {
    switchLanguage() {
      if (!this.$i18n.locale || this.$i18n.locale == "en")
        this.$i18n.locale = "de";
      else if (this.$i18n.locale == "de") this.$i18n.locale = "en";
      // Emit an event to notify the parent component (TheNavigation.vue)
      this.$emit("language-changed");
    },
  },
  computed: {
    // Which image to display
    languageSwitchBtn() {
      // one could also use images: require("@/assets/locales/English.svg") and require("@/assets/locales/German.svg")
      if (!this.$i18n.locale || this.$i18n.locale == "de") {
        this.$i18n.locale == "de";
        return "DE";
      } else return "EN";
    },
  },
};
</script>
