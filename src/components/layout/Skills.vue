<script setup>
import SectionHeader from '../UI/SectionHeader.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const skills = [
    { percentage: 98, title: 'Figma', icon: 'logos:figma', color: '#a259ff' },
    { percentage: 92, title: 'Java', icon: 'logos:java', color: '#e76f00' },
    { percentage: 88, title: 'Photoshop', icon: 'logos:adobe-photoshop', color: '#31a8ff' },
    { percentage: 77, title: 'Vue.js', icon: 'logos:vue', color: '#41b883' },
    { percentage: 43, title: 'WordPress', icon: 'logos:wordpress-icon', color: '#21759b' },
    { percentage: 40, title: 'React', icon: 'logos:react', color: '#61dafb' },
    { percentage: 98, title: 'HTML', icon: 'logos:html-5', color: '#e34f26' },
    { percentage: 98, title: 'JavaScript', icon: 'logos:javascript', color: '#f7df1e' },
];

const visible = ref(false);
const grid = ref(null);
let observer;

onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) { visible.value = true; observer.disconnect(); }
    }, { threshold: 0.2 });
    if (grid.value) observer.observe(grid.value);
});
onUnmounted(() => observer?.disconnect());
</script>

<template>
    <section id="skills" class="container-x pt-32">
        <SectionHeader eyebrow="Toolbox" title="My Skills"
            subtitle="Technologies and tools I use every day to bring ideas to life." />
        <ul ref="grid" class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <li v-for="(skill, index) in skills" :key="skill.title"
                class="glass glass-hover p-6" data-aos="zoom-in" :data-aos-delay="(index % 4) * 80">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <span class="grid h-11 w-11 place-items-center rounded-xl bg-white text-2xl shadow-sm dark:bg-white/10">
                            <Icon :icon="skill.icon" />
                        </span>
                        <h3 class="font-bold">{{ skill.title }}</h3>
                    </div>
                    <p class="flex text-lg font-extrabold tabular-nums">
                        <Countup v-if="visible" :endVal="skill.percentage" :startVal="0" :duration="2" /><span v-else>0</span>%
                    </p>
                </div>
                <div class="mt-5 h-2 overflow-hidden rounded-full bg-primary/10 dark:bg-white/10">
                    <div class="h-full rounded-full transition-[width] duration-[2000ms] ease-out"
                        :style="{ width: visible ? skill.percentage + '%' : '0%', background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})` }">
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>
