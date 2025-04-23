<template lang="pug">
section
  article
    v-container
      div.text-center
        h1.display-1.text-h3.font-weight-light {{ $t("imprint.imprintHeader") }}
        h3.subtitle {{ $t("imprint.imprintSubtitle") }}
      v-card(max-width="600" tile)
        v-list(dense)
          v-list-item-group
            v-list-item(v-for="(contactElem, index) in contactDetails" :key="index")
              v-list-item-icon
                v-icon mdi-{{ contactElem.icon }}
              v-list-item-content
                v-list-item-title {{ contactElem.value }}
</template>

<script>
export default {
  name: "Imprint",
  data: () => ({
    contactDetails: [
      {
        value: "contact@leogiesen.de",
        icon: "email",
      },
      {
        value: "Catharina-Müller-Straße 5, 48149 Münster",
        icon: "map-marker",
      },
    ],
  }),
};
</script>
