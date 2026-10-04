<script setup lang="ts">
import GoalCard from "./Card.vue";
import SectionHeader from "../sections/SectionHeader.vue";
import SectionWrapper from "../sections/SectionWrapper.vue";

defineProps<{
  title1: string;
  description1: string;
  title2: string;
  description2: string;
  title3: string;
  description3: string;
  title4: string;
  description4: string;
}>();
</script>

<template>
  <SectionWrapper>
    <SectionHeader note="Vad vi erbjuder" title="Vårt mål" />

    <ul class="grid grid-cols-2 bg-neutral-700 gap-0.5 mt-16">
      <GoalCard num="01" :title="title1" :description="description1" />
      <GoalCard num="02" :title="title2" :description="description2" />
      <GoalCard num="03" :title="title3" :description="description3" />
      <GoalCard num="04" :title="title4" :description="description4" />
    </ul>
  </SectionWrapper>
</template>
