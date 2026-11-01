<script setup>
import SectionHeader from '../UI/SectionHeader.vue';
import ProjectCard from '../UI/ProjectCard.vue';

import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import project1 from '@/assets/images/project-1.PNG';
import project2 from '@/assets/images/project-2.PNG';
import project3 from '@/assets/images/project-3.PNG';
import project4 from '@/assets/images/project-4.PNG';

const navigationOptions = { prevEl: '.projects-prev', nextEl: '.projects-next' };
const breakpoints = {
  640: { slidesPerView: 2 },
  1024: { slidesPerView: 3 },
};

const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fugit sequi similique, asperiores quisquam nostrum, enim ut repellendus vitae earum consectetur recusandae.';
const projects = [project1, project2, project3, project4].map((image, i) => ({
  title: `Portfolio Website ${i + 1}`,
  description: lorem,
  image,
  tags: ['HTML', 'CSS', 'JavaScript'],
  liveLink: '/',
  codeLink: '/',
}));
</script>

<template>
  <section id="projects" class="container-x pt-32">
    <SectionHeader eyebrow="Portfolio" title="My Projects"
      subtitle="A selection of things I've built recently." />

    <div class="relative" data-aos="fade-up">
      <swiper :modules="[Navigation, Pagination, Autoplay]" :slidesPerView="1" :spaceBetween="24"
        :breakpoints="breakpoints" :navigation="navigationOptions" :pagination="{ clickable: true }"
        :autoplay="{ delay: 5000, pauseOnMouseEnter: true }" loop grabCursor class="projects-swiper !px-1 !pb-14 !pt-2">
        <swiper-slide v-for="project in projects" :key="project.title" class="!h-auto">
          <ProjectCard v-bind="project" />
        </swiper-slide>
      </swiper>

      <div class="mt-2 flex justify-center gap-3">
        <button aria-label="Previous project"
          class="projects-prev grid h-12 w-12 place-items-center rounded-full border border-primary/15 bg-white/60 text-2xl transition hover:bg-primary hover:text-white dark:border-white/15 dark:bg-white/5 dark:hover:bg-secondary dark:hover:text-primary">
          <Icon icon="line-md:arrow-left" />
        </button>
        <button aria-label="Next project"
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
