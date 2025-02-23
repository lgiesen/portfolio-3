<template lang="pug">
a.link(:href="this.href" :target="this.target") 
  span(:data-content="this.linkText") {{ linkText }}
</template>

<script>
export default {
  name: "AnimatedLink",
  props: ["href", "linkText", "target"],
};
</script>

<style lang="scss" scoped>
a:not(.gradient-btn) {
  text-decoration: none !important;
  cursor: pointer;
  position: relative;
  transition: clip-path 275ms ease;
  &:hover span::before,
  &:focus span::before {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}
.link {
  position: relative;
  transition: clip-path 275ms ease;
  &:hover span::before,
  &:focus span::before {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  span {
    position: relative;
    display: inline-block;
    // color: $blue;
    &::before {
      position: absolute;
      content: attr(data-content);
      // color: $darkblue;
      text-decoration: underline;
      // text-decoration-color: $darkblue;
      clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
      transition: clip-path 275ms ease;
    }
  }
}
</style>
