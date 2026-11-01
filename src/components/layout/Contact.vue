<script setup>
import SectionHeader from '../UI/SectionHeader.vue';
import Input from '../UI/Input.vue';
import Button from '../UI/Button.vue';
import { computed } from 'vue';
import { t } from '@/i18n';
import { email, socials } from '@/data/contact';

const fields = [
  { id: 'email', type: 'email' },
  { id: 'subject', type: 'text' },
  { id: 'message', type: 'textarea', rows: 6 },
];
const inputs = computed(() => fields.map((f) => ({ ...f, ...t(`contact.fields.${f.id}`) })));

const contactInfo = computed(() => [
  { icon: 'mdi:email-outline', label: t('contact.emailLabel'), value: email, href: `mailto:${email}` },
  { icon: 'mdi:map-marker-outline', label: t('contact.locationLabel'), value: t('contact.location') },
]);
</script>

<template>
  <section id="contact" class="container-x pt-32">
    <SectionHeader :eyebrow="t('contact.eyebrow')" :title="t('contact.title')"
      :subtitle="t('contact.subtitle')" />

    <div class="glass grid overflow-hidden lg:grid-cols-[1fr_1.4fr]" data-aos="fade-up">
      <aside class="relative flex flex-col justify-between gap-10 overflow-hidden bg-gradient-to-br from-primary via-[#1b1477] to-accent-violet p-8 text-white md:p-10">
        <div class="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-secondary/30 blur-2xl"></div>
        <div class="relative">
          <h3 class="text-2xl font-extrabold">{{ t('contact.heading') }}</h3>
          <p class="mt-3 text-sm text-white/70">{{ t('contact.reply') }}</p>
        </div>
        <ul class="relative space-y-5">
          <li v-for="info in contactInfo" :key="info.icon" class="flex items-center gap-4">
            <span class="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-xl text-secondary">
              <Icon :icon="info.icon" />
            </span>
            <div class="min-w-0">
              <p class="text-xs uppercase tracking-wider text-white/60">{{ info.label }}</p>
              <a v-if="info.href" :href="info.href" class="break-all text-sm font-semibold transition hover:text-secondary sm:text-base">{{ info.value }}</a>
              <p v-else class="font-semibold">{{ info.value }}</p>
            </div>
          </li>
        </ul>
        <ul class="relative flex gap-3">
          <li v-for="s in socials" :key="s.label">
            <a :href="s.href" :aria-label="s.label" :title="s.label" target="_blank" rel="noopener noreferrer"
              class="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-lg transition hover:-translate-y-1 hover:bg-secondary hover:text-primary">
              <Icon :icon="s.icon" />
            </a>
          </li>
        </ul>
      </aside>

      <form class="space-y-6 p-8 md:p-10" @submit.prevent>
        <Input v-for="item in inputs" :key="item.id" v-bind="item" />
        <Button :label="t('contact.send')" type="submit" icon="mdi:send" />
      </form>
    </div>
  </section>
</template>
