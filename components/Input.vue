<script setup lang="ts">
interface InputProps {
  type: "text" | "email" | "password";
  title: string;
  modelValue?: string;
}

defineProps<InputProps>();

const emit = defineEmits(["update:modelValue"]);

function emitUpdate(event: Event) {
  // @ts-ignore
  emit("update:modelValue", event.target.value);
}
</script>

<template>
  <label class="text-lg font-bold">{{ title }}</label>
  <input
    class="px-3 py-2 rounded-md border-2 border-blue-300"
    :type="type"
    :value="modelValue"
    @input="emitUpdate"
  />
</template>
