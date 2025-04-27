<template>
    <div>
        <blockquote class="text-body-1 font-italic mt-5">
            {{ quoteText }}
            <cite class="d-block text-right">~ {{ quoteAuthor }}</cite>
        </blockquote>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    quoteText: string
    quoteAuthor: string
}>()
</script>

<style lang="sass" scoped>
$color: rgba(var(--v-theme-primary), 1);
$background: rgba(var(--v-theme-background), 1);

// Sass integrated from https://codepen.io/johnfinkdesign/pen/gRvEGq?editors=1100 from John Fink
blockquote
    border-left: 3px solid $color
    // color: #1a1a1a
    font-family: Prata, Georgia, Times, "Times New Roman", serif
    font-size: 1.25em
    font-style: italic
    // line-height: 1.8em
    // margin: 1.1em -4em
    padding: 1em 2em
    position: relative
    transition: .2s border ease-in-out
    z-index: 0
    &:before
        content: ""
        position: absolute
        top: 50%
        left: -4px
        height: 2em
        background-color: $background
        width: 5px
        margin-top: -1em
    &:after
        content: "''"
        position: absolute
        top: 50%
        left: -0.5em
        color: $color
        font-family: "Ionicons"
        font-style: normal
        line-height: 1em
        text-align: center
        text-indent: -2px
        width: 1em
        margin-top: -0.5em
        transition: .2s all ease-in-out, .4s transform ease-in-out
    &.format:before, &.format:after
        display: none
    &.book:after
        content: "\f12e"
    &.podcast:after
        content: "\f32d"
    &.lyrics:after
        content: "\f333"
    &.favorite:after
        content: "\f384"
    &:active:after
        transform: rotateY(360deg)

    cite
        display: block
        font-size: 0.75em
        line-height: 1.8em
        margin-top: 1em
</style>
