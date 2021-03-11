<template>
  <div class="h-full home">
    <h1 class="w-20 h-20 min-w-full bg-blueGray-700">LOGO</h1>
    <login-form />
  </div>
</template>

<script>
import LoginForm from "../components/Auth/LoginForm.vue";
export default {
  name: "Login",
  components: {
    LoginForm
  }
};
</script>
