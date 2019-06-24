<template>
  <div :class="group">
    <slot></slot>
  </div>
</template>

<script>
import ks from "./base";
export default {
  name: "ksGroup",
  data: function() {
    return {
      group: ks.config.classNames.group
    };
  }
};
</script>

