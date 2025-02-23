<template lang="pug">
  div
    v-footer#footer.mt-12.pa-10(padless :class="isDarkTheme ? 'darkFooterBg' : 'lightFooterBg'")
      v-row(justify="center")
        v-btn.my-2(color="white" variant="text"
          v-for="link in links" :key="link.link"
          @click="goTo(link.link)"
        ) {{ isDE ? link.title_de : link.title_en }}
        v-col.text-white.text-center(cols="12")
          //- Tablet & desktop version
          div.d-none.d-md-flex.justify-center
            Icons(:iconGroup="socialIcons")
            Icons(:iconGroup="programmingIcons")
          //- Mobile version: two social icons above, three code icons below
          v-row.d-md-none
            v-col(cols="12")
              Icons(:iconGroup="socialIcons")
            v-col(cols="12")
              Icons(:iconGroup="programmingIcons")
          p.mt-6 &copy; {{ new Date().getFullYear() }} - 
            span.text-secondary Leo Giesen
</template>


<script>
import Icons from "@/components/social-icons/Icons.vue";
import programmingIcons from "@/components/social-icons/ProgrammingIcons.json";
import socialIcons from "@/components/social-icons/SocialIcons.json";
import { mapGetters } from "vuex";

export default {
  name: "TheFooter",
  components: { Icons },
  data: () => ({
    links: [
      {
        title_en: "Contact",
        title_de: "Kontakt",
        link: "mailto",
      },
      {
        title_en: "Imprint",
        title_de: "Impressum",
        link: "imprint",
      },
      {
        title_en: "Privacy Policy",
        title_de: "Datenschutz",
        link: "privacy-policy",
      },
    ],
    socialIcons: socialIcons,
    programmingIcons: programmingIcons,
  }),
  methods: {
    goTo(link) {
      // if the link is internal, the router should be used. Otherwise open a new page
      if (link.includes("mailto"))
        window.location.href = "mailto:contact@leogiesen.de";
      else this.$router.push("/" + link).catch(() => { });
    },
  },
  computed: {
    ...mapGetters(["isDarkTheme", "isDE"]),
  },
};
</script>
<style lang="scss" scoped>
.lightFooterBg {
  // background: url(../assets/background/light/largeTriangles.svg) center center;
  background: url(../assets/background/light/subtlePrism.svg) center center;
}

.darkFooterBg {
  // background: url(../assets/background/dark/largeTriangles.svg) center center;
  background: url(../assets/background/dark/subtlePrism.svg) center center;
}
</style>
