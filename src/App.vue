<template>
  <el-config-provider :zIndex="9999">
    <Login v-if="!isAuthLayout" />
    <DefaultLayout v-else />
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent, inject, computed } from "vue";
import { ElConfigProvider } from "element-plus";
import DefaultLayout from "./layouts/default-layout.vue";
import Login from "./layouts/login-layout.vue";

export default defineComponent({
  components: {
    DefaultLayout,
    ElConfigProvider,
    Login,
  },
  inheritAttrs: false,

  setup() {
    const $message = inject<IMessage>("$message");
    const isAuthLayout = computed(() => true); // todo
    const initialize = () => {
      return Promise.resolve();
    };
    initialize().catch((error: Error) => {
      $message?.error(
        `Couldn't initialize the system with error: ${error.message}`
      );
    });

    return { zIndex: 3000, size: "small", isAuthLayout };
  },
});
</script>
<style>
#global-loading {
  z-index: 120000;
}
</style>
