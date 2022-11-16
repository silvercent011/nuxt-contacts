<script setup lang="ts">
import { Contact } from "@prisma/client";
defineProps<{ contact: Contact }>();
</script>

<template>
  <NuxtLink :to="`/contacts/${contact.id}`">
    <div
      class="border-2 transition-all hover:bg-blue-600 hover:text-white border-blue-600 p-5 my-5 rounded-lg"
    >
      <h2 class="text-xl font-bold">
        {{ contact.firstName }} {{ contact.lastName }}
      </h2>
      <h3>E-mail: {{ contact.email }}</h3>
      <h3>Telefone: {{ contact.phoneNumber }}</h3>
    </div>
  </NuxtLink>
</template>
