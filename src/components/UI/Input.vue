<template>
    <div>
        <label :for="id" class="mb-2 block text-sm font-semibold text-primary/80 dark:text-slate-300">
            {{ label }}
        </label>
        <component
            :is="type === 'textarea' ? 'textarea' : 'input'"
            :id="id"
            :name="id"
            :type="type === 'textarea' ? undefined : type"
            :rows="type === 'textarea' ? rows : undefined"
            :placeholder="placeholder"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            v-bind="$attrs"
            class="block w-full resize-none rounded-xl border border-primary/15 bg-white/70 px-4 py-3 text-sm text-primary
            placeholder:text-primary/40 outline-none transition focus:border-accent-violet focus:ring-4 focus:ring-accent-violet/20
            disabled:opacity-60
            dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-secondary dark:focus:ring-secondary/15"
        />
    </div>
</template>

<script setup>
// Extra attributes (required, maxlength, autocomplete, disabled...) go to the field itself.
defineOptions({ inheritAttrs: false })
defineProps({
    id: { type: String, required: true },
    label: { type: String, required: true },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    rows: { type: Number, default: 4 },
    modelValue: { type: String, default: '' },
})
defineEmits(['update:modelValue'])
</script>
