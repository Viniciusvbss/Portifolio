<script setup>
import { computed } from 'vue';
import SectionHeader from '../UI/SectionHeader.vue';
import { t } from '@/i18n';

const icons = [
    'mdi:code-braces',
    'mdi:pencil-ruler',
    'mdi:cellphone-link',
    'mdi:file-document-edit-outline',
    'mdi:speedometer',
    'mdi:email-fast-outline',
];
const services = computed(() =>
    t('services.items').map((item, i) => ({ id: i + 1, icon: icons[i], ...item })));
</script>

<template>
    <section id="services" class="container-x pt-32">
        <SectionHeader :eyebrow="t('services.eyebrow')" :title="t('services.title')"
            :subtitle="t('services.subtitle')" />
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article v-for="element in services" :key="element.id"
                class="glass glass-hover group relative overflow-hidden p-8"
                data-aos="fade-up" :data-aos-delay="(element.id % 3) * 100">
                <div class="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent-violet/10 transition duration-500 group-hover:scale-150 dark:bg-secondary/10"></div>
                <span class="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-accent-cyan to-accent-violet text-3xl text-white shadow-lg shadow-accent-violet/30">
                    <Icon :icon="element.icon" />
                </span>
                <h3 class="relative mt-6 text-lg font-bold">{{ element.name }}</h3>
                <p class="relative mt-2 text-sm leading-relaxed text-primary/65 dark:text-slate-400">{{ element.description }}</p>
            </article>
        </div>
    </section>
</template>
