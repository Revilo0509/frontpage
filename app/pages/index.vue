<script setup lang="ts">
import ScrollingBanner from "~/components/scrollingbanner/ScrollingBanner.vue";
import GridInfo from "~/components/gridinfo/GridInfo.vue";
import ScalableInfo from "~/components/scalableinfo/ScalableInfo.vue";
import { lorem_short, lorem_long } from "../lib/consts";

const Sponsors = [
  {
    logo: "https://s3.zyner.org/frontpage/assets/sponsors/31173.png",
    href: "https://go.zyner.org/31173",
    name: "31173 AB",
  },
  {
    logo: "https://s3.zyner.org/frontpage/assets/sponsors/sgc.png",
    href: "https://go.zyner.org/sgc",
    name: "Onlineföreningen SGC",
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
  <UMain>
    <Hero></Hero>
    <ScrollingBanner :items="Sponsors" />
    <GridInfo
      :title1="lorem_short"
      :description1="lorem_long"
      :title2="lorem_short"
      :description2="lorem_long"
      :title3="lorem_short"
      :description3="lorem_long"
      :title4="lorem_short"
      :description4="lorem_long"
    />
    <ScalableInfo
      :title1="lorem_short"
      :description1="lorem_long"
      :title2="lorem_short"
      :description2="lorem_long"
      :title3="lorem_short"
      :description3="lorem_long"
      :title4="lorem_short"
      :description4="lorem_long"
    />
  </UMain>
</template>
