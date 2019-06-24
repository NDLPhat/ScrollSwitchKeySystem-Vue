export { default as Item } from "./Item.vue";
export { default as Container } from "./Container.vue";
export { default as Group } from "./Group.vue";
export { default as Screen } from "./Screen.vue";
import * as directives from "./directives";

export default {
  install(Vue) {
    Vue.directive("ks-key-next", directives.ks_key_next);
    Vue.directive("ks-key-prev", directives.ks_key_prev);
    Vue.directive("ks-disable-key-next", directives.ks_disable_key_next);
    Vue.directive("ks-disable-key-prev", directives.ks_disable_key_next);
    Vue.directive("ks-disable", directives.ks_disable);
    Vue.directive("ks-focus", directives.ks_focus);
    Vue.directive("ks-center", directives.ks_center);
    Vue.directive("ks-timeout", directives.ks_timeout);
    Vue.directive("ks-circle", directives.ks_circle);
    Vue.directive("ks-href", directives.ks_href);
  }
};
// export default {
//   install(Vue) {
//     // Vue.component("Item", Item);
//     // Vue.component("Container", Container);
//     // Vue.component("Group", Group);
//     // Vue.component("Screen", Screen);

//     Vue.directive("ks-key-next", {
//       inserted(el, binding) {
//         if (ks.isContainer(el)) {
//           if (binding.arg === "container") $(el).attr("data-ks-key-next-container", binding.expression);
//           if (binding.arg === undefined) $(el).attr("data-ks-key-next", binding.expression);
//         }
//       }
//     });

//     Vue.directive("ks-key-prev", {
//       inserted(el, binding) {
//         if (ks.isContainer(el)) {
//           if (binding.arg === "container") $(el).attr("data-ks-key-prev-container", binding.expression);
//           if (binding.arg === undefined) $(el).attr("data-ks-key-prev", binding.expression);
//         }
//       }
//     });

//     Vue.directive("ks-disable-key-next", {
//       inserted(el, binding) {
//         if (ks.isContainer(el)) {
//           if (binding.arg === "container") $(el).attr("data-ks-disable-key-next-container", binding.expression);
//           if (binding.arg === undefined) $(el).attr("data-ks-disable-key-next", binding.expression);
//         }
//       }
//     });

//     Vue.directive("ks-disable-key-prev", {
//       inserted(el, binding) {
//         if (ks.isContainer(el)) {
//           if (binding.arg === "container") $(el).attr("data-ks-disable-key-prev-container", binding.expression);
//           if (binding.arg === undefined) $(el).attr("data-ks-disable-key-prev", binding.expression);
//         }
//       }
//     });

//     Vue.directive("ks-disable", {
//       inserted(el, binding) {
//         $(el).attr("data-ks-disable", "");
//       }
//     });

//     // ===============================================
//     // FOCUS, CENTER, TIMEOUT, CIRCLE
//     // ===============================================

//     Vue.directive("ks-focus", {
//       inserted(el) {
//         if (ks.isContainer(el)) {
//           $(el).addClass(ks.config.classNames.activeContainer);
//         } else if (ks.isItem(el)) {
//           $(el).addClass(`${ks.config.classNames.activeItem} ${ks.config.classNames.focus}`);
//         }
//       }
//     });

//     Vue.directive("ks-center", {
//       inserted(el, binding) {
//         console.log(ks, "directives");
//         if (ks.isContainer(el)) {
//           $(el).attr("data-ks-force-center", "");
//           if (binding.arg === "timeout") $(el).attr("data-ks-transition-timeout", binding.expression);
//         }
//       }
//     });

//     Vue.directive("ks-timeout", {
//       inserted(el, binding) {
//         if (ks.isContainer(el)) $(el).attr("data-ks-transition-timeout", binding.expression);
//       }
//     });

//     Vue.directive("ks-circle", {
//       inserted(el, binding) {
//         if (ks.isContainer(el)) $(el).attr("data-ks-circle-scroll", "");
//       }
//     });

//     // ===============================================
//     // HREF, HREF-TARGET
//     // ===============================================

//     Vue.directive("ks-href", {
//       inserted(el, binding) {
//         $(el).attr("data-ks-href", binding.value);
//         if (binding.arg === "target") $(el).attr("data-ks-href-target", "_self");
//       }
//     });
//   }
// };
