<script setup>
defineProps({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    tags: { type: Array, default: () => [] },
    liveLink: { type: String, default: null },
    codeLink: { type: String, default: null },
})
</script>

<template>
    <article class="glass group flex h-full flex-col overflow-hidden !rounded-2xl">
        <figure class="relative h-48 overflow-hidden">
            <img :src="image" :alt="title" loading="lazy"
                class="h-full w-full object-cover object-top transition duration-700 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"></div>
        </figure>
        <div class="flex flex-1 flex-col p-6">
            <h3 class="text-xl font-bold">{{ title }}</h3>
            <p class="mt-2 line-clamp-3 text-sm leading-relaxed text-primary/70 dark:text-slate-400">{{ description }}</p>
            <ul class="mt-4 flex flex-wrap gap-2">
                <li v-for="tag in tags" :key="tag" class="chip">#{{ tag }}</li>
            </ul>
            <div class="mt-auto flex items-center gap-4 pt-6 text-sm font-semibold">
                <a v-if="liveLink" :href="liveLink" target="_blank" rel="noopener"
                    class="inline-flex items-center gap-1.5 text-accent-violet transition hover:gap-2.5 dark:text-secondary">
                    <Icon icon="mdi:open-in-new" /> Live Demo
                </a>
                <a v-if="codeLink" :href="codeLink" target="_blank" rel="noopener"
                    class="inline-flex items-center gap-1.5 text-primary/70 transition hover:text-primary dark:text-slate-400 dark:hover:text-white">
                    <Icon icon="mdi:github" /> View Code
                </a>
            </div>
        </div>
    </article>
</template>
