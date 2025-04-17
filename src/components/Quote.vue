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
blockquote
    font-family: Prata, Georgia, Times, "Times New Roman", serif
    font-size: 1.25em
    font-style: italic
    padding: 1em 2em
    position: relative
    transition: .2s border ease-in-out
    z-index: 0

    cite
        display: block
        font-size: 0.75em
        line-height: 1.8em
        margin-top: 1em
</style>
