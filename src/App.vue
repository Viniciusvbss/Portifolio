<script setup>
  import { defineAsyncComponent } from 'vue';
  const Navbar = defineAsyncComponent(()=>import('@/components/layout/Navbar.vue'));
  const HeroSection = defineAsyncComponent(()=>import('@/components/layout/HeroSection.vue'));
  const Counter = defineAsyncComponent(()=>import('@/components/layout/Counter.vue'));
  const Services = defineAsyncComponent(()=>import('@/components/layout/Services.vue'));
</script>

<template>
 <div class="bg-[#D4EBF8] dark:bg-[#080326] min-h-screen">
  <Navbar />
  <HeroSection />
  <Counter />
  <Services />
 </div>
</template>


