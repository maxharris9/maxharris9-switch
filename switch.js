switchSetup = function (initialState, switchCallback, elementId, externalUpdate, paletteOverride, styleOverride) {
  var domElement = document.getElementById(elementId);

  var s = style(paletteOverride, styleOverride);

  var dataContext = {
    switchCallback: switchCallback,
    guid: generateGuid(),
    switchState: new ReactiveVar(initialState),
    externalUpdate: externalUpdate || new ReactiveVar(initialState), // an external ReactiveVar that changes the switch state
    switchLabelOpen: css.registerClass(css.merge(s.switchLabelBase, s.switchLabelOpen)),
    switchLabelClosed: css.registerClass(css.merge(s.switchLabelBase, s.switchLabelClosed)),
    nubOpen: css.registerClass(css.merge(s.switchBase, s.open)),
    nubClosed: css.registerClass(css.merge(s.switchBase, s.closed)),
    general: css.registerClass(s.general)
  };

  renderedView = Blaze.renderWithData(Template.switch, dataContext, domElement);
};

Template.switch.helpers({
  openState: function () {
    var data = Template.instance().data;
    return data.switchState.get();
  },
  general: function () {
    var data = Template.instance().data;
    return data.general;
  },
  switchLabel: function () {
    var data = Template.instance().data;
    return data.switchState.get() ? data.switchLabelOpen : data.switchLabelClosed;
  },
  nub: function () {
    var data = Template.instance().data;
    data.switchState.set(data.externalUpdate.get()); // external changes will trigger redraw
    return data.switchState.get() ? data.nubOpen : data.nubClosed;
  }
});

Template.switch.events({
  'click .switch': function (event, template) {
    var newState = !template.data.switchState.get();
    template.data.switchState.set(newState);
    template.data.externalUpdate.set(newState);
    template.data.switchCallback(newState);
  }
});