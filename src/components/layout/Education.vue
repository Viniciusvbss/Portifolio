<script setup>
import Timeline from '../UI/Timeline.vue';
import { t } from '@/i18n';
</script>
<template>
    <Timeline :title="t('whyme.education')" icon="hugeicons:university" :items="t('whyme.educationItems')">
        <section class="mt-10 border-t border-primary/10 pt-8 dark:border-white/10">
            <h4 class="flex items-center gap-2 text-lg font-bold">
                <Icon icon="mdi:translate" class="text-xl text-accent-violet dark:text-secondary" />
                {{ t('whyme.languagesTitle') }}
            </h4>
            <ul class="mt-4 space-y-3">
                <li v-for="lang in t('whyme.languages')" :key="lang.name"
                    class="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-primary/5 px-4 py-3 dark:bg-white/5">
                    <span class="font-semibold">{{ lang.name }}</span>
                    <span class="chip">{{ lang.level }}</span>
                </li>
            </ul>
        </section>
    </Timeline>
</template>
