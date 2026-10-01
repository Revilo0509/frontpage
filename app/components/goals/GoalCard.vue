<script setup lang="ts">
let props = defineProps({
  num: String,
  title: String,
  desc: String,
});
</script>

<template>
  <div class="bg-default p-12">
    <div class="flex w-full justify-between">
      <!-- Decorative Blue Line -->
      <div class="bg-accent-700 h-0.5 w-8"></div>
      <span class="font-mono">{{ props.num }}</span>
    </div>
    <h1 class="text-2xl mb-6">{{ props.title }}</h1>
    <p class="max-w-[75%]">{{ props.desc }}</p>
  </div>
</template>
