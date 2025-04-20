<template>
  <div>
    <!-- Hero Section -->
    <section class="fullwidth">
      <div>
        <HeroBackgroundGradientGroup class="position-absolute" />
        <v-container class="text-center">
          <v-row class="pa-md-12 pb-md-0 align-center justify-center" style="min-height: 100vh;">
            <v-col cols="12" md="6">
              <!-- Card for title and subtitle -->
              <v-card class="text-white transparent-background" variant="outlined">
                <h1 class="text-h3 font-weight-thin">{{ $t("home.homeHero.title") }}</h1>
                <h2 class="text-subtitle-1">{{ $t("home.homeHero.subtitle") }}</h2>
              </v-card>
              <ScrollHero />
            </v-col>
            <v-col cols="12" md="6" lg="4">
              <v-card>
                <v-img alt="Leo Giesen Profil" src="@/assets/profile/leo-giesen.webp" />
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    <!-- Intro Section -->
    <section width="100vw" class="d-flex justify-center w-100 mx-auto">
      <v-container id="scroll">
        <v-card class="pa-4">
          <v-row>
            <v-col>
              <v-card-title class="text-h5 text-center text-wrap">
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
        <h2 class="text-h3 mb-6">Skills</h2>
        <v-container>
          <v-row class="d-flex flex-wrap justify-space-between">
            <v-col v-for="card in skillCardGroup" :key="card.title" cols="12" md="6">
              <v-card height="100%" max-width="94vw">
                <div class="animated-gradient-box in">
                  <v-img class="d-flex align-center justify-center text-white fill-height" cover max-height="200px"
                    :src="card.backgroundImage" :alt="card.aria"
                    :gradient="isDarkTheme ? 'rgba(0,0,0,.6), rgba(0,0,0,.9)' : 'rgba(255,255,255,.6), rgba(255,255,255,.9)'">
                    <v-card-title class="text-center">
                      <pre>
                        <h2 class="font-weight-bold text-h4" :style="gradientTitle" width="94vw" max-width="94vw" min-height="400">{{ $t('home.skills.' + card.title) }} </h2>
                      </pre>
                    </v-card-title>
                  </v-img>
                </div>
                <v-col class="seperatorIcon py-0">
                  <v-btn elevation="15" icon color="background">
                    <v-icon color="primary">mdi-{{ card.icon }}</v-icon>
                  </v-btn>
                </v-col>
                <v-card-text>
                  <p class="text-body-1 text-justify my-0 py-0" v-html="$t('home.skills.' + card.textSrc)"></p>
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
  background: `-webkit-linear-gradient(120deg, ${colors.value.secondary}, ${colors.value.primary})`,
  "background-clip": "text",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent"
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

<style lang="scss" scoped>
$primary: rgba(var(--v-theme-primary), 1);
$secondary: rgba(var(--v-theme-secondary), 1);

.text-justify {
  text-align: justify;
}

.animated-gradient-box {
  position: relative;

  &::after {
    --border-width: 3px;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(120deg, $primary, $secondary, $primary);
    background-size: 300% 300%;
    clip-path: polygon(0 100%,
        0 calc(100% - var(--border-width)),
        100% calc(100% - var(--border-width)),
        100% 100%,
        0 100%);
  }

  .animated-gradient-box.in:after {
    animation: gradient-animation 4s ease-in-out infinite;
  }
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

.seperatorIcon {
  display: flex;
  align-items: center;
  justify-content: center;
  // move icon to top
  position: relative;
  top: -30px;
  // make button not clickable
  pointer-events: none;
}
</style>