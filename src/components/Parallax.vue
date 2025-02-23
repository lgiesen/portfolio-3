<template lang="pug">
section.mb-0
  section.fullwidth.mb-0
    v-parallax.pt-12(
      :class="parallaxHeight"
      :src="parallaxImage" :alt="parallaxImage")
      v-overlay(absolute :color="overlayColor")
        //- Another section is necessary to provide the max-width for ultra-wide screens
        section.mb-0.mt-2
          v-container
            v-row.pa-md-12.d-flex.text-center
              v-col(order-md="2")
                h1.text-break.display-3.font-weight-thin.mb-12(
                  v-html="$t('parallaxText.' + translationKey + '.title')")
                p.text-break.subheading(
                  v-html="$t('parallaxText.' + translationKey + '.subtitle')")
                ScrollHero.mt-16.pt-16
              v-col.center-items.col-12.col-md-6(v-if="smallImgPath" order-md="1")
                v-img(:alt="imgAlt" :src="smallImgPath"
                  height="500" width="100%" contain)
</template>

<script>
import ScrollHero from "@/components/scroll/ScrollHero.vue";

export default {
  name: "Parallax",
  components: {
    ScrollHero,
  },
  computed: {
    parallaxHeight() {
      // Full height for phones (xs) and Laptops (lg). 80% vh for xs handy ipad (sm) and wide screen (xl)
      return ["xs", "lg"].includes(this.$vuetify.breakpoint.name)
        ? "h-100vh"
        : "h-80vh";
    },
  },
  props: [
    "parallaxImage",
    "overlayColor",
    "translationKey",
    "smallImgPath",
    "imgAlt",
  ],
};
</script>
