<script setup lang="ts">
const data = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
});

const router = useRouter();

async function createContact() {
  const { data: contact, error } = await useFetch("/api/contacts", {
    method: "POST",
    body: data,
  });
  console.log(error);
  if (contact.value && !error.value) {
    router.push("/");
  }
}
</script>

<template>
  <form @submit.prevent="createContact">
    <input
      type="text"
      name="firstName"
      id="firstName"
      v-model="data.firstName"
    />
    <input type="text" name="lastName" id="lastName" v-model="data.lastName" />
    <input type="text" name="email" id="email" v-model="data.email" />
    <input
      type="text"
      name="phoneNumber"
      id="phoneNumber"
      v-model="data.phoneNumber"
    />

    <button type="submit">Criar</button>
  </form>
</template>
