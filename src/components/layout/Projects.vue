<script setup>
import SectionHeader from '../UI/SectionHeader.vue';
import ProjectCard from '../UI/ProjectCard.vue';

import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { computed } from 'vue';
import { t, locale } from '@/i18n';
import { projects as projectData } from '@/data/projects';

const navigationOptions = { prevEl: '.projects-prev', nextEl: '.projects-next' };
const breakpoints = {
  640: { slidesPerView: 2 },
  1024: { slidesPerView: 3 },
};

const tr = (value) => (typeof value === 'string' ? value : value[locale.value]);

const projects = computed(() => projectData.map((p) => ({
  ...p,
  title: tr(p.title),
  description: tr(p.description),
  tags: p.tags.map(tr),
})));
</script>

<template>
  <section id="projects" class="container-x pt-32">
    <SectionHeader :eyebrow="t('projects.eyebrow')" :title="t('projects.title')"
      :subtitle="t('projects.subtitle')" />

    <div class="relative" data-aos="fade-up">
      <swiper :modules="[Navigation, Pagination, Autoplay]" :slidesPerView="1" :spaceBetween="24"
        :breakpoints="breakpoints" :navigation="navigationOptions" :pagination="{ clickable: true }"
        :autoplay="{ delay: 5000, pauseOnMouseEnter: true }" rewind grabCursor class="projects-swiper !px-1 !pb-14 !pt-2">
        <swiper-slide v-for="project in projects" :key="project.id" class="!h-auto">
          <ProjectCard v-bind="project" :liveLabel="t('projects.live')" :codeLabel="t('projects.code')" />
        </swiper-slide>
      </swiper>

      <div class="mt-2 flex justify-center gap-3">
        <button :aria-label="t('projects.prev')"
          class="projects-prev grid h-12 w-12 place-items-center rounded-full border border-primary/15 bg-white/60 text-2xl transition hover:bg-primary hover:text-white dark:border-white/15 dark:bg-white/5 dark:hover:bg-secondary dark:hover:text-primary">
          <Icon icon="line-md:arrow-left" />
        </button>
        <button :aria-label="t('projects.next')"
          class="projects-next grid h-12 w-12 place-items-center rounded-full border border-primary/15 bg-white/60 text-2xl transition hover:bg-primary hover:text-white dark:border-white/15 dark:bg-white/5 dark:hover:bg-secondary dark:hover:text-primary">
          <Icon icon="line-md:arrow-right" />
        </button>
      </div>
    </div>
  </section>
</template>

<style>
.projects-swiper .swiper-pagination-bullet {
  background: #785ae4;
  opacity: 0.35;
  transition: all 0.3s;
}
.projects-swiper .swiper-pagination-bullet-active {
  opacity: 1;
  width: 24px;
  border-radius: 9999px;
}
.dark .projects-swiper .swiper-pagination-bullet {
  background: #FFEB00;
}
</style>
