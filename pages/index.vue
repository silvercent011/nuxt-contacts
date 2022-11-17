<script setup lang="ts">
import { Contact } from ".prisma/client";

const contacts = await $fetch<Contact[]>("/api/contacts");
</script>

<template>
  <div class="w-4/5 mx-auto p-10">
    <Heading title="Contatos">
      <NuxtLink to="/create">
        <button
          class="bg-blue-600 hover:bg-blue-800 text-white px-5 py-3 rounded-lg"
        >
          Adicionar Contato
        </button>
      </NuxtLink>
    </Heading>
    <ContactCard v-for="contact in contacts" :contact="contact" />
  </div>
</template>
