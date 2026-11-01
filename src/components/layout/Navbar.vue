<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useI18n } from '@/i18n';

const { t, locale, toggleLocale } = useI18n();

const isMenuOpen = ref(false);
const isScrolled = ref(false);
const hrefs = ['#services', '#skills', '#whyme', '#projects', '#contact'];
const Menu = computed(() => t('nav.menu').map((name, i) => ({ name, href: hrefs[i] })));

const readTheme = () => {
    try { return localStorage.getItem('theme'); } catch { return null; }
};
const isDarkMode = ref(document.documentElement.classList.contains('dark') || readTheme() === 'dark');

const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.classList.toggle('dark', isDarkMode.value);
    try { localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light'); } catch { /* ignore */ }
};

const onScroll = () => { isScrolled.value = window.scrollY > 20; };
onMounted(() => { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); });
onUnmounted(() => window.removeEventListener('scroll', onScroll));
</script>

<template>
    <header class="fixed inset-x-0 top-0 z-50 transition-all duration-300" :class="isScrolled ? 'py-3' : 'py-5'">
        <div class="container-x">
            <div class="flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-6"
                :class="isScrolled ? 'glass !rounded-2xl' : 'border border-transparent'">
                <a href="#" class="flex items-center gap-2 text-2xl font-extrabold tracking-tight">
                    <span class="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent-cyan via-accent-violet to-secondary text-sm text-white shadow-lg">V</span>
                    <span>VBSS<span class="text-accent-violet dark:text-secondary">.</span></span>
                </a>

                <nav class="hidden md:block">
                    <ul class="flex items-center gap-1">
                        <li v-for="item in Menu" :key="item.href">
                            <a :href="item.href"
                                class="rounded-full px-4 py-2 text-sm font-semibold text-primary/75 transition hover:bg-primary/5 hover:text-primary dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white">
                                {{ item.name }}
                            </a>
                        </li>
                    </ul>
                </nav>

                <div class="flex items-center gap-2">
                    <button @click="toggleLocale" :aria-label="t('nav.language')" :title="t('nav.language')"
                        class="relative flex h-10 items-center rounded-full border border-primary/10 bg-white/60 p-1 text-xs font-bold transition hover:scale-105 dark:border-white/10 dark:bg-white/5">
                        <span aria-hidden="true"
                            class="absolute top-1 h-8 w-9 rounded-full bg-primary shadow transition-transform duration-300 dark:bg-secondary"
                            :class="locale === 'pt' ? 'translate-x-0' : 'translate-x-9'"></span>
                        <span class="relative z-10 w-9 text-center transition-colors"
                            :class="locale === 'pt' ? 'text-white dark:text-primary' : 'text-primary/60 dark:text-slate-400'">PT</span>
                        <span class="relative z-10 w-9 text-center transition-colors"
                            :class="locale === 'en' ? 'text-white dark:text-primary' : 'text-primary/60 dark:text-slate-400'">EN</span>
                    </button>
                    <button @click="toggleDarkMode" :aria-label="isDarkMode ? t('nav.lightMode') : t('nav.darkMode')"
                        class="grid h-10 w-10 place-items-center rounded-full border border-primary/10 bg-white/60 text-xl transition hover:scale-110 dark:border-white/10 dark:bg-white/5">
                        <Icon v-if="!isDarkMode" icon="line-md:moon-filled" class="text-primary" />
                        <Icon v-else icon="line-md:sunny-outline" class="text-secondary" />
                    </button>
                    <button class="grid h-10 w-10 place-items-center rounded-full border border-primary/10 bg-white/60 text-2xl md:hidden dark:border-white/10 dark:bg-white/5"
                        :aria-expanded="isMenuOpen" :aria-label="t('nav.toggleMenu')" @click="isMenuOpen = !isMenuOpen">
                        <Icon :icon="isMenuOpen ? 'material-symbols:close' : 'material-symbols:menu'" />
                    </button>
                </div>
            </div>

            <!-- Mobile menu -->
            <transition enter-from-class="opacity-0 -translate-y-2" enter-active-class="transition duration-200"
                leave-to-class="opacity-0 -translate-y-2" leave-active-class="transition duration-150">
                <nav v-if="isMenuOpen" class="glass mt-3 p-3 md:hidden">
                    <ul class="flex flex-col">
                        <li v-for="item in Menu" :key="item.href">
                            <a :href="item.href" @click="isMenuOpen = false"
                                class="block rounded-xl px-4 py-3 font-semibold transition hover:bg-primary/5 dark:hover:bg-white/10">
                                {{ item.name }}
                            </a>
                        </li>
                    </ul>
                </nav>
            </transition>
        </div>
    </header>
</template>
