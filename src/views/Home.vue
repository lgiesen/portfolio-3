<template>
  <div>
    <!-- Hero Section -->
    <section class="fullwidth">
      <div>
        <HeroBackgroundGradientGroup class="absolute" />
        <v-container class="text-center">
          <v-row class="pa-md-12 pb-md-0 align-center justify-center h-screen">
            <v-col cols="12" md="6">
              <!-- Card for title and subtitle -->
              <v-card class="text-white transparent-background" variant="outlined">
                <h1 class="text-h2 font-weight-light">{{ $t("home.homeHero.title") }}</h1>
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
              <p>{{ isDarkTheme }} ---</p>
              <v-card-title class="justify-center">
                {{ $t("home.homeIntro.title") }}
              </v-card-title>
              <v-card-text class="d-flex justify-center text-justify">
                {{ $t("home.homeIntro.text") }}
                <v-btn class="gradient-btn pa-6 ma-8 mt-12" rounded
                  :href="`/CV/CV-Leo-Giesen-${$i18n.locale.toUpperCase()}.pdf`">
                  <v-icon>mdi-account-tie</v-icon>
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
        <h2 class="text-h2">Skills</h2>
        <v-container>
          <v-row class="d-flex flex-wrap justify-space-between">
            <v-col v-for="card in skillCardGroup" :key="card.title" cols="12" md="6">
              <v-card height="100%" tile max-width="94vw">
                <div class="animated-gradient-box in">
                  <v-img class="d-flex text-white align-end" max-height="200px" :src="card.backgroundImage"
                    :alt="card.aria"
                    :gradient="isDarkTheme ? 'rgba(0,0,0,.6), rgba(0,0,0,.9)' : 'rgb(255,255,255,.6), rgb(255,255,255,.9)'">
                    <v-card-title class="justify-center text-center">
                      <pre>
                        <h2 class="gradient-text" style="width:94vw; max-width:94vw; min-height:400px">
                          {{ $t("home.skills." + card.title) }}
                        </h2>
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
                  <p class="my-0 py-0 text-justify" v-html="$t('home.skills.' + card.textSrc)"></p>
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
