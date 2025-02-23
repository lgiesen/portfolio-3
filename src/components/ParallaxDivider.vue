<template lang="pug">
//- full-width parralax image
v-parallax.py-12.text-center(:src="this.imgSrc" :alt="this.sectionTitle")
  h1.font-weight-thin.mb-4.break-word(:class="this.ResponsiveFontSize") {{ this.sectionTitle }}
  h4.subheading {{ this.sectionSubtitle }}
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ParallaxDivider",
  props: ["sectionTitle", "sectionSubtitle", "imgSrc"],
  computed: { ...mapGetters(["ResponsiveFontSize"]) },
};
</script>

<style lang="scss" scoped>
.v-parallax {
  margin-bottom: 20vh;
}
</style>
