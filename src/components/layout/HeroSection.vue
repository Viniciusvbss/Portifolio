<script setup>

</script>

<template>
    <section class="flex justify-center items-center dark:text-white min-h-screen mt-20 lg:mt-0">
        <header 
        class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#00c6cc] 
        via-[#785ae4] to-secondary opacity-30 dark:opacity-20 blur-[100px] left-10 top-0 hidden md:block"
        ></header>
        <header 
        class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#00c6cc] 
        via-[#785ae4] to-secondary opacity-30 dark:opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"
        ></header>
        <main class="absolute grid lg:grid-cols-2 grid-cols-1 items-center p-2 lg:p-8">
            <header class="text-center lg:text-left">
                <h1 class="md-6 text-4xl md:text-5xl lg:text-6xl font-bold">
                     👋 Hi, I'm <span class="text-secondary stroke-text text-stroke-primary dark:text-stroke-secondary">Vinicius</span>
                </h1>
            </header>
        </main>
    </section>
</template>