import keysystem from "keysystem";

const config = {
  classNames: {
    screen: "vue_ks_screen",
    group: "vue_ks_group",
    container: "vue_ks_container",
    activeContainer: "vue_ks_active",
    boundary: "vue_ks_boundary",
    item: "vue_ks_item",
    activeItem: "vue_ks_active",
    focus: "vue_ks_focus"
  }
};

var ks = new keysystem(config);
ks.init();

export default ks;
