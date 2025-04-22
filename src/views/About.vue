<template>
  <div>
    <Parallax :parallaxImage="parallaxImagePath" overlayColor="rgba(184, 113, 89,.3)" translationKey="about"
      :smallImgPath="smallImgPath" imgAlt="Leo Giesen Profil" />
    <!-- About me texts alternating with corresponding images -->
    <article>
      <section id="scroll">
        <h3 class="text-center text-h3 font-weight-thin mb-8">
          {{ $t("about.introHeader") }}
        </h3>
        <v-container class="text-justify">
          <!-- friends and family -->
          <v-row justify="center">
            <v-col cols="11" md="6">
              <v-img alt="Leo Giesen Familie" :src="require('@/assets/about/standesamt-familie.webp')"
                :max-width="imageWidth" cover max-height="400px" />
            </v-col>
            <v-col cols="11" md="6">
              <p>{{ $t("about.friendsAndFamily") }}</p>
              <p v-html="$t('about.career')"></p>
            </v-col>
          </v-row>

          <!-- sport -->
          <v-row justify="center">
            <v-col cols="11" md="6" order="2">
              <v-img alt="Ski fahren mit HSP" :src="require('@/assets/about/ski-aufsteigen.webp')"
                :max-width="imageWidth" cover max-height="400px" />
            </v-col>
            <v-col cols="11" md="6" order="1">
              <p v-html="$t('about.sport')"></p>
            </v-col>
          </v-row>

          <!-- travel -->
          <v-row justify="center">
            <v-col cols="11" md="6" order="2">
              <p v-html="$t('about.travel')"></p>
              <p>{{ isMobile }} ISMOBILE</p>
              <p>{{ $t("about.quote") }}</p>
              <Quote :quoteText="quotes[0].quoteText" :quoteAuthor="quotes[0].quoteAuthor" />
            </v-col>
            <v-col cols="11" md="6" order="1">
              <v-img alt="Reisen Japan Landschaft" :src="require('@/assets/about/Fujiyoshida, Japan.webp')"
                :max-width="imageWidth" cover max-height="400px" />
            </v-col>
          </v-row>
        </v-container>
      </section>
    </article>

    <section>
      <v-container class="text-justify px-5 text-medium-emphasis">
        <h2 class="mb-5">
          {{ isDE ? "Literaturverzeichnis" : "Bibliography" }}
        </h2>
        <p>
          McCandless, C. unknown. "The joy of life comes from our encounters with new experiences, and hence there is no
          greater joy than to have an endlessly changing horizon, for each day to have a new and different sun."
          BrainyQuote.
          <a class="text-break" :href="quotes[0].quoteLink" target="_blank" rel="noopener noreferrer">
            {{ quotes[0].quoteLink }}
          </a>, accessed April 3, 2021.
        </p>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import Parallax from '@/components/Parallax.vue'
import Quote from '@/components/Quote.vue'
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useStore } from 'vuex'

const store = useStore()
const isDE = computed(() => store.getters.isDE)
const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)

const parallaxImagePath = new URL('@/assets/background/PortesDuSoleilMountains.webp', import.meta.url).href
const smallImgPath = new URL('@/assets/profile/sylt-lachen-strandkorb-polly.webp', import.meta.url).href

const quotes = [
  {
    quoteText:
      'The joy of life comes from our encounters with new experiences, and hence there is no greater joy than to have an endlessly changing horizon, for each day to have a new and different sun.',
    quoteAuthor: 'Christopher McCandless',
    quoteLink:
      'https://www.brainyquote.com/quotes/christopher_mccandless_473529',
  },
]

const imageWidth = computed(() => (isMobile.value ? '90vw' : '50vw'))
</script>