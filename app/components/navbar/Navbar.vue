<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import PromotionButtons from "./PromotionButtons.vue";

const links = computed<NavigationMenuItem[]>(() => [
  { to: "#", label: "Lorem" },
  { to: "#", label: "Lorem" },
  { to: "#", label: "Lorem" },
  { to: "#", label: "Lorem" },
]);
</script>

<template>
  <UHeader mode="slideover" class="p-8">
    <template #left>
      <Logotype :title="true" />
    </template>

    <UNavigationMenu :items="links" />

    <template #right>
      <UColorModeButton />
      <div class="max-lg:hidden flex gap-3">
        <PromotionButtons />
      </div>
    </template>

    <template #body>
      <UNavigationMenu :items="links" orientation="vertical" />
      <div class="lg:hidden flex flex-col py-4 gap-2 *:w-full">
        <PromotionButtons />
      </div>
    </template>
  </UHeader>
</template>
