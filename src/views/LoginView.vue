<template>
  <div>
    <h1>Login</h1>
    <div>
      <input type="text" label="Login" v-model="login" />
      <input type="text" label="Password" v-model="password" />
    </div>
    <div>
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginView",
  setup() {
    let login = "";
    let password = "";

    const authenticate = () => {
      if (!login || !password) {
        alert("Fill inputs");
        return;
      }
    };

    return {
      login,
      password,
      authenticate,
    };
  },
});
</script>
