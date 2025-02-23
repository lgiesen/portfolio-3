/* eslint-disable */
<template lang="pug">
  v-container
    v-row.text-center.pa-12(align="center" justify="center" fill-height fluid)
      h4.ma-10.display-2.primary--text.font-weight-bold 
        span.secondary--text 404 
        | - Page not found
      v-card(width="60vw")
        v-img(src="@/assets/errors/pulp-fiction.gif"
          gradient="rgba(255,255,255,.6), rgba(255,255,255,.6)")
          v-row.text-center.pa-12(align="center" justify="center" fill-height fluid)
            v-col.pa-12(cols="12")
              h2.ma-12.black--text Unfortunatly, this page does not exist. 
              v-btn.gradient-btn-secondary(to="/") Take me back home
</template>

<script>
/* eslint-disable max-len */
export default {
  name: "NotFound",
};
</script>
