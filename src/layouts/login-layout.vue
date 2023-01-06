<template>
  <el-scrollbar
    class="relative w-full bg-default overflow-y-auto h-screen"
    v-loading.fullscreen.lock="loading"
  >
    <div class="relative">
      <div class="relative w-full">
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </div>
    </div>
  </el-scrollbar>
</template>

<script lang="ts">
import useStore from 'store/index';
import { defineComponent, computed } from "vue";

export default defineComponent({
  setup() {
    const store = useStore();
    const loading = computed(() => store.global.loading);
    return { loading };
  },
});
</script>
