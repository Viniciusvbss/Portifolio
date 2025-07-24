<script setup>
import SectionHeader from '../UI/SectionHeader.vue';
import ProjectCard from '../UI/ProjectCard.vue';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
// Define  navigation options 
const navigationOptions = {
  prevEl: '.swiper-prev',
  nextEl: '.swiper-next'
}

const projects = ref([
  {
    title: 'Portifplio wbsite',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fugit sequi similique, asperiores quisquam nostrum, enim ut repellendus vitae earum consectetur recusandae, esse eligendi officia. Dolorum error cum incidunt consectetur!',
    image:'/project-1.PNG',
    tags:['HMTL','CSS','Javascript'],
    liveLink:'/',
    codeLink:"/"
  },
  {
    title: 'Portifplio wbsite',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fugit sequi similique, asperiores quisquam nostrum, enim ut repellendus vitae earum consectetur recusandae, esse eligendi officia. Dolorum error cum incidunt consectetur!',
    image:'/project-2.PNG',
    tags:['HMTL','CSS','Javascript'],
    liveLink:'/',
    codeLink:"/"
  },
  {
    title: 'Portifplio wbsite',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fugit sequi similique, asperiores quisquam nostrum, enim ut repellendus vitae earum consectetur recusandae, esse eligendi officia. Dolorum error cum incidunt consectetur!',
    image:'/project-3.PNG',
    tags:['HMTL','CSS','Javascript'],
    liveLink:'/',
    codeLink:"/"
  },
  {
    title: 'Portifplio wbsite',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fugit sequi similique, asperiores quisquam nostrum, enim ut repellendus vitae earum consectetur recusandae, esse eligendi officia. Dolorum error cum incidunt consectetur!',
    image:'/project-4.PNG',
    tags:['HMTL','CSS','Javascript'],
    liveLink:'/',
    codeLink:"/"
  }
  
])
</script>

<template>
  <section id="project" class="relative w-11/12 px-16 pb-8 mx-auto">
    <SectionHeader title="My Projects" />
    <!-- Custom navigation Buttons -->
    <button
      class="swiper-prev absolute top-2/3 left-4 transform -translate-y-1/2 z-10 text-white dark:bg-secondary bg-primary p-4 rounded-full">
      <Icon icon="line-md:arrow-left" class="font-bold text-3xl" />
    </button>
    <button
      class="swiper-next absolute top-2/3 right-4 transform -translate-y-1/2 z-10 text-white dark:bg-secondary bg-primary p-4 rounded-full">
      <Icon icon="line-md:arrow-right" class="font-bold text-3xl" />
    </button>
    <!-- Swiper Component -->
    <swiper :effect="'coverflow'" grabCursor centeredSlides :slidesPerView="'auto'" :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }" :navigation="navigationOptions" loop pagination :modules="[EffectCoverflow, Navigation]"
      class="max-w-full mt-32">
      <Swiper-slide class="max-w-[300px]" v-for="(project,index) in projects" :key="index">
      <ProjectCard
        :title="project.title"
        :description="project.description"
        :image="'src/assets/images'+project.image"
        :tags="project.tags"
        :liveLink="project.liveLink"
        :codeLink="project.codeLink"
       />
      </Swiper-slide>
    </swiper>
  </section>
</template>
<style>
.swiper-button-prev,
.swiper-button-next {
  cursor: pointer;
}
.swiper-slide{
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
