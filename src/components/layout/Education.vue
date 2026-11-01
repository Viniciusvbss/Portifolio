<script setup>
import Timeline from '../UI/Timeline.vue';
import { t } from '@/i18n';
</script>
<template>
    <Timeline :title="t('whyme.education')" icon="hugeicons:university" :items="t('whyme.educationItems')" />
</template>
