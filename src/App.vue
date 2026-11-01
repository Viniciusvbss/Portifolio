<script setup>
import { defineAsyncComponent } from 'vue';
const Navbar = defineAsyncComponent(() => import('@/components/layout/Navbar.vue'));
const HeroSection = defineAsyncComponent(() => import('@/components/layout/HeroSection.vue'));
const Counter = defineAsyncComponent(() => import('@/components/layout/Counter.vue'));
const Services = defineAsyncComponent(() => import('@/components/layout/Services.vue'));
const Skills = defineAsyncComponent(() => import('@/components/layout/Skills.vue'));
const Whyme = defineAsyncComponent(() => import('@/components/layout/Whyme.vue'));
const Projects = defineAsyncComponent(() => import('@/components/layout/Projects.vue'));
const Contact = defineAsyncComponent(() => import('@/components/layout/Contact.vue'));
const Footer = defineAsyncComponent(() => import('@/components/layout/Footer.vue'));
const BackToTop = defineAsyncComponent(() => import('@/components/layout/BackToTop.vue'));

import LoadingSpinner from '@/components/layout/LoadingSpinner.vue';
</script>

<template>
  <div class="relative min-h-screen overflow-x-clip">
    <!-- Background decoration -->
    <div aria-hidden="true" class="pointer-events-none fixed inset-0 -z-20">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,9,87,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,9,87,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"></div>
      <div class="blob -top-40 -left-40 w-[36rem] bg-accent-cyan"></div>
      <div class="blob top-1/3 -right-40 w-[32rem] bg-accent-violet"></div>
      <div class="blob bottom-0 left-1/4 w-[28rem] bg-secondary !opacity-20 dark:!opacity-10"></div>
    </div>

    <Suspense>
      <template #default>
        <div>
          <Navbar />
          <main>
            <HeroSection />
            <Counter />
            <Services />
            <Skills />
            <Whyme />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </div>
      </template>
      <template #fallback>
        <LoadingSpinner />
      </template>
    </Suspense>
  </div>
</template>
