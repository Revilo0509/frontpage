<template>
  <section class="relative min-h-[calc(100dvh-var(--navbar-height))] overflow-hidden">
    <!-- Background -->
    <img src="/hero.webp" alt="" class="absolute inset-0 size-full object-cover object-top" />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-linear-to-r from-accent-950 via-accent-950/80 to-transparent" />

    <!-- Content -->
    <div
      class="relative z-10 flex min-h-[calc(100dvh-var(--navbar-height))] items-center px-[clamp(1.5rem,6vw,12rem)] py-16"
    >
      <div class="max-w-4xl">
        <span class="font-decorative text-accent-500 text-[clamp(1.25rem,2.5vw,2.25rem)]">
          — Lorem ipsum • dolor
        </span>

        <h1 class="mt-3 font-mono font-extrabold text-[clamp(3rem,7vw,9rem)] leading-[0.9]">
          Lorem<br />
          ipsum<br />
          dolor sit amet<br />
          <span class="text-accent-500">consectur</span>
        </h1>

        <p class="mt-6 max-w-2xl font-sans text-[clamp(1rem,1.5vw,1.5rem)] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua
        </p>

        <div class="mt-8 flex gap-4 max-sm:flex-col sm:gap-6">
          <UButton
            label="Lorem"
            size="xl"
            class="justify-center rounded-xl px-8 py-4 text-lg sm:px-10 sm:py-5 sm:text-xl"
          />

          <UButton
            label="Lorem ipsum"
            color="neutral"
            variant="outline"
            size="xl"
            class="justify-center rounded-xl px-8 py-4 text-lg sm:px-10 sm:py-5 sm:text-xl"
          />
        </div>
      </div>
    </div>
  </section>
</template>
