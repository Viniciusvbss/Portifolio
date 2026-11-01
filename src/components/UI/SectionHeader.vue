<script setup>
defineProps({
    title: { type: String, required: true },
    eyebrow: { type: String, default: '' },
    subtitle: { type: String, default: '' },
})
</script>

<template>
    <header class="mx-auto mb-14 max-w-2xl text-center" data-aos="fade-up">
        <p v-if="eyebrow"
            class="mb-3 inline-flex items-center gap-2 rounded-full border border-accent-violet/30 bg-accent-violet/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-accent-violet dark:text-secondary dark:border-secondary/30 dark:bg-secondary/10">
            <span class="h-1.5 w-1.5 rounded-full bg-current"></span>
            {{ eyebrow }}
        </p>
        <h2 class="text-4xl font-extrabold tracking-tight md:text-5xl">
            {{ title }}
        </h2>
        <div class="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-accent-cyan via-accent-violet to-secondary"></div>
        <p v-if="subtitle" class="mt-5 text-base text-primary/70 dark:text-slate-400">{{ subtitle }}</p>
    </header>
</template>
