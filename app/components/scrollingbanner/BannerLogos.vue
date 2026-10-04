<script setup lang="ts">
export type ScrollingBannerItem = {
  logo: string;
  href: string;
  name: string;
};

const props = defineProps<{
  items: ScrollingBannerItem[];
}>();
</script>

<template>
  <div
    class="flex-none flex items-center no-scrollbar animate-move group-hover:[animation-play-state:paused]"
  >
    <ULink
      v-for="item in props.items"
      :key="item.name"
      class="flex gap-4 items-center pr-24 hover:scale-110 duration-75"
      :href="item.href"
    >
      <img :src="item.logo" :alt="item.name" class="size-12" />
      <span class="text-xl">{{ item.name }}</span>
    </ULink>
  </div>
</template>
