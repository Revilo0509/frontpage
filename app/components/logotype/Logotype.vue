<script setup>
defineProps({
  title: Boolean,
});
</script>

<template>
  <a class="flex items-center gap-2" href="/">
    <img src="https://s3.zyner.org/brand/logo.svg" class="size-10 rounded-lg" />
    <h1 v-if="title" class="font-bold text-xl">Zyner</h1>
  </a>
</template>
