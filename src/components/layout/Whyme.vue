<script setup>
import SectionHeader from '../UI/SectionHeader.vue';
import Education from './Education.vue';
import Experience from './Experience.vue';
import { t } from '@/i18n';
</script>

<template>
    <section id="whyme" class="container-x pt-32">
        <SectionHeader :eyebrow="t('whyme.eyebrow')" :title="t('whyme.title')"
            :subtitle="t('whyme.subtitle')" />
        <div class="grid gap-6 lg:grid-cols-2">
            <Education data-aos="fade-right" />
            <Experience data-aos="fade-left" />
        </div>
    </section>
</template>
