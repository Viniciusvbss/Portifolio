<template>
  <transition enter-from-class="opacity-0 translate-y-4" enter-active-class="transition duration-300"
    leave-to-class="opacity-0 translate-y-4" leave-active-class="transition duration-300">
    <button v-if="isVisible" @click="scrollToTop" aria-label="Back to top"
      class="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-accent-cyan via-accent-violet to-primary text-2xl text-white shadow-lg shadow-accent-violet/40 transition hover:-translate-y-1 dark:to-secondary dark:text-primary">
      <Icon icon="line-md:arrow-up" />
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);
const handleScroll = () => { isVisible.value = window.scrollY > 400; };
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>
