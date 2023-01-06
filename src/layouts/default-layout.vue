<template>
  <div
    class="h-screen overflow-hidden flex bg-slate-20 w-full"
    v-loading.fullscreen.lock="loading"
  >
    <sidebar />
    <div
      class="main-content flex flex-col flex-1 w-full overflow-auto"
      :class="`${'ml-62.5 cursor-pointer lg:cursor-default'}`"
    >
      <navigation />
      <div
        class="w-full h-full relative bg-transparent border-none"
        :class="{
          'bg-indigo-410': !route.meta.isDarkBackground,
        }"
      >
        <router-view v-slot="{ Component }">
          <component
            :is="Component"
            :class="{
              'py-1.25 px-4 md:px-7.5 lg:px-6.2': !route.meta.isFullWidthLayout,
            }"
          />
        </router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { HomeFilled } from "@element-plus/icons-vue";
import { useRoute } from "vue-router";
import useStore from "store/index";

export default defineComponent({
  name: "Layout",
  components: {
    HomeFilled,
  },

  setup() {
    const route: any = useRoute();
    const store = useStore();
    const loading = computed(() => store.global.loading);

    return {
      loading,
      route,
      store,
    };
  },
});
</script>

<style scoped>
.main-content {
  @apply transition-all duration-300;
}
@media screen and (max-width: 1023px) {
  .main-content {
    margin-left: 0 !important;
  }
}
</style>
