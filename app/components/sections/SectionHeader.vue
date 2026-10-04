<script setup lang="ts">
defineProps<{
  note?: string;
  title: string;
  description?: string;
}>();
</script>

<template>
  <header>
    <span
      v-if="note"
      class="font-decorative text-accent-500 text-[clamp(1.25rem,2.5vw,2.25rem)] font-bold"
    >
      — {{ note }}
    </span>

    <h1 class="mt-3 font-mono font-extrabold text-[clamp(2rem,3vw,6rem)] leading-[0.9]">
      {{ title }}
    </h1>

    <p
      v-if="description"
      class="mt-6 max-w-2xl font-sans text-[clamp(1rem,1.5vw,1.5rem)] leading-relaxed"
    >
      {{ description }}
    </p>
  </header>
</template>
