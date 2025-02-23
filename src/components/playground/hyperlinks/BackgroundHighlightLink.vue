<template lang="pug">
div.wrap
  span 
    a(:href="this.href" :target="this.target") {{ linkText }}
</template>

<script>
export default {
  name: "BackgroundHighlightLink",
  props: ["href", "linkText", "target"],
};
</script>

<style lang="scss" scoped>
// $link: var(--v-primary-base);
$link: #f4511e;
.wrap {
  //   width: 50vw;
  //   box-sizing: border-box;
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  transform: translate(0%, 0%);
  @media screen and (max-width: 800px) {
    width: 75vw;
  }
  span {
    margin: 0 0 20px;
    &:last-child {
      margin: 0;
    }
    a {
      position: relative;
      overflow: hidden;
      text-decoration: none !important;
      color: $link;
      &::after {
        content: "";
        background: rgba($link, 0.25);
        position: absolute;
        left: 12px;
        bottom: -6px;
        width: calc(100% - 8px);
        height: calc(100% - 8px);
        z-index: -1;
        transition: 0.35s cubic-bezier(0.25, 0.1, 0, 2.05);
      }
      &:hover:after {
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
