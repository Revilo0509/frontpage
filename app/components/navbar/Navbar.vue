<script setup lang="ts">
import Logotype from "../logotype/Logotype.vue";
import BigButton from "./BigButtons.vue";
import NavButtons from "./NavButtons.vue";
</script>

<template>
  <header class="relative w-dvw bg-default p-4 flex justify-between items-center">
    <Logotype :title="true" />

    <div class="absolute left-1/2 -translate-x-1/2">
      <NavButtons />
    </div>

    <BigButton />
  </header>
</template>
