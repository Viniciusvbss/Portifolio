<script setup>
import Timeline from '../UI/Timeline.vue';
import { t } from '@/i18n';
</script>
<template>
    <Timeline :title="t('whyme.experience')" icon="material-symbols-light:work" :items="t('whyme.experienceItems')" />
</template>
