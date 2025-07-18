<script setup>
import SectionHeader from '../UI/SectionHeader.vue';
import Education from '../layout/Education.vue';
import Experience from '../layout/Experience.vue';


</script>

<template>
   <section id="whyme" class="mt-32">
        <SectionHeader title="Why me" />
        <div class="grid grid-cols-1 lg:grid-cols-2 p-12 overflow-hidden">
            <Education data-aos="fade-left"/>
            <Experience data-aos="fade-right" />
        </div>
   </section>
</template>