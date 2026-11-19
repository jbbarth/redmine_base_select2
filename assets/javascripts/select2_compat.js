// Restores the `containerCss` option removed in Select2 4.1, still used by
// many plugins. Same behaviour as the 4.0 compat module: the CSS is applied
// to the .select2-selection element.
(function ($) {
  if (!$ || !$.fn.select2 || !$.fn.select2.amd) return;

  var require = $.fn.select2.amd.require;
  var Utils = require('select2/utils');
  var defaults = require('select2/defaults');

  function ContainerCSS () { }

  ContainerCSS.prototype.render = function (decorated) {
    var $selection = decorated.call(this);
    var containerCss = this.options.get('containerCss') || {};

    if (typeof containerCss === 'function') {
      containerCss = containerCss(this.$element);
    }

    return $selection.css(containerCss);
  };

  var apply = defaults.apply;

  defaults.apply = function (options) {
    var containerCss = options.containerCss;
    options = apply.call(this, options);

    if (containerCss != null) {
      options.selectionAdapter = Utils.Decorate(options.selectionAdapter, ContainerCSS);
    }

    return options;
  };
})(window.jQuery);
