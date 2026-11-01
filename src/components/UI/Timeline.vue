<script setup>
defineProps({
    title: { type: String, required: true },
    icon: { type: String, required: true },
    items: { type: Array, required: true },
})
</script>

<template>
    <div class="glass p-8">
        <header class="mb-8 flex items-center gap-3">
            <span class="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-2xl text-primary">
                <Icon :icon="icon" />
            </span>
            <h3 class="text-2xl font-extrabold">{{ title }}</h3>
        </header>
        <ol class="relative ml-3 space-y-8 border-l-2 border-dashed border-primary/15 dark:border-white/15">
            <li v-for="(item, index) in items" :key="index" class="relative pl-8">
                <span class="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-4 border-mist bg-accent-violet dark:border-ink dark:bg-secondary"></span>
                <span class="chip">{{ item.duration }}</span>
                <h4 class="mt-3 text-lg font-bold">{{ item.title }}</h4>
                <p class="text-sm font-medium text-primary/65 dark:text-slate-400">{{ item.subtitle }}</p>
                <p v-if="item.description" class="mt-2 text-sm leading-relaxed text-primary/70 dark:text-slate-300/80">
                    {{ item.description }}
                </p>
            </li>
        </ol>
        <slot />
    </div>
</template>
