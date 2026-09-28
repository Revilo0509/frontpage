<script setup lang="ts">
let props = defineProps({
  num: String,
  title: String,
  desc: String,
});
</script>

<template>
  <div
    class="outline rounded-2xl p-8 flex-1 hover:flex-4 duration-200 h-[50vh] ease-in-out outline-neutral-500 hover:outline-accent-700 group from-black/30 to-100% bg-linear-to-t"
  >
    <div class="flex flex-col justify-between size-full relative">
      <!-- Background title -->
      <div
        class="absolute size-full flex items-center justify-center text-center whitespace-nowrap text-[clamp(1rem,2vw,9rem)] text-neutral-500 font-extrabold text-clip group-hover:opacity-0 duration-200"
      >
        {{ props.title }}
      </div>

      <!-- Informative text -->
      <div class="flex justify-between">
        <span class="group-hover:text-accent-500 font-mono duration-200">{{ props.num }}</span>
        <div
          class="opacity-0 size-2 bg-accent-500 rounded-[50%] group-hover:opacity-100 duration-200"
        ></div>
      </div>
      <div class="opacity-0 group-hover:opacity-100">
        <h1 class="text-6xl font-bold font-mono pb-4">{{ props.title }}</h1>
        <p class="text-xl">{{ props.desc }}</p>
      </div>
    </div>
  </div>
</template>
