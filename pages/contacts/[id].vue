<script setup lang="ts">
const { id } = useRoute().params;

const { data: contact, error } = await useFetch(`/api/contacts/${id}`, {
  key: id as string,
});

const router = useRouter();

async function deletar() {
  await useFetch(`/api/contacts/${id}`, { method: "DELETE" });
  router.push("/");
}
</script>

<template>
  <h1>{{ contact }}</h1>
  <NuxtLink to="/">
    <button>Início</button>
  </NuxtLink>
  <button @click="deletar">Deletar</button>
</template>
