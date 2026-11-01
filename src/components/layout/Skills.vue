<script setup>
import SectionHeader from '../UI/SectionHeader.vue';
import { t, locale } from '@/i18n';
import { skillGroups } from '@/data/skills';

const label = (name) => (typeof name === 'string' ? name : name[locale.value]);
</script>

<template>
    <section id="skills" class="container-x pt-32">
        <SectionHeader :eyebrow="t('skills.eyebrow')" :title="t('skills.title')"
            :subtitle="t('skills.subtitle')" />
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article v-for="(group, index) in skillGroups" :key="group.id"
                class="glass glass-hover p-7" data-aos="fade-up" :data-aos-delay="(index % 3) * 100">
                <header class="mb-5 flex items-center gap-3">
                    <span class="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent-cyan to-accent-violet text-2xl text-white shadow-lg shadow-accent-violet/30">
                        <Icon :icon="group.icon" />
                    </span>
                    <h3 class="text-lg font-bold">{{ t(`skills.categories.${group.id}`) }}</h3>
                </header>
                <ul class="flex flex-wrap gap-2">
                    <li v-for="item in group.items" :key="label(item.name)"
                        class="inline-flex items-center gap-2 rounded-xl border border-primary/10 bg-white/70 px-3 py-2 text-sm font-semibold
                        dark:border-white/10 dark:bg-white/5">
                        <Icon :icon="item.icon" class="text-lg" />
                        {{ label(item.name) }}
                    </li>
                </ul>
            </article>
        </div>
    </section>
</template>
