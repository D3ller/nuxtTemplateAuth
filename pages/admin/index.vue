<template>
  Welcome to the admin
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["admin-only"],
  layout: false,
});
</script>