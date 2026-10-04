<script setup lang="ts">
import Card from "./Card.vue";
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
  <SectionWrapper class="bg-neutral-50 dark:bg-neutral-950">
    <SectionHeader
      note="Vad vi erbjuder"
      title="Till dig som medlem"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    />

    <ul class="flex pt-16 flex-col lg:flex-row">
      <Card num="01" :title="title1" :description="description1" />
      <Card num="02" :title="title2" :description="description2" />
      <Card num="03" :title="title3" :description="description3" />
      <Card num="04" :title="title4" :description="description4" />
    </ul>
  </SectionWrapper>
</template>
