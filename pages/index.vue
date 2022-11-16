<script setup lang="ts">
const { data: contacts, error } = await useFetch("/api/contacts");
</script>

<template>
  <h1>Contatos</h1>
  <NuxtLink to="/create">
    <button>Adicionar Contato</button>
  </NuxtLink>
  <div v-if="!error">
    <div v-for="contact in contacts">
      <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
      <h3>{{ contact.email }}</h3>
      <h3>{{ contact.phoneNumber }}</h3>
      <NuxtLink :to="`/contacts/${contact.id}`">
        <button>Detalhes</button>
      </NuxtLink>
    </div>
  </div>
</template>
