<template>
  <div :class="item">
    <slot></slot>
  </div>
</template>

<script>
import ks from "./base";
export default {
  name: "ksItem",
  data() {
    return {
      item: ks.config.classNames.item
    };
  }
};
</script>

