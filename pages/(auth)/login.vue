<script setup lang="ts">
definePageMeta({
  middleware: ["guest-only"],
  layout: false,
});

const { login } = useAuth();

let form = reactive({
  username: '',
  password: '',
  remerber: false
})

let connect = async () => {
  try {

    await login(form.email, form.password, form.remember);

  } catch {

  }
}
</script>

<template>
  <form @submit.prevent="connect">
    <h1>Login</h1>
    <input type="text" placeholder="Username" v-model="loginForm.username" />
    <input type="password" placeholder="Password" v-model="loginForm.password" />
    <button type="submit">Login</button>
  </form>
</template>

<style scoped>

</style>