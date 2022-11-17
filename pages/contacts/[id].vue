<script setup lang="ts">
import { Contact } from ".prisma/client";

const { id } = useRoute().params;

const contact = await $fetch<Contact>(`/api/contacts/${id}`);

const router = useRouter();

async function deletar() {
  await $fetch(`/api/contacts/${id}`, { method: "DELETE" });
  router.push("/");
}
</script>

<template>
  <div class="w-4/5 mx-auto p-10">
    <Heading :title="`${contact.firstName} ${contact.lastName}`">
      <NuxtLink to="/">
        <button
          class="bg-blue-600 hover:bg-blue-800 text-white px-5 py-3 rounded-lg"
        >
          Início
        </button>
      </NuxtLink>
    </Heading>
    <h1>{{ contact }}</h1>
    <button
      class="bg-red-600 hover:bg-red-800 text-white px-5 py-3 rounded-lg"
      @click="deletar"
    >
      Deletar
    </button>
  </div>
</template>
