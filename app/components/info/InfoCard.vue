<script setup lang="ts">
let props = defineProps({
  num: String,
  title: String,
  desc: String,
});
</script>

<template>
  <div
    class="outline rounded-2xl p-8 flex-1 hover:flex-2 duration-200 h-[50vh] ease-in-out outline-accent-700 group"
  >
    <div class="flex flex-col">
      <span>{{ props.num }}</span>
      <div class="invisible group-hover:visible duration-200 ease-in-out">
        <h1>{{ props.title }}</h1>
        <p>{{ props.desc }}</p>
      </div>
    </div>
  </div>
</template>
