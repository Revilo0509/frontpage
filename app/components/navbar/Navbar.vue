<script setup lang="ts">
import Logotype from "../logotype/Logotype.vue";
import BigButton from "./BigButtons.vue";
import NavButtons from "./NavButtons.vue";
import { useTemplateRef, onMounted } from "vue";

const navbar = useTemplateRef<HTMLElement>("navbar");

onMounted(() => {
  document.documentElement.style.setProperty(
    "--navbar-height",
    `${navbar.value?.clientHeight ?? 0}px`,
  );
});
</script>

<template>
  <header ref="navbar" class="relative w-dvw bg-default p-4 flex justify-between items-center">
    <Logotype :title="true" />

    <div class="absolute left-1/2 -translate-x-1/2">
      <NavButtons />
    </div>

    <BigButton />
  </header>
</template>
