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
    <form class="p-5" @submit.prevent="createContact">
      <InputWrapper>
        <Input v-model="data.firstName" type="text" title="Primeiro Nome" />
      </InputWrapper>
      <InputWrapper>
        <Input v-model="data.lastName" type="text" title="Último Nome" />
      </InputWrapper>
      <InputWrapper>
        <Input v-model="data.email" type="text" title="E-mail" />
      </InputWrapper>
      <InputWrapper>
        <Input v-model="data.phoneNumber" type="text" title="Telefone" />
      </InputWrapper>

      <button
        class="bg-blue-600 hover:bg-blue-800 text-white px-5 py-3 rounded-lg w-full"
        type="submit"
      >
        Criar
      </button>
    </form>
  </div>
</template>
