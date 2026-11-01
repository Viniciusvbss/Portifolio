<script setup>
import SectionHeader from '../UI/SectionHeader.vue';
import Input from '../UI/Input.vue';
import Button from '../UI/Button.vue';

const inputs = [
  { id: 'email', label: 'Your email', type: 'email', placeholder: 'email@example.com' },
  { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Let me know how I can help you' },
  { id: 'message', label: 'Message', type: 'textarea', placeholder: 'Leave a comment', rows: 6 },
];

const contactInfo = [
  { icon: 'mdi:email-outline', label: 'Email', value: 'hello@example.com' },
  { icon: 'mdi:map-marker-outline', label: 'Location', value: 'Brazil' },
];

const socials = [
  { icon: 'fa-brands:twitter', href: '', label: 'Twitter' },
  { icon: 'fa-brands:linkedin', href: '', label: 'LinkedIn' },
  { icon: 'fa-brands:github', href: '', label: 'GitHub' },
  { icon: 'fa-brands:instagram', href: '', label: 'Instagram' },
];
</script>

<template>
  <section id="contact" class="container-x pt-32">
    <SectionHeader eyebrow="Get in touch" title="Contact Me"
      subtitle="Have a project in mind? Let's talk about it." />

    <div class="glass grid overflow-hidden lg:grid-cols-[1fr_1.4fr]" data-aos="fade-up">
      <aside class="relative flex flex-col justify-between gap-10 overflow-hidden bg-gradient-to-br from-primary via-[#1b1477] to-accent-violet p-8 text-white md:p-10">
        <div class="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-secondary/30 blur-2xl"></div>
        <div class="relative">
          <h3 class="text-2xl font-extrabold">Let's build something great together</h3>
          <p class="mt-3 text-sm text-white/70">I usually reply within 24 hours.</p>
        </div>
        <ul class="relative space-y-5">
          <li v-for="info in contactInfo" :key="info.label" class="flex items-center gap-4">
            <span class="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-xl text-secondary">
              <Icon :icon="info.icon" />
            </span>
            <div>
              <p class="text-xs uppercase tracking-wider text-white/60">{{ info.label }}</p>
              <p class="font-semibold">{{ info.value }}</p>
            </div>
          </li>
        </ul>
        <ul class="relative flex gap-3">
          <li v-for="s in socials" :key="s.label">
            <a :href="s.href" :aria-label="s.label"
              class="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-lg transition hover:-translate-y-1 hover:bg-secondary hover:text-primary">
              <Icon :icon="s.icon" />
            </a>
          </li>
        </ul>
      </aside>

      <form class="space-y-6 p-8 md:p-10" @submit.prevent>
        <Input v-for="item in inputs" :key="item.id" v-bind="item" />
        <Button label="Send message" type="submit" icon="mdi:send" />
      </form>
    </div>
  </section>
</template>
