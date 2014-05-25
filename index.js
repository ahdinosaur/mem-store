var debug = require('debug')("mem-store");
var Fluxxor = require('fluxxor');
var uuid = require('node-uuid');

module.exports = function (name) {

  var actions = {};
  actions[name + "_create"] = "onCreate";
  actions[name + "_update"] = "onUpdate";
  actions[name + "_patch"] = "onPatch";
  actions[name + "_remove"] = "onRemove";

  return Fluxxor.createStore({
    actions: actions,

    initialize: function () {
      this[name] = {};
    },

    onCreate: function (data) {
      debug(name, "-store.onCreate", data);
      this[name][data.id] = data;
      this.emit("change");
    },

    onUpdate: function (data) {
      debug(name, "-store.onUpdate", data);
      this[name][data.id] = data;
      this.emit("change");
    },

    onPatch: function (data) {
      debug(name, "-store.onPatch", data);
      this[name][data.id] = data;
      this.emit("change");
    },

    onRemove: function (id) {
      debug(name, "-store.onRemove", data);
      delete this[name][id];
      this.emit("change");
    },
  });
};
