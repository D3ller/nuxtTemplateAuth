<script setup lang="ts">
import UserPreview from "~/components/userPreview.vue";

const currentUser = useAuthUser();

</script>

<template>
  Welcome to NuxtTemplate!

  <div v-if="currentUser">
    <user-preview :user="currentUser" />
  </div>
</template>

<style scoped>

</style>