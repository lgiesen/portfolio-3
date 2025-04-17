<template>
  <div v-if="!isMobile" class="text-center mb-6">
    <v-btn id="heroScrollBtn" @click="scrollHero" variant="outlined" color="white" icon>
      <v-icon>mdi-chevron-down</v-icon>
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { useDisplay, useGoTo } from 'vuetify'

const { mobile: isMobile } = useDisplay()
const goTo = useGoTo()

function scrollHero() {
  goTo('#scroll')
}
</script>

<style scoped>
@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-20px);
  }

  60% {
    transform: translateY(-10px);
  }
}

#heroScrollBtn {
  border-color: white;
  animation: bounce 2s infinite;
}
</style>
