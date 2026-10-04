<script setup lang="ts">
const Sponsors = [
  {
    logo: "https://s3.zyner.org/frontpage/assets/sponsors/31173.png",
    href: "https://go.zyner.org/31173",
    name: "31173 AB",
  },
  {
    logo: "https://s3.zyner.org/frontpage/assets/sponsors/sgc.png",
    href: "https://go.zyner.org/sgc",
    name: "Onlineförengingen SGC",
  },
  {
    logo: "https://s3.zyner.org/frontpage/assets/sponsors/swehosting.png",
    href: "https://go.zyner.org/swehosting",
    name: "SweHosting",
  },
  {
    logo: "https://s3.zyner.org/frontpage/assets/sponsors/fluxerhost.svg",
    href: "https://go.zyner.org/fluxerhost",
    name: "fluxer.host",
  },
  {
    logo: "https://s3.zyner.org/frontpage/assets/sponsors/46elks.svg",
    href: "https://go.zyner.org/46elks",
    name: "46elks",
  },
  {
    logo: "https://s3.zyner.org/frontpage/assets/sponsors/seaweedfs.svg",
    href: "https://go.zyner.org/seaweedfs",
    name: "SeaweedFS",
  },
  {
    logo: "https://s3.zyner.org/frontpage/assets/sponsors/byteme.svg",
    href: "https://go.zyner.org/byteme",
    name: "ByteMe",
  },
  {
    logo: "https://s3.zyner.org/frontpage/assets/sponsors/royalroppers.svg",
    href: "https://go.zyner.org/royalroppers",
    name: "RoyalRoppers",
  },
  {
    logo: "https://s3.zyner.org/frontpage/assets/sponsors/cachyos.svg",
    href: "https://go.zyner.org/cachyos",
    name: "CachyOS",
  },
  {
    logo: "https://s3.zyner.org/frontpage/assets/sponsors/pelican.svg",
    href: "https://go.zyner.org/pelican",
    name: "Pelican",
  },
  {
    logo: "https://s3.zyner.org/frontpage/assets/sponsors/fluxerapp.svg",
    href: "https://go.zyner.org/fluxerapp",
    name: "Fluxer.app",
  },
];
</script>

<template>
  <div
    class="flex-none flex items-center no-scrollbar animate-move group-hover:[animation-play-state:paused]"
  >
    <ULink
      v-for="item in Sponsors"
      :key="item.name"
      class="flex gap-4 items-center pr-24 hover:scale-110 duration-75"
      :href="item.href"
    >
      <img :src="item.logo" :alt="item.name" class="size-12" />
      <span class="text-xl">{{ item.name }}</span>
    </ULink>
  </div>
</template>
