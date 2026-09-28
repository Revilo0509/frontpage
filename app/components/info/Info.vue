<template>
  <section class="w-full h-screen flex items-center justify-center">
    <div class="w-[80%]">
      <span class="font-decorative text-accent-500 text-[clamp(1.25rem,2.5vw,2.25rem)]">
        — Vad vi erbjuder
      </span>

      <h1 class="mt-3 font-mono font-extrabold text-[clamp(2rem,3vw,6rem)] leading-[0.9]">
        Till dig som medlem
      </h1>

      <p class="mt-6 max-w-2xl font-sans text-[clamp(1rem,1.5vw,1.5rem)] leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua
      </p>

      <ul class="flex pt-16">
        <InfoCard
          num="01"
          title="Lorem"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <InfoCard
          num="02"
          title="Lorem"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <InfoCard
          num="03"
          title="Lorem"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <InfoCard
          num="04"
          title="Lorem"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </ul>
    </div>
  </section>
</template>

<!--

    <div
      class="relative z-10 flex min-h-[calc(100dvh-var(--navbar-height))] items-center px-[clamp(1.5rem,6vw,12rem)] py-16"
    >
      <div>
        <span class="font-decorative text-accent-500 text-[clamp(1.25rem,2.5vw,2.25rem)]">
          — Vad vi erbjuder
        </span>

        <h1 class="mt-3 font-mono font-extrabold text-[clamp(2rem,3vw,6rem)] leading-[0.9]">
          Till dig som medlem
        </h1>

        <p class="mt-6 max-w-2xl font-sans text-[clamp(1rem,1.5vw,1.5rem)] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua
        </p>
      </div>
    </div>
-->
