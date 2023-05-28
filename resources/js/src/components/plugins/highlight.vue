<template>
    <div ref="el">
        <slot></slot>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';

    import 'highlight.js/styles/monokai-sublime.css';
    import highlight from 'highlight.js';

    const el = ref(null);
    onMounted(() => {
        highlight.highlightElement(el.value.querySelector('pre'));
    });
</script>
