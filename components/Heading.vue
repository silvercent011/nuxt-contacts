<template>
  <div class="flex items-center justify-between">
    <h1 class="text-6xl font-bold">{{ title }}</h1>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
