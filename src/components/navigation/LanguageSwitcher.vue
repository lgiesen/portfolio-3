<template lang="pug">
  //- Set the width, so that the svg does not scale to its 900x600 size
  v-btn.pa-0(text icon @click="switchLanguage")
    | {{ languageSwitchBtn }}
  </template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

// Define the event emitter to notify parent components
const emit = defineEmits(['language-changed']);

// Optional languages array, if needed elsewhere
const langs = ["de", "en"];

// Access the i18n composable which provides a reactive locale reference
const { locale } = useI18n();

// Method to switch language
function switchLanguage() {
  if (!locale.value || locale.value === "en")
    locale.value = "de";
  else if (locale.value === "de")
    locale.value = "en";
  // Emit an event to notify the parent component (TheNavigation.vue)
  emit("language-changed");
}

// Which label to display on the button
const languageSwitchBtn = computed(() => {
  // one could also use images: require("@/assets/locales/English.svg") and require("@/assets/locales/German.svg")
  if (!locale.value || locale.value === "de") {
    return "DE";
  } else {
    return "EN";
  }
});
</script>