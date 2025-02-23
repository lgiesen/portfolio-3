<template lang="pug">
div 
    //- use images to insert margin - was quick and easy. don't judge my methods :D
    img(height='50px')
    img.hidden-sm-and-down(height='100px')
    section
        v-container
            v-card.mx-auto(width='350px' max-width='100vw')
                v-img(
                    src="@/assets/profile/leo-giesen.webp"
                    height="350px"
                    cover)
                v-card-title.justify-center 
                    h1.my-1 Leo Giesen
                v-card-subtitle.mt-1.center-items
                    h2.font-weight-medium.my-0.text-center {{ $t("motto") }}
                template(v-slot:prepend)
                    v-avatar(color="blue-darken-2")
                        v-icon mdi-alarm
                v-divider.mx-auto.my-3(width='200px')
                v-card-text.center-items
                    Icons(:iconGroup="socialIcons")
                    Icons(:iconGroup="programmingIcons")
    img(height='100px')
</template>

<script>
import programmingIcons from "@/components/social-icons/ProgrammingIcons.json";
import socialIcons from "@/components/social-icons/SocialIcons.json";

import Icons from "@/components/social-icons/Icons.vue";

export default {
  name: "Links",
  components: { Icons },
  data: () => ({
    socialIcons: socialIcons,
    programmingIcons: programmingIcons,
  }),
  i18n: {
    messages: {
      en: {
        motto: "Progress with Passion",
      },
      de: {
        motto: "Fortschritt durch Leidenschaft",
      },
    },
  },
};
</script>

<style lang="scss" scoped>
#footer {
  display: none;
}
</style>
