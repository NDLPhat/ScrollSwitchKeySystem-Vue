<template>
  <div v-if="enableScroll" :class="container" ref="container">
    <slot></slot>
  </div>
  <div v-else :class="container" ref="container">
    <div :class="boundary" style="margin-bottom: 20px">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ks from "./base";
export default {
  name: "ksContainer",
  data: function() {
    return {
      container: ks.config.classNames.container,
      item: ks.config.classNames.item,
      boundary: ks.config.classNames.boundary,
      enableScroll: this.scroll === undefined ? true : false
    };
  },
  props: { scroll: String }
};
</script>


