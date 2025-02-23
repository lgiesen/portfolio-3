<template lang="pug">
div
  section
    ParallaxDivider(:sectionTitle="$t('experienceParallax.title')" 
    :sectionSubtitle="$t('experienceParallax.subtitle')"
    imgSrc="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80")

  section
    v-container
      h2.display-2.font-weight-thin.text-center.mb-12 Card Group  
      v-row.d-flex.flex-wrap.justify-space-between
        v-col.col-12.col-sm-6(v-for="i in 6" :key="i")
          v-card.mb-9
            v-card-title Card {{ i }}
            v-card-text Magna do deserunt Lorem nulla deserunt. Deserunt mollit minim excepteur 
              | do consequat eiusmod adipisicing. Fugiat qui adipisicing est occaecat consequat 
              | nisi est. Laboris ipsum irure enim nulla aute culpa. Voluptate consequat do 
              | voluptate elit amet.

  //- Image Gallery
  v-container
    h2.display-2.font-weight-thin.text-center.mb-12 Image Gallery
  section.d-flex.flex-wrap
    v-img(
      v-for="(image, index) in imageGallery" :key="index" 
      :width="$vuetify.breakpoint.mobile ? '40vw' : '25vw'"
      :height="$vuetify.breakpoint.mobile ? '40vw' : '25vw'"
      :src="image.src")

  section
    v-container
      h2.display-2.font-weight-thin.text-center.mb-12 Quotes
      p Nice background image as well: https://codepen.io/johnfinkdesign/pen/gRvEGq?editors=1100
      p https://codepen.io/jupago/pen/dwZKbM
      p https://codepen.io/abdelRhman345/pen/oJOPdq
      p https://codepen.io/JoeHastings/pen/MOdRVm
      p https://freefrontend.com/bootstrap-quotes/
</template>

<script>
import ParallaxDivider from "@/components/ParallaxDivider.vue";
export default {
  name: "Sandbox",
  components: {
    ParallaxDivider,
  },
  data: () => ({
    imageGallery: [
      {
        src: "https://images.unsplash.com/photo-1615672875631-c0e3c1c1c079?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      },
      {
        src: "https://images.unsplash.com/photo-1615672875631-c0e3c1c1c079?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      },
      {
        src: "https://images.unsplash.com/photo-1615672875631-c0e3c1c1c079?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      },
      {
        src: "https://images.unsplash.com/photo-1615672875631-c0e3c1c1c079?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      },
      {
        src: "https://images.unsplash.com/photo-1615672875631-c0e3c1c1c079?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      },
      {
        src: "https://images.unsplash.com/photo-1615672875631-c0e3c1c1c079?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      },
    ],
  }),
  methods: {
    // alternating boxes using float - CODE NOT USED
    floatDirection(index) {
      // on medium sized viewports float
      if (index % 2 == 1) return "float-md-left";
      else return "float-md-right";
    },
  },
};
</script>

<style lang="scss" scoped></style>
