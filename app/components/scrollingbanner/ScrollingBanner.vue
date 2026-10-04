<script setup lang="ts">
import BannerLogos, { type ScrollingBannerItem } from "./BannerLogos.vue";

const props = defineProps<{
  items: ScrollingBannerItem[];
}>();
</script>

<template>
  <section class="p-4 overflow-x-clip flex group">
    <BannerLogos :items="props.items" />
    <BannerLogos aria-hidden :items="props.items" />
  </section>
</template>
