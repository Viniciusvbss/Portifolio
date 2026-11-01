<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <footer class="mt-32 border-t border-primary/10 dark:border-white/10">
    <div class="container-x flex flex-col items-center justify-between gap-4 py-8 text-sm sm:flex-row">
      <a href="#" class="text-xl font-extrabold tracking-tight">
        VBSS<span class="text-accent-violet dark:text-secondary">.</span>
      </a>
      <p class="text-primary/60 dark:text-slate-400">© {{ year }} Vinicius. All rights reserved.</p>
    </div>
  </footer>
</template>
