<template lang="pug">
div.text-center.mb-6(v-if="!this.$vuetify.breakpoint.mobile")
  v-btn#heroScrollBtn(
    @click="scrollHero"
    fab text outlined color="white") 
    v-icon mdi-chevron-down
</template>

<script>
export default {
  name: "ScrollHero",
  methods: {
    scrollHero() {
      this.$vuetify.goTo("#scroll");
    },
  },
};
</script>

<style>
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-20px);
  }

  60% {
    transform: translateY(-10px);
  }
}

#heroScrollBtn {
  border-color: white;
  animation: bounce 2s infinite;
}
</style>
