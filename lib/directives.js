import ks from "./base";

export const ks_key_next = {
  inserted(el, binding) {
      if (ks.isContainer(el)) {
        if (binding.arg === "container") $(el).attr("data-ks-key-next-container", binding.expression);
        if (binding.arg === undefined) $(el).attr("data-ks-key-next", binding.expression);
      }
  }
};

export const ks_key_prev = {
  inserted(el, binding) {
      if (ks.isContainer(el)) {
        if (binding.arg === "container") $(el).attr("data-ks-key-prev-container", binding.expression);
        if (binding.arg === undefined) $(el).attr("data-ks-key-prev", binding.expression);
      }
  }
};

export const ks_disable_key_next = {
  inserted(el, binding) {
      if (ks.isContainer(el)) {
        if (binding.arg === "container") $(el).attr("data-ks-disable-key-next-container", binding.expression);
        if (binding.arg === undefined) $(el).attr("data-ks-disable-key-next", binding.expression);
      }
  }
};

export const ks_disable_key_prev = {
  inserted(el, binding) {
      if (ks.isContainer(el)) {
        if (binding.arg === "container") $(el).attr("data-ks-disable-key-prev-container", binding.expression);
        if (binding.arg === undefined) $(el).attr("data-ks-disable-key-prev", binding.expression);
      }
  }
};

export const ks_disable = {
  inserted(el, binding) {
      $(el).attr("data-ks-disable", "");
  }
};

// ===============================================
// FOCUS, CENTER, TIMEOUT, CIRCLE
// ===============================================

export const ks_focus = {
  inserted(el) {
      if (ks.isContainer(el)) {
        $(el).addClass(ks.config.classNames.activeContainer);
      } else if (ks.isItem(el)) {
        $(el).addClass(`${ks.config.classNames.activeItem} ${ks.config.classNames.focus}`);
      }
  }
};

export const ks_center = {
  inserted(el, binding) {
      if (ks.isContainer(el)) {
        $(el).attr("data-ks-force-center", "");
        if (binding.arg === "timeout") $(el).attr("data-ks-transition-timeout", binding.expression);
      }
  }
};

export const ks_timeout = {
  inserted(el, binding) {
      if (ks.isContainer(el)) $(el).attr("data-ks-transition-timeout", binding.expression);
  }
};

export const ks_circle = {
  inserted(el, binding) {
      if (ks.isContainer(el)) $(el).attr("data-ks-circle-scroll", "");
  }
};

// ===============================================
// HREF, HREF-TARGET
// ===============================================

export const ks_href = {
  inserted(el, binding) {
      $(el).attr("data-ks-href", binding.value);
      if (binding.arg === "target") $(el).attr("data-ks-href-target", "_self");
  }
};