<template>
  <section class="mb-0">
    <section class="fullwidth mb-0">
      <v-parallax class="pt-12 position-relative" :class="parallaxHeight" :src="parallaxImage" :alt="parallaxImage"
        height="100vh">
        <!-- Farb-Overlay über das Bild -->
        <div class="position-absolute top-0 left-0 w-100 h-100"
          :style="{ backgroundColor: overlayColor, opacity: 0.7, zIndex: 1 }"></div>

        <!-- Inhalt über dem Overlay -->
        <div class="position-relative" style="z-index: 2">
          <section class="mb-0 mt-2">
            <v-container>
              <v-row class="pa-md-12 d-flex text-center">
                <v-col :order-md="2">
                  <h1 class="text-white text-h3 font-weight-light mb-8"
                    v-html="$t(`parallaxText.${translationKey}.title`)"></h1>
                  <h5 class="text-white text-h5 text-subtitle-1 mb-0"
                    v-html="$t(`parallaxText.${translationKey}.subtitle`)">
                  </h5>
                  <ScrollHero class="mt-16 pt-16" />
                </v-col>

                <v-col v-if="smallImgPath" cols="12" md="6" :order-md="1" class="d-flex justify-center align-center">
                  <v-img :alt="imgAlt" :src="smallImgPath" height="500" max-height="50vh" width="100%" contain
                    class="rounded-lg" />
                </v-col>
              </v-row>
            </v-container>
          </section>
        </div>
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
