<script setup>
import Timeline from '../UI/Timeline.vue';
const education = [
    { duration: '03/2008 - 07/2011', title: 'Software Engineer', subtitle: 'School 1' },
    { duration: '03/2008 - 07/2011', title: 'Software Engineer', subtitle: 'School 2' },
];
</script>
<template>
    <Timeline title="Education" icon="hugeicons:university" :items="education" />
</template>
