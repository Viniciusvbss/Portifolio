<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const isMenuOpen = ref(false);
const Menu = ref([
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Why Me', href: '#whyme' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]);

const scrollToSection = (href) => {
    isMenuOpen.value = false;
    const section = document.querySelector(href)
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

</script>

<template>
    <header>
        <div class="flex justify-between items-center p-8 lg:px-12 relative z-20">
            <div class="text-3xl font-bold dark:text-white">Logo</div>
            <!-- mobile menu -->
            <div class="md:hidden z-50">
                <button class="block text-white dark:text-white" @click="isMenuOpen = !isMenuOpen">
                    <span v-if="isMenuOpen" class="text-3xl">
                        <Icon icon="material-symbols:close" />
                    </span>
                    <span v-else class="text-3xl">
                        <Icon icon="material-symbols:menu" />
                    </span>
                </button>
            </div>
            <!-- Navbar link -->
            <nav :class="[`fixed inset-0 z-40 flex flex-col justify-center items-center bg-primary md:relative
                md:bg-transparent md:flex md:justify-between md:flex-row ${isMenuOpen ? 'block' : 'hidden'
                }
                `,
            ]">

                <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
                    <li v-for="item in Menu" :key="item.name">
                        <a :href="item.href" class="transition ease-linear md:text-lg lg:text-xl font-bold
                        text-white md:text-primary hover:text-secondary dark:text-white dark:hover:text-secondary"
                            @click="scrollToSection(item.href)">
                            {{ item.name }}
                        </a>
                    </li>
                </ul>

            </nav>

        </div>
    </header>
</template>