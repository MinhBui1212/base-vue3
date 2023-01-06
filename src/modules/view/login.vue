<template>
  <div v-if="!isAuthenticated">Login</div>
</template>
<script lang="ts">
import useStore from "store/index";
import { defineComponent, computed } from "vue";
// import SplitBackground from "./components/SplitBackground.vue";
// import LoginForm from "./components/LoginForm.vue";
// import WelcomeLabel from "./components/WelcomeLabel.vue";

export default defineComponent({
  // components: {
  //   SplitBackground,
  //   LoginForm,
  //   WelcomeLabel,
  // },
  setup() {
    const store = useStore();
    const isAuthenticated = computed<boolean>(
      () => store.auth.getAuthenticationState
    );
    const accounts: string[] = [
      "admin@argon.com",
      "creator@argon.com",
      "member@argon.com",
    ];
    return {
      isAuthenticated,
      accounts,
    };
  },
});
</script>
