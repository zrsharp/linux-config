// Generated by CoffeeScript 1.10.0
(function() {
  var PassKeysMode, root,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  PassKeysMode = (function(superClass) {
    extend(PassKeysMode, superClass);

    function PassKeysMode() {
      PassKeysMode.__super__.constructor.call(this, {
        name: "passkeys",
        trackState: true,
        keydown: (function(_this) {
          return function(event) {
            return _this.handleKeyChar(event, KeyboardUtils.getKeyChar(event));
          };
        })(this),
        keypress: (function(_this) {
          return function(event) {
            return _this.handleKeyChar(event, String.fromCharCode(event.charCode));
          };
        })(this),
        keyup: (function(_this) {
          return function(event) {
            return _this.handleKeyChar(event, KeyboardUtils.getKeyChar(event));
          };
        })(this)
      });
    }

    PassKeysMode.prototype.handleKeyChar = function(event, keyChar) {
      if (event.altKey || event.ctrlKey || event.metaKey) {
        return this.continueBubbling;
      }
      if (keyChar && !this.keyQueue && keyChar.length === 1 && 0 <= this.passKeys.indexOf(keyChar)) {
        return this.stopBubblingAndTrue;
      } else {
        return this.continueBubbling;
      }
    };

    return PassKeysMode;

  })(Mode);

  root = typeof exports !== "undefined" && exports !== null ? exports : window;

  root.PassKeysMode = PassKeysMode;

}).call(this);
