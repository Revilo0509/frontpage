<template>
  <footer class="w-full border-t border-neutral-500/70 bg-default">
    <UContainer class="py-12">
      <div class="flex flex-col items-center gap-8">
        <div class="w-fit text-center">
          <h2 class="mb-8 whitespace-nowrap text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            Lorem ipsum dolor
          </h2>
          <p class="w-0 min-w-full text-base text-muted sm:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua?
          </p>
        </div>

        <UButton
          class="justify-center"
          color="primary"
          size="lg"
          label="Bli medlem idag!"
          href="#"
        />
      </div>

      <div
        class="mt-12 flex flex-col gap-6 border-t border-neutral-500/70 pt-8 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h3 class="font-bold text-accent-500">zyner.org</h3>
          <p class="text-sm text-muted">
            © {{ new Date().getFullYear() }} Zyner — Ideell förening · Org.nr 000000-0000
          </p>
        </div>

        <ul class="flex items-center gap-3">
          <li>
            <ULink
              href="#"
              aria-label="Call Zyner"
              class="inline-flex text-primary hover:text-primary-600"
            >
              <UIcon name="ant-design:phone-filled" class="size-8" />
            </ULink>
          </li>
        </ul>
      </div>
    </UContainer>
  </footer>
</template>
