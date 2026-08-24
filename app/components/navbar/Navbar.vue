<script setup lang="ts">
import Logotype from "../logotype/Logotype.vue";
import BigButton from "./BigButtons.vue";
import NavButtons from "./NavButtons.vue";
</script>

<template>
  <div class="w-dvw bg-default p-4 flex justify-between items-center">
    <Logotype :title="true" />
    <NavButtons />
    <BigButton />
  </div>
</template>
