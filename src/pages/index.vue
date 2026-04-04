<template>
  <AppHero />

  <AppSection caption="Våra partners" title="Tack till våra partners" />
  <AppPartners :partners="conf.partners" />

  <AppSection caption="Vårt mål" title="Viktiga mål för oss" />
  <AppFeatures />

  <!-- <AppSection
    title="Bli medlem"
    subtitle="Vill du stötta det vi gör och vara en del av det? Bli medlem!"
  />
  <AppPricing /> -->

  <AppSection caption="Vårt team" title="Möt Zyner-teamet" />
  <AppTeam :members="conf.users" :roles="conf.roles" />

  <!-- <div v-for="team in conf.teams" :key="team.id">
    <AppSection
      :caption="team.summary"
      :description="team.description"
      :title="team.title"
    />
    <AppTeam
      :members="getTeamMembers(team.id)"
      :roles="conf.roles"
      :team-id="team.id"
    />
  </div> -->
</template>

<script setup lang="ts">
import { ref } from "vue";

import { getWebConfig, type User, type WebConfig } from "@/config";

const defaultConfig: WebConfig = {
  partners: [],
  teams: [],
  roles: [],
  users: [],
};

const conf = ref<WebConfig>(defaultConfig);

async function fetchConfig() {
  try {
    conf.value = await getWebConfig("/config.json");
  } catch (error) {
    console.error("Could not get config: " + error);
  }
}

fetchConfig();

function getTeamMembers(teamId: string): User[] {
  const members = conf.value.users.filter((user) =>
    user.teams.find((team) => team.id === teamId),
  );

  console.log("Members: ");
  console.log(members);

  let teamRoles = conf.value.roles.filter((role) =>
    members.some((member) =>
      member.teams.find((team) => team.id == teamId).roles.includes(role.id),
    ),
  );

  teamRoles = teamRoles.sort((a, b) => {
    return b.weight - a.weight;
  });

  console.log("Team roles: ");
  console.log(teamRoles);

  const teamRoleMembers = new Map<string, User[]>();
  for (const role of teamRoles) {
    const roleMembers = members.filter((member) =>
      member.teams.some((team) => team.roles.includes(role.id)),
    );
    teamRoleMembers.set(role.id, roleMembers);
  }

  const sortedUsers = new Array<User>();

  // eslint-disable-next-line unicorn/no-array-for-each
  teamRoleMembers.forEach((members) => {
    const sortedMembers = members.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    for (const member of sortedMembers) {
      if (!sortedUsers.includes(member)) {
        sortedUsers.push(member);
      }
    }
  });

  return sortedUsers;
}
</script>
