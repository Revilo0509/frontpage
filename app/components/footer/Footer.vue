<template>
  <div class="w-full flex flex-col gap-32">
    <div class="flex flex-col justify-center items-center gap-8">
      <div class="w-fit text-center">
        <h1 class="text-6xl font-extrabold whitespace-nowrap mb-8">Lorem ipsum dolor</h1>
        <p class="text-xl w-0 min-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua?
        </p>
      </div>
      <!-- TODO: Point this button to the become member page -->
      <UButton
        class="flex justify-center hover:cursor-pointer text-white"
        label="Bli medlem idag!"
        href="#"
      />
    </div>
    <div class="flex justify-between p-8 border-t border-neutral-500">
      <div>
        <h1 class="font-bold text-accent-500">zyner.org</h1>
        <span>© {{ new Date().getFullYear() }} Zyner — Ideell förening · Org.nr 000000-0000</span>
      </div>
      <ul>
        <UIcon name="ant-design:phone-filled" class="size-8" />
      </ul>
    </div>
  </div>
</template>
