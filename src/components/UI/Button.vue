<script setup>
defineProps({
    label: { type: String, default: 'Button' },
    href: { type: String, default: null },
    type: { type: String, default: 'button' },
    icon: { type: String, default: null },
})
</script>

<template>
    <component :is="href ? 'a' : 'button'" :href="href" :type="href ? undefined : type"
        class="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full p-[2px] font-semibold
        shadow-[0_10px_30px_-10px_rgba(120,90,228,0.7)] transition duration-300 hover:scale-[1.03] hover:shadow-[0_14px_36px_-10px_rgba(120,90,228,0.9)]
        focus:outline-none focus-visible:ring-4 focus-visible:ring-accent-violet/40
        disabled:cursor-wait disabled:opacity-70 disabled:hover:scale-100">
        <span aria-hidden="true"
            class="absolute inset-[-100%] animate-spin-slow bg-[conic-gradient(from_90deg,#00c6cc,#785ae4,#FFEB00,#00c6cc)]"></span>
        <span class="relative inline-flex h-full w-full items-center justify-center gap-2 rounded-full bg-secondary px-8 text-lg text-primary">
            {{ label }}
            <Icon v-if="icon" :icon="icon" class="text-xl transition-transform duration-300 group-hover:translate-x-1" />
        </span>
    </component>
</template>
