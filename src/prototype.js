const {Bundle} = require('engine');

module.exports = Bundle.createPrototype({
  title: "标签项",
  icon: require('./logo.svg'),
  category: null,
  isInline: false,
  isContainer: true,
  canHovering: false,
  canSelecting: false,
  canDroping: true,
  canDraging: false,
  canDropto: false,
  initialChildren: null,
  configure: [{
    name: "key",
    title: "键值",
    fieldStyle: "none"
  }, {
    name: "tab",
    title: "名称",
    fieldStyle: "none"
  }, {
    name: "disabled",
    title: "禁用",
    fieldStyle: "none"
  }]
});
