<template>
  <v-btn icon @click="toggleTheme">
    <v-icon>mdi-theme-light-dark</v-icon>
  </v-btn>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
  const current = theme.global.name.value
  const newTheme = current === 'dark' ? 'light' : 'dark'

  theme.global.name.value = newTheme
  localStorage.setItem("isDarkTheme", (newTheme === "dark").toString())
}
</script>
