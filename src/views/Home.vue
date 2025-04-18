<template>
  <div>
    <!-- Hero Section -->
    <section class="fullwidth">
      <div>
        <HeroBackgroundGradientGroup class="position-absolute" />
        <v-container class="text-center">
          <v-row class="pa-md-12 pb-md-0 align-center justify-center h-screen">
            <v-col cols="12" md="6">
              <!-- Card for title and subtitle -->
              <v-card class="text-white transparent-background" variant="outlined">
                <h1 class="text-h2 font-weight-thin">{{ $t("home.homeHero.title") }}</h1>
                <h2 class="text-subtitle-1">{{ $t("home.homeHero.subtitle") }}</h2>
              </v-card>
              <ScrollHero />
            </v-col>
            <v-col cols="12" md="6" lg="4">
              <v-card>
                <v-img alt="Leo Giesen Profil" src="@/assets/profile/leo-giesen.webp" max-height="60vh"
                  class="rounded" />
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    <!-- Intro Section -->
    <section>
      <v-container id="scroll">
        <v-card class="pa-4">
          <v-row>
            <v-col>
              <v-card-title class="d-flex justify-center text-h5">
                {{ $t("home.homeIntro.title") }}
              </v-card-title>
              <v-card-text class="d-flex flex-column align-center text-justify">
                {{ $t("home.homeIntro.text") }}
                <v-btn class="ma-8 mt-12" rounded :style="gradientBtn"
                  :href="`/CV/CV-Leo-Giesen-${$i18n.locale.toUpperCase()}.pdf`">
                  <v-icon class="me-2">mdi-account-tie</v-icon>
                  {{ $t("home.homeIntro.downloadCV") }}
                </v-btn>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </section>


    <!-- Skills Section -->
    <article>
      <section>
        <h2 class="text-h3 font-weight-thin mb-6">Skills</h2>
        <v-container>
          <v-row class="d-flex flex-wrap justify-space-between">
            <v-col v-for="card in skillCardGroup" :key="card.title" cols="12" md="6">
              <v-card class="w-100" height="100%" max-width="94vw">
                <div class="in" :style="animatedBoxStyle">
                  <v-img class="d-flex align-end text-white" cover max-height="200px" :src="card.backgroundImage"
                    :alt="card.aria"
                    :gradient="isDarkTheme ? 'rgba(0,0,0,.6), rgba(0,0,0,.9)' : 'rgba(255,255,255,.6), rgba(255,255,255,.9)'">
                    <v-card-title class="w-100 text-center">
                      <pre><h2 class="text-h5 gradient-text" width="94vw" max-width="94vw" min-height="400"
                        :style="gradientTitle">
                        {{ $t('home.skills.' + card.title) }}
                      </h2>
                      <!-- gradient-text -->
                      <h2 class="text-h5" :style="gradientTitle">{{ $t('home.skills.' + card.title) }} </h2>
                    </pre>
                    </v-card-title>
                  </v-img>
                </div>

                <div class="d-flex justify-center my-2">
                  <v-btn elevation="15" icon color="background">
                    <v-icon color="primary">mdi-{{ card.icon }}</v-icon>
                  </v-btn>
                </div>

                <v-card-text>
                  <p class="text-body-1 text-justify" v-html="$t('home.skills.' + card.textSrc)"></p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </article>
  </div>
</template>

<script setup lang="ts">
import HeroBackgroundGradientGroup from '@/assets/background/HeroBackgroundGradientGroup.vue';
import ScrollHero from '@/components/scroll/ScrollHero.vue';
import { computed } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme()
const currentTheme = computed(() => theme.global.name.value)
const isDarkTheme = computed(() => currentTheme.value === 'dark')
const gradientBtn = computed(() => ({
  backgroundImage: `
    linear-gradient(to right,
      ${theme.current.value.colors.secondary} 0%,
      ${theme.current.value.colors.primary} 51%,
      ${theme.current.value.colors.secondary} 100%)`,
  backgroundSize: "200% auto",
  transition: "0.5s",
  color: "white",
}))
const colors = computed(() => theme.current.value.colors)

const gradientTitle = computed(() => ({
  background: `linear-gradient(120deg, ${colors.value.secondary}, ${colors.value.primary})`,
}))

const animatedBoxStyle = computed(() => ({
  position: 'relative',
  '::after': {
    content: "''",
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: `linear-gradient(120deg, ${colors.value.secondary}, ${colors.value.primary}, ${colors.value.secondary})`,
    backgroundSize: '300% 300%',
    clipPath:
      'polygon(0 100%, 0 calc(100% - 3px), 100% calc(100% - 3px), 100% 100%, 0 100%)',
    animation: 'gradient-animation 4s ease-in-out infinite',
    zIndex: 0,
  },
}))

const skillCardGroup = [
  {
    title: 'mlbiTitle',
    textSrc: 'mlbi',
    backgroundImage: require('@/assets/home/machine_learning.webp'),
    icon: 'language-python',
    aria: 'Machine Learning and Artificial Intelligence'
  },
  {
    title: 'dataScienceTitle',
    textSrc: 'dataScienceText',
    backgroundImage: require('@/assets/home/data-science.webp'),
    icon: 'database-search',
    aria: 'Data Science and Data Analysis'
  },
  {
    title: 'feTitle',
    textSrc: 'frontend',
    backgroundImage: require('@/assets/home/web_dev.webp'),
    icon: 'vuejs',
    aria: 'Front-end Web Development Vue.js'
  },
  {
    title: 'beTitle',
    textSrc: 'backend',
    backgroundImage: require('@/assets/home/backend.webp'),
    icon: 'database',
    aria: 'API and backend Web Development'
  },
  {
    title: 'itArchitectureTitle',
    textSrc: 'itArchitecture',
    backgroundImage: require('@/assets/home/it-architecture.webp'),
    icon: 'lan-connect',
    aria: 'It Architecture'
  },
  {
    title: 'officeTitle',
    textSrc: 'office',
    backgroundImage: require('@/assets/home/microsoft_office_365.webp'),
    icon: 'microsoft-office',
    aria: 'Microsoft Office and Microsoft 365'
  },
  {
    title: 'sdevTitle',
    textSrc: 'softwareDev',
    backgroundImage: require('@/assets/home/software_development.webp'),
    icon: 'language-java',
    aria: 'Software Development'
  },
  {
    title: 'otherTitle',
    textSrc: 'other',
    backgroundImage: require('@/assets/home/desk.webp'),
    icon: 'star',
    aria: 'Other'
  }
]
</script>

<style scoped>
.text-justify {
  text-align: justify;
}

.gradient-text {
  background: -webkit-linear-gradient(120deg, blue, green);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes gradient-animation {
  0% {
    background-position: 15% 0%;
  }

  50% {
    background-position: 85% 100%;
  }

  100% {
    background-position: 15% 0%;
  }
}
</style>