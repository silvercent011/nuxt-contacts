<script setup lang="ts">
const {
  data: contacts,
  error,
  refresh,
} = await useFetch("/api/contacts", {
  key: "contacts",
});

refresh();
</script>

<template>
  <div class="w-4/5 mx-auto p-10">
    <div class="flex items-center justify-between">
      <h1 class="text-6xl font-bold">Contatos</h1>
      <NuxtLink to="/create">
        <button
          class="bg-blue-600 hover:bg-blue-800 text-white px-5 py-3 rounded-lg"
        >
          Adicionar Contato
        </button>
      </NuxtLink>
    </div>
    <div v-if="!error">
      <ContactCard v-for="contact in contacts" :contact="contact" />
    </div>
  </div>
</template>
