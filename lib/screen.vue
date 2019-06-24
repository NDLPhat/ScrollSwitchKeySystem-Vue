<template>
  <div :class="screen">
    <slot></slot>
  </div>
</template>

<script>
import ks from "./base";
export default {
  name: "ksScreen",
  data: function() {
    return {
      screen: ks.config.classNames.screen
    };
  }
};
</script>

