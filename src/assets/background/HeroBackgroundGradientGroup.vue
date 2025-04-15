<template>
  <!-- Hide the horizontal overflow on mobile (otherwise there are side effects on desktop) -->
  <div :style="mobile.value ? 'overflow: hidden;' : ''" class="center-items">
    <svg :class="mobile.value ? 'isMobile' : 'isDesktop'" fill="none" viewBox="0 0 1440 1024"
      xmlns="http://www.w3.org/2000/svg">
      <g id="background-gradient-group" clip-path="url(#clip0)">
        <path id="background-gradient"
          d="M-45.3998 -84.2708L1506.45 -84.2708L1506.45 639.532L-45.3998 830.076L-45.3998 -84.2708Z"
          fill="url(#paint0_linear)" />
        <path id="Intersect" fill-rule="evenodd" clip-rule="evenodd"
          d="M1067.54 693.424L146.811 806.475V206.734L1067.54 93.6823V693.424Z" fill="url(#paint1_linear)"
          fill-opacity="0.1" />
        <path id="Intersect_2" fill-rule="evenodd" clip-rule="evenodd"
          d="M1353.29 658.339L432.554 771.391V514.607L1353.29 401.555V658.339Z" fill="url(#paint2_linear)"
          fill-opacity="0.1" />
        <path id="Intersect_3" fill-rule="evenodd" clip-rule="evenodd"
          d="M961.711 706.418L40.9785 819.47V731.08L961.711 618.028V706.418Z" fill="url(#paint3_linear)"
          fill-opacity="0.1" />
        <path id="Intersect_4" fill-rule="evenodd" clip-rule="evenodd"
          d="M370.018 -84.2708L-45.3994 -84.2708L-45.3994 378.417L370.018 325.189V-84.2708Z" fill="url(#paint4_radial)"
          fill-opacity="0.1" />
        <path id="Intersect_5" fill-rule="evenodd" clip-rule="evenodd"
          d="M1067.54 -84.2864H421.972V123.384L1067.54 44.1182V-84.2864Z" fill="url(#paint5_radial)"
          fill-opacity="0.1" />
        <path id="Intersect_6" fill-rule="evenodd" clip-rule="evenodd"
          d="M1136.31 684.98L1506.45 639.532V-84.2708H1317.03L1114.68 -64.6149V545.62L1136.31 684.98Z"
          fill="url(#paint6_linear)" fill-opacity="0.1" />
      </g>
      <defs>
        <linearGradient id="paint0_linear" x1="-610.723" y1="491.163" x2="366.02" y2="1537.78"
          gradientUnits="userSpaceOnUse">
          <stop class="stopColorLeft" />
          <stop class="stopColorRight" offset="1" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="266.592" y1="-101.415" x2="600.69" y2="611.934"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint2_linear" x1="892.92" y1="401.555" x2="893.067" y2="634.963"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint3_linear" x1="501.345" y1="618.028" x2="501.492" y2="851.436"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <radialGradient id="paint4_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
          gradientTransform="translate(370.017 331.802) rotate(-138.939) scale(623.955 547.663)">
          <stop stop-color="white" />
          <stop offset="0.676051" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="paint5_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
          gradientTransform="translate(421.972 123.452) rotate(-9.63379) scale(944.148 488.054)">
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="paint6_linear" x1="1374.83" y1="-97.0781" x2="1375.3" y2="216.264"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <clipPath id="clip0">
          <rect width="1440" height="1024" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';

const { mobile } = useDisplay()
</script>


<style lang="scss" scoped>
$heroGradientBackgroundLeft: var(--v-heroGradientBackgroundLeft-base);
$heroGradientBackgroundRight: var(--v-heroGradientBackgroundRight-base);

.stopColorLeft {
  stop-color: $heroGradientBackgroundLeft;
}

.stopColorRight {
  stop-color: $heroGradientBackgroundRight;
}

// SVG needs to distinguish between the different viewports
// to display correctly
.isMobile {
  min-width: 100vw;
  height: 100vh;
}

.isDesktop {
  width: 100vw;
}
</style>
