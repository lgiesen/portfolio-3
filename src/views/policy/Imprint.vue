<template lang="pug">
section
  article
    v-container
      div.text-center
        h1.display-1.font-weight-thin {{ $t("imprintHeader") }}
        h3.subtitle {{ $t("imprintSubtitle") }}
      v-card(max-width="300" tile)
        v-list(dense)
          v-list-item-group
            v-list-item(v-for="(contactElem, index) in contactDetails" :key="index")
              v-list-item-icon
                v-icon mdi-{{contactElem.icon}}
              v-list-item-content
                v-list-item-title {{ contactElem.value }}
</template>

<script>
export default {
  name: "Imprint",
  data: () => ({
    contactDetails: [
      {
        value: "contact@leogiesen.com",
        icon: "email",
      },
      {
        value: "Bismarckallee 51, 48151 Münster",
        icon: "map-marker",
      },
    ],
  }),
  i18n: {
    messages: {
      en: {
        imprintHeader: "Imprint",
        imprintSubtitle: "Contact Details",
        contactDetails: {
          email: "Email",
          address: "Address",
        },
      },
      de: {
        imprintHeader: "Impressum",
        imprintSubtitle: "Kontaktdaten",
        contactDetails: {
          email: "E-Mail",
          address: "Adresse",
        },
      },
    },
  },
};
</script>
