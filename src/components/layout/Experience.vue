<script setup>
import Timeline from '../UI/Timeline.vue';
const experience = [
    { duration: '03/2008 - 07/2011', title: 'Frontend Developer', subtitle: 'Spotify' },
    { duration: '03/2008 - 07/2011', title: 'Frontend Developer', subtitle: 'Spotify' },
];
</script>
<template>
    <Timeline title="Experience" icon="material-symbols-light:work" :items="experience" />
</template>
