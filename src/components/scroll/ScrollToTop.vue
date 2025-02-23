<template lang="pug">
v-btn( 
  elevation="15" v-scroll="onScroll"
  v-show="fab" fab
  outlined color="primary" 
  style="backdrop-filter: blur(8px);"
  fixed bottom right
  @click="toTop")
  v-icon mdi-chevron-up
</template>

<script>
export default {
  name: "ScrollToTop",
  data: () => ({
    // show scroll button
    fab: false,
  }),
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>

<style lang="scss" scoped></style>
