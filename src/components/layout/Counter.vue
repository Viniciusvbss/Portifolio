<script setup>
import { ref, computed, onMounted } from 'vue';
import { t } from '@/i18n';

// Real numbers; labels come from src/i18n.js → counter (same order).
const stats = [
    { id: 1, number: 3, icon: 'mdi:calendar-check-outline' },
    { id: 2, number: 1, icon: 'mdi:rocket-launch-outline' },
    { id: 3, number: 4, icon: 'mdi:web' },
    { id: 4, number: 30, suffix: '+', icon: 'mdi:github' },
];
const numbers = computed(() => stats.map((s, i) => ({ ...s, title: t('counter')[i] })));

const statsSection = ref(null);
const hasIntersected = ref(false);

onMounted(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            hasIntersected.value = true;
            observer.disconnect();
        }
    }, { threshold: 0.4 });
    if (statsSection.value) observer.observe(statsSection.value);
});
</script>

<template>
    <section class="container-x" data-aos="fade-up">
        <ul ref="statsSection"
            class="glass grid grid-cols-2 gap-y-8 p-6 md:grid-cols-4 md:divide-x md:divide-primary/10 md:p-8 dark:md:divide-white/10">
            <li v-for="element in numbers" :key="element.id" class="flex flex-col items-center text-center">
                <Icon :icon="element.icon" class="mb-2 text-3xl text-accent-violet dark:text-secondary" />
                <p class="flex text-3xl font-extrabold md:text-4xl">
                    <Countup v-if="hasIntersected" :endVal="element.number" /><span v-else>0</span>{{ element.suffix }}
                </p>
                <p class="mt-1 text-sm font-medium text-primary/60 dark:text-slate-400">{{ element.title }}</p>
            </li>
        </ul>
    </section>
</template>
