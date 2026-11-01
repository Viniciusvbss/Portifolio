<script setup>
import SectionHeader from '../UI/SectionHeader.vue';
import Education from './Education.vue';
import Experience from './Experience.vue';
</script>

<template>
    <section id="whyme" class="container-x pt-32">
        <SectionHeader eyebrow="Journey" title="Why Me"
            subtitle="A quick look at where I studied and where I've worked." />
        <div class="grid gap-6 lg:grid-cols-2">
            <Education data-aos="fade-right" />
            <Experience data-aos="fade-left" />
        </div>
    </section>
</template>
