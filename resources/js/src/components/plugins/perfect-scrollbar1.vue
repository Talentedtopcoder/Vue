<template>
    <div ref="el">
        <slot></slot>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';

    import 'perfect-scrollbar/css/perfect-scrollbar.css';
    import PerfectScrollbar from 'perfect-scrollbar/dist/perfect-scrollbar.js';

    const props = defineProps({ as: { default: 'div', type: String } });
    const el = ref(null);
    onMounted(() => {
        new PerfectScrollbar(el.value.querySelector(props.as), {
            wheelSpeed: 0.5,
            swipeEasing: !0,
            minScrollbarLength: 40,
            maxScrollbarLength: 300,
            suppressScrollX: true,
        });
    });
</script>
