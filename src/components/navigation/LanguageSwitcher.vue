<template>
  <v-btn icon class="pa-0" @click="switchLanguage">
    {{ languageSwitchBtn }}
  </v-btn>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const emit = defineEmits(['language-changed'])
const { locale } = useI18n()

function switchLanguage() {
  locale.value = locale.value === 'en' ? 'de' : 'en'
  localStorage.setItem('locale', locale.value)
  emit('language-changed')
}

const languageSwitchBtn = computed(() => (locale.value === 'de' ? 'DE' : 'EN'))
</script>
