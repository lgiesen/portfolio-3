<template lang="pug">
v-container
  h1.display-1.text-h3.font-weight-light {{ $t('privacyPolicy.title') }}
  p {{ $t('privacyPolicy.links') }}
  p {{ $t('privacyPolicy.analytics') }}
  p {{ $t('privacyPolicy.purpose') }}
</template>

<script>
export default {
  name: "PrivacyPolicy",
};
</script>

<style lang="scss" scoped></style>
