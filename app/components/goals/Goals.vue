<script setup lang="ts">
import GoalCard from "./GoalCard.vue";
</script>

<template>
  <section class="w-full h-fit py-48 flex items-center justify-center">
    <div class="w-[80%]">
      <span class="font-decorative text-accent-500 text-[clamp(1.25rem,2.5vw,2.25rem)] font-bold">
        — Vad vi erbjuder
      </span>

      <h1 class="mt-3 font-mono font-extrabold text-[clamp(2rem,3vw,6rem)] leading-[0.9]">
        Vårt mål
      </h1>

      <ul class="grid grid-cols-2 bg-neutral-700 gap-0.5 mt-16">
        <GoalCard
          num="01"
          title="Lorem ipsum"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
        <GoalCard
          num="02"
          title="Lorem ipsum"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
        <GoalCard
          num="03"
          title="Lorem ipsum"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
        <GoalCard
          num="04"
          title="Lorem ipsum"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
      </ul>
    </div>
  </section>
</template>
