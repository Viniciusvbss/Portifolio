<script setup>
import Button from '../UI/Button.vue';
import { t } from '@/i18n';
import { socials } from '@/data/contact';
</script>

<template>
    <section class="container-x flex min-h-screen items-center pb-16 pt-32 lg:pt-24">
        <div class="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
            <div class="text-center lg:text-left" data-aos="fade-right">
                <span class="glass !rounded-full inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold">
                    <span class="relative flex h-2.5 w-2.5">
                        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                        <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                    </span>
                    {{ t('hero.badge') }}
                </span>

                <h1 class="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                    <span class="inline-block origin-[70%_70%] animate-[wave_2.5s_ease-in-out_infinite]">👋</span>
                    {{ t('hero.greeting') }} <span class="gradient-text animate-shimmer whitespace-nowrap">Vinicius</span>
                </h1>
                <p class="mt-4 text-xl font-semibold text-primary/80 md:text-2xl dark:text-slate-300">
                    {{ t('hero.role') }}
                </p>
                <p class="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary/65 lg:mx-0 dark:text-slate-400">
                    {{ t('hero.description') }}
                </p>

                <div class="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                    <Button :label="t('hero.hire')" href="#contact" icon="mdi:arrow-right" />
                    <a href=""
                        class="inline-flex h-14 items-center gap-2 rounded-full border-2 border-primary/15 bg-white/50 px-7 text-lg font-semibold backdrop-blur transition hover:border-primary hover:bg-white dark:border-white/15 dark:bg-white/5 dark:hover:border-secondary dark:hover:text-secondary">
                        <Icon icon="line-md:download-loop" class="text-2xl" />
                        {{ t('hero.resume') }}
                    </a>
                </div>

                <ul class="mt-10 flex items-center justify-center gap-3 lg:justify-start">
                    <li v-for="s in socials" :key="s.label">
                        <a :href="s.href" :aria-label="s.label" :title="s.label" target="_blank" rel="noopener noreferrer"
                            class="grid h-11 w-11 place-items-center rounded-full border border-primary/10 bg-white/50 text-xl transition hover:-translate-y-1 hover:border-accent-violet hover:text-accent-violet dark:border-white/10 dark:bg-white/5 dark:hover:border-secondary dark:hover:text-secondary">
                            <Icon :icon="s.icon" />
                        </a>
                    </li>
                </ul>
            </div>

            <div class="relative mx-auto w-full max-w-sm lg:max-w-md" data-aos="fade-left">
                <div class="absolute -inset-6 -z-10 rounded-full bg-gradient-to-tr from-accent-cyan via-accent-violet to-secondary opacity-40 blur-3xl dark:opacity-30"></div>
                <div class="animate-float">
                    <div class="relative rounded-[2.5rem] bg-gradient-to-tr from-accent-cyan via-accent-violet to-secondary p-[3px] shadow-2xl">
                        <div class="overflow-hidden rounded-[calc(2.5rem-3px)] bg-ink">
                            <img src="@/assets/images/eu.jpeg" alt="Vinicius" class="aspect-[4/5] w-full object-cover"
                                style="object-position: 60% 20%;">
                        </div>
                    </div>
                    <div class="glass absolute -bottom-6 -left-4 flex items-center gap-3 !rounded-2xl px-4 py-3 sm:-left-10">
                        <span class="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-xl text-primary">
                            <Icon icon="mdi:code-tags" />
                        </span>
                        <div class="text-left">
                            <p class="text-lg font-extrabold leading-none">{{ t('hero.experienceValue') }}</p>
                            <p class="text-xs text-primary/60 dark:text-slate-400">{{ t('hero.experienceLabel') }}</p>
                        </div>
                    </div>
                    <div class="glass absolute -right-3 top-8 flex items-center gap-2 !rounded-2xl px-4 py-2.5 text-sm font-bold sm:-right-8">
                        <Icon icon="logos:vue" class="text-xl" /> Vue.js
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes wave {
    0%, 60%, 100% { transform: rotate(0deg); }
    10%, 30% { transform: rotate(14deg); }
    20% { transform: rotate(-8deg); }
    40% { transform: rotate(-4deg); }
    50% { transform: rotate(10deg); }
}
</style>
