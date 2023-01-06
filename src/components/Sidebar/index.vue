<template>
  <aside
    v-if="!isMobile"
    ref="target"
    aria-labelledby="primary-heading"
    class="
      transition-all
      duration-300
      fixed
      z-20
      w-62.5
      bg-white
      flex-shrink-0
      overflow-hidden
      h-full
      items-center
      shadow-card
    "
  >
    <div class="flex flex-col mx-auto items-stretch h-full">Sidebar</div>
  </aside>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import navigation from "./SidebarNav";
import { checkIsMobile } from "utils/index";
import { Promotion } from "@element-plus/icons-vue";
// import useStore from "src/stores";

interface MenuItem {
  title: string;
  icon: any;
  path: string;
  name: string;
  color: string;
  children: any;
  requiresAuth: boolean;
}

export default defineComponent({
  name: "Sidebar",
  components: {
    Promotion,
  },
  setup() {
    const route = useRoute();
    // const store = useStore();
    const menuItems = ref<MenuItem[]>(navigation);
    const isMobile = checkIsMobile();

    const handleMenuClick = () => {
      // store.dashboard.toggleMenu()
    };

    return {
      isMobile,
      menuItems,
      route,
      handleMenuClick,
    };
  },
});
</script>
<style scoped>
.hidden-aside {
  @apply -translate-x-3/2 lg:translate-x-0 lg:block;
}
</style>
