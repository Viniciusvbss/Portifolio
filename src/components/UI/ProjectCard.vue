<script setup>
defineProps({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, default: null },
    icon: { type: String, default: 'mdi:code-tags' },
    tags: { type: Array, default: () => [] },
    liveLink: { type: String, default: null },
    codeLink: { type: String, default: null },
    liveLabel: { type: String, default: 'Live Demo' },
    codeLabel: { type: String, default: 'View Code' },
})
</script>

<template>
    <article class="glass group flex h-full flex-col overflow-hidden !rounded-2xl">
        <figure class="relative h-48 overflow-hidden">
            <img v-if="image" :src="image" :alt="title" loading="lazy"
                class="h-full w-full object-cover object-top transition duration-700 group-hover:scale-110">
            <div v-else aria-hidden="true"
                class="relative grid h-full w-full place-items-center overflow-hidden bg-gradient-to-br from-primary via-[#1b1477] to-accent-violet transition duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div class="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-secondary/30 blur-2xl"></div>
                <div class="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-accent-cyan/30 blur-2xl"></div>
                <span class="relative grid h-20 w-20 place-items-center rounded-3xl border border-white/20 bg-white/10 text-5xl text-secondary shadow-2xl backdrop-blur">
                    <Icon :icon="icon" />
                </span>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"></div>
        </figure>
        <div class="flex flex-1 flex-col p-6">
            <h3 class="text-xl font-bold">{{ title }}</h3>
            <p class="mt-2 line-clamp-4 text-sm leading-relaxed text-primary/70 dark:text-slate-400">{{ description }}</p>
            <ul class="mt-4 flex flex-wrap gap-2">
                <li v-for="tag in tags" :key="tag" class="chip">#{{ tag }}</li>
            </ul>
            <div class="mt-auto flex items-center gap-4 pt-6 text-sm font-semibold">
                <a v-if="liveLink" :href="liveLink" target="_blank" rel="noopener"
                    class="inline-flex items-center gap-1.5 text-accent-violet transition hover:gap-2.5 dark:text-secondary">
                    <Icon icon="mdi:open-in-new" /> {{ liveLabel }}
                </a>
                <a v-if="codeLink" :href="codeLink" target="_blank" rel="noopener"
                    class="inline-flex items-center gap-1.5 text-primary/70 transition hover:text-primary dark:text-slate-400 dark:hover:text-white">
                    <Icon icon="mdi:github" /> {{ codeLabel }}
                </a>
            </div>
        </div>
    </article>
</template>
