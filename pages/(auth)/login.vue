<script setup lang="ts">
definePageMeta({
  middleware: ["guest-only"],
  layout: false,
});

const { login } = useAuth();

let form = reactive({
  username: '',
  password: '',
  remember: false
})

let connect = async () => {
  try {

    await login(form.username, form.password, form.remember);

  } catch {

  }
}
</script>

<template>
  <form @submit.prevent="connect">
    <h1>Login</h1>
    <input type="text" placeholder="Username" v-model="form.username" />
    <input type="password" placeholder="Password" v-model="form.password" />
    <button type="submit">Login</button>
  </form>
</template>

<style scoped>

</style>