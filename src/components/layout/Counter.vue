<script setup>
import { ref, onMounted } from 'vue';

const numbers = [
    { id: 1, number: 12, title: 'Created projects', icon: 'mdi:rocket-launch-outline' },
    { id: 2, number: 200, title: 'Projects', icon: 'mdi:folder-star-outline' },
    { id: 3, number: 120, title: 'Happy clients', icon: 'mdi:emoticon-happy-outline' },
    { id: 4, number: 5, title: 'Years', icon: 'mdi:calendar-check-outline' },
];

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
                    +<Countup v-if="hasIntersected" :endVal="element.number" /><span v-else>0</span>
                </p>
                <p class="mt-1 text-sm font-medium text-primary/60 dark:text-slate-400">{{ element.title }}</p>
            </li>
        </ul>
    </section>
</template>
