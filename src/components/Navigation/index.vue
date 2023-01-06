<template>
  <div
    class="
      flex
      items-center
      bg-default
      border
      mx-0
      py-2
      px-3.25
      pl-2.75
      md:px-7.25
      shadow-sm
      h-18.5
      md:h-19.75
    "
    :class="{
      'bg-indigo-410 border-indigo-410 border-b-slate-50/10':
        !route.meta.isDarkBackground,
      'border-default border-b-cyan-30': route.meta.isDarkBackground,
    }"
  >
    <div class="w-full items-center justify-between">
      <div class="w-full flex basis-auto items-center">Navigation</div>
    </div>
  </div>
</template>

<script lang="ts">
// import useStore from 'src/stores'
import { defineComponent, ref, computed } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  name: "Navigation",
  components: {},
  setup() {
    const route: any = useRoute();
    // const store = useStore()

    return {
      route,
    };
  },
});
</script>
