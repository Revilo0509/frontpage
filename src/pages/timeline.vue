<template>
  <v-container>
    <v-timeline side="end">
      <v-timeline-item
        v-for="item in getItems()"
        :key="item.id"
        :dot-color="item.color"
        size="small"
      >
        <v-alert :color="item.color" :icon="item.icon" :value="true">
          <v-alert-title>
            <v-chip label variant="tonal" size="x-small">
              {{ date.format(item.date, "fullDateWithWeekday") }}
            </v-chip>
          </v-alert-title>
          {{ item.text }}
        </v-alert>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script setup>
import { mdiDomain, mdiFileSign, mdiPhone } from "@mdi/js";
import { useDate } from "vuetify";

const date = useDate();

const items = [
  {
    date: new Date("2025-02-08T17:55"),
    icon: mdiDomain,
    color: "green",
    text: "Vi grundar föreningen Zyner",
  },
  {
    date: new Date("2025-02-17"),
    icon: mdiFileSign,
    color: "indigo",
    text: "Vi skickar in ansökan om organisationsnummer till Skatteverket (SKV8400)",
  },
  {
    date: new Date("2025-03-18"),
    icon: mdiFileSign,
    color: "green",
    text: "Vi har fått vårat organisationsnummer från Skatteverket",
  },
  {
    date: new Date("2025-07-01"),
    icon: mdiPhone,
    color: "blue",
    text: "Föreningen har införskaffat ett telefonnummer",
  },
];

const getItems = () => {
  return items.sort((a, b) => b.date - a.date);
};
</script>
