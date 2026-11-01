<script setup>
import SectionHeader from '../UI/SectionHeader.vue';
import Input from '../UI/Input.vue';
import Button from '../UI/Button.vue';
import { computed, reactive, ref } from 'vue';
import { t } from '@/i18n';
import { email, socials } from '@/data/contact';

const fields = [
  { id: 'name', type: 'text', autocomplete: 'name', maxlength: 100 },
  { id: 'email', type: 'email', autocomplete: 'email', maxlength: 150 },
  { id: 'subject', type: 'text', maxlength: 150 },
  { id: 'message', type: 'textarea', rows: 6, maxlength: 5000 },
];
const inputs = computed(() => fields.map((f) => ({ ...f, ...t(`contact.fields.${f.id}`) })));

// Web3Forms key (.env → VITE_WEB3FORMS_KEY). Without it, the form opens the visitor's email app.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const form = reactive({ name: '', email: '', subject: '', message: '' });
const botcheck = ref(false); // honeypot: hidden from people, bots tend to tick it
const status = ref('idle'); // idle | sending | success | error | mailto

function openMailto() {
  const subject = `${t('contact.subjectPrefix')}: ${form.subject}`;
  const body = `${form.message}\n\n— ${form.name} (${form.email})`;
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  status.value = 'mailto';
}

async function submit() {
  if (status.value === 'sending' || botcheck.value) return;
  if (!WEB3FORMS_KEY) return openMailto();

  status.value = 'sending';
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `${t('contact.subjectPrefix')}: ${form.subject}`,
        from_name: form.name,
        name: form.name,
        email: form.email,
        replyto: form.email,
        message: form.message,
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.success) throw new Error(data.message || `HTTP ${res.status}`);
    status.value = 'success';
    Object.assign(form, { name: '', email: '', subject: '', message: '' });
  } catch (err) {
    console.error('Contact form:', err);
    status.value = 'error';
  }
}

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

      <form class="space-y-6 p-8 md:p-10" @submit.prevent="submit">
        <div class="grid gap-6 sm:grid-cols-2">
          <Input v-for="item in inputs.slice(0, 2)" :key="item.id" v-bind="item" v-model="form[item.id]"
            required :disabled="status === 'sending'" />
        </div>
        <Input v-for="item in inputs.slice(2)" :key="item.id" v-bind="item" v-model="form[item.id]"
          required :disabled="status === 'sending'" />

        <!-- Honeypot anti-spam: invisible to people -->
        <input v-model="botcheck" type="checkbox" name="botcheck" tabindex="-1" autocomplete="off"
          class="hidden" aria-hidden="true" />

        <div class="flex flex-wrap items-center gap-4">
          <Button :label="status === 'sending' ? t('contact.sending') : t('contact.send')" type="submit"
            :icon="status === 'sending' ? 'line-md:loading-loop' : 'mdi:send'" :disabled="status === 'sending'" />
        </div>

        <div aria-live="polite">
          <p v-if="status === 'success'"
            class="flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-700 dark:text-emerald-300">
            <Icon icon="mdi:check-circle" class="mt-0.5 shrink-0 text-lg" />
            {{ t('contact.success') }}
          </p>
          <p v-else-if="status === 'error'"
            class="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-700 dark:text-red-300">
            <Icon icon="mdi:alert-circle" class="mt-0.5 shrink-0 text-lg" />
            <span>{{ t('contact.error') }} <a :href="`mailto:${email}`" class="break-all underline">{{ email }}</a>.</span>
          </p>
          <p v-else-if="status === 'mailto'"
            class="flex items-start gap-3 rounded-xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm font-medium dark:border-white/10 dark:bg-white/5">
            <Icon icon="mdi:email-fast-outline" class="mt-0.5 shrink-0 text-lg" />
            {{ t('contact.mailtoNote') }}
          </p>
        </div>
      </form>
    </div>
  </section>
</template>
