<template lang="pug">
div
  h1.font-weight-thin.mb-12.text-center(:class="this.ResponsiveFontSize") {{ this.sectionTitle }}
  v-container
    v-row.justify-center
      v-col.col-11.col-md-8.col-lg-6(
        v-for="(item, index) in iterableObject" 
        :key="index" :id="'card-' + item.institution.split(' ', 1)")
        //- give each card an id so that you can create a scroll link
        v-hover
          template(v-slot:default="{ hover }")
            v-card.mb-12.px-3.px-md-7.pt-5.transition-swing(
              height="100%" :class="`elevation-${hover ? 24 : 6}`")
              v-row
                v-col(align="center" justify="center")
                  v-img(:src="item.imageSrc" :alt="item.title_de" height="7vh" width="40%" 
                    :max-width="$vuetify.breakpoint.mobile ? '40vw' : '15vw'" contain)
              v-row
                v-col
                  v-card-title.justify-center.text-center
                    | {{ isDE ? item.title_de : item.title_en }} 
                  v-card-subtitle.text-center @
                    AnimatedLink(target="_blank"
                      :href="item.link" :linkText="item.institution + ', ' + item.location")
                    //- display start and end date (and consider active language)
                    span  ({{item.startDate}} - {{item.endDate == "" ? (isDE ? "today" : "heute") : item.endDate}})
                  v-card-text.mt-7.text-justify 
                    | {{ isDE ? item.description_de : item.description_en }}
</template>

<script>
import AnimatedLink from "@/components/playground/hyperlinks/AnimatedLink.vue";
import { mapGetters } from "vuex";

export default {
  name: "CardGroup",
  props: ["sectionTitle", "iterableObject"],
  components: { AnimatedLink },
  computed: {
    ...mapGetters(["isDE", "ResponsiveFontSize"]),
  },
};
</script>

<style lang="scss" scoped></style>
