<script setup lang="ts">
const links = [
  {
    href: "#",
    title: "Lorem",
  },
  {
    href: "#",
    title: "Lorem",
  },
  {
    href: "#",
    title: "Lorem",
  },
  {
    href: "#",
    title: "Lorem",
  },
] as const;
</script>

<!-- TODO: Implement a selector underneath the navlinks. -->
<template>
  <nav class="contents">
    <ul class="flex gap-4">
      <li v-for="(item, index) in links" :key="index" class="hover:text-primary duration-150">
        <NuxtLink :to="item.href">
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
