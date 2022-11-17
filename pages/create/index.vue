<script setup lang="ts">
const data = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
});

const router = useRouter();

async function createContact() {
  const contact = await $fetch("/api/contacts", {
    method: "POST",
    body: data,
  });

  if (contact) {
    router.push("/");
  }
}
</script>

<template>
  <div class="w-4/5 mx-auto p-10">
    <Heading title="Criar Contato">
      <NuxtLink to="/">
        <button
          class="bg-blue-600 hover:bg-blue-800 text-white px-5 py-3 rounded-lg"
        >
          Início
        </button>
      </NuxtLink>
    </Heading>
    <form class="bg-red-500 p-5" @submit.prevent="createContact">
      <input
        type="text"
        name="firstName"
        id="firstName"
        v-model="data.firstName"
      />
      <input
        type="text"
        name="lastName"
        id="lastName"
        v-model="data.lastName"
      />
      <input type="text" name="email" id="email" v-model="data.email" />
      <input
        type="text"
        name="phoneNumber"
        id="phoneNumber"
        v-model="data.phoneNumber"
      />

      <button type="submit">Criar</button>
    </form>
  </div>
</template>
