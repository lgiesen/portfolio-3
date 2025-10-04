<template>
  <section class="w-full">
    <v-img alt="Münster WWU Schloss" src="@/assets/background/WWU-Schloss.webp" cover
      max-height="calc(min(500px, 100vh))" width="100vw"
      :gradient="isDarkTheme ? 'rgba(0,0,0,.6), rgba(0,0,0,.9)' : 'rgba(23,23,23,.4), rgba(10,10,10,.8)'"
      class="d-flex align-center justify-center">
      <v-container>
        <v-row class="text-center pb-12" justify="center">
          <v-col cols="12">
            <h3 class="text-white text-h2 font-weight-light">{{ $t('socialTitle') }}</h3>
          </v-col>
          <v-col cols="12">
            <v-btn v-for="icon in socialIcons" :key="icon.mdi" class="mx-4" :href="icon.link" target="_blank"
              variant="text" size="large" :color="isDarkTheme ? 'secondary' : 'white'" icon>
              <v-icon :size="42" elevation="15">
                {{ icon.mdi }}
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </section>
</template>

<script setup lang="ts">
import socialIcons from '@/components/social-icons/SocialIcons.json'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const isDarkTheme = computed(() => store.getters.isDarkTheme)
</script>
