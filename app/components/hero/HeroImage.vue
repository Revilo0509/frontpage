<template>
  <section class="relative">
    <!-- TODO: Reframe this picture -->
    <img src="/hero-image.webp" class="w-full max-h-full" />
    <!-- TODO: Create a lightmode variant -->
    <div
      class="absolute inset-0 bg-linear-to-r from-accent-950 to-neutral-500/50 overflow-x-clip"
    ></div>
    <slot></slot>
  </section>
</template>
