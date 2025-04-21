<template>
  <div>
    <h1 class="text-h3 font-weight-light mb-12 text-center text-wrap" :class="responsiveFontSize">
      {{ sectionTitle }}
    </h1>

    <v-container class="mx-0 px-0">
      <v-row class="justify-center mx-auto">
        <v-col cols="12" sm="12" md="8" lg="6" v-for="(item, index) in iterableObject" :key="index"
          :id="'card-' + item.institution.split(' ', 1)[0]" class="justify-center">
          <v-hover v-slot="{ isHovering }">
            <v-card class="mb-3 px-md-7 pt-5 transition-swing" height="100%" max-width="94vw"
              :class="`elevation-${isHovering ? 24 : 6}`">
              <v-row>
                <v-col class="d-flex align-center justify-center">
                  <v-img :src="item.imageSrc" :alt="item.title_de" height="7vh" width="40%"
                    :max-width="isMobile ? '40vw' : '15vw'" contain />
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card-title class="justify-center text-center break-word">
                    {{ isDE ? item.title_de : item.title_en }}
                  </v-card-title>
                  <v-card-subtitle class="text-center">
                    @
                    <AnimatedLink target="_blank" :href="item.link"
                      :linkText="item.institution + ', ' + item.location" />
                    <span>
                      ({{ item.startDate }} - {{
                        item.endDate === ""
                          ? isDE
                            ? "heute"
                            : "today"
                          : item.endDate
                      }})
                    </span>
                  </v-card-subtitle>

                  <v-card-text class="mt-7 text-justify">
                    {{ isDE ? item.description_de : item.description_en }}
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import AnimatedLink from '@/components/playground/hyperlinks/AnimatedLink.vue';
import { computed } from 'vue';
import { useDisplay } from 'vuetify';
import { useStore } from 'vuex';

const props = defineProps<{
  sectionTitle: string
  iterableObject: Array<{
    title_de: string
    title_en: string
    description_de: string
    description_en: string
    imageSrc: string
    institution: string
    location: string
    link: string
    startDate: string
    endDate: string
  }>
}>()

const store = useStore()
const isDE = computed(() => store.getters.isDE)
const responsiveFontSize = computed(() => store.getters.ResponsiveFontSize)

const { mobile: isMobile } = useDisplay()
</script>
<style>
.break-word {
  overflow-wrap: normal;
  /* Verhindert Umbruch mitten im Wort */
  word-break: normal;
  /* Nur Umbruch bei Leerzeichen */
  white-space: normal;
  /* Mehrzeilige Darstellung zulassen */
}
</style>
