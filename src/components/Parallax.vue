<template>
  <section class="mb-0">
    <section class="fullwidth mb-0">
      <v-parallax class="pt-12" :class="parallaxHeight" :src="parallaxImage" :alt="parallaxImage">
        <v-overlay absolute :color="overlayColor">
          <!-- max-width container für große Screens -->
          <section class="mb-0 mt-2">
            <v-container>
              <v-row class="pa-md-12 d-flex text-center">
                <v-col :order-md="2">
                  <h1 class="text-break display-3 font-weight-thin mb-12"
                    v-html="$t(`parallaxText.${translationKey}.title`)"></h1>
                  <p class="text-break subheading" v-html="$t(`parallaxText.${translationKey}.subtitle`)"></p>
                  <ScrollHero class="mt-16 pt-16" />
                </v-col>

                <v-col v-if="smallImgPath" class="center-items col-12 col-md-6" :order-md="1">
                  <v-img :alt="imgAlt" :src="smallImgPath" height="500" width="100%" contain />
                </v-col>
              </v-row>
            </v-container>
          </section>
        </v-overlay>
      </v-parallax>
    </section>
  </section>
</template>

<script setup lang="ts">
import ScrollHero from "@/components/scroll/ScrollHero.vue";
import { computed } from "vue";
import { useDisplay } from "vuetify";

defineProps<{
  parallaxImage: string;
  overlayColor: string;
  translationKey: string;
  smallImgPath?: string;
  imgAlt?: string;
}>();

const { name: breakpointName } = useDisplay();

const parallaxHeight = computed(() =>
  ["xs", "lg"].includes(breakpointName.value) ? "h-100vh" : "h-80vh"
);
</script>
